/* Full article bodies for the Writing section. Rendered at #article/<slug>. */
window.ARTICLES = [
{
slug:'ai-assisted-development', cat:'AI Development', read:'10 min', year:'2025',
title:'AI-Assisted Development: Boosting Productivity Without Sacrificing Quality',
lead:'AI tools let a one-person engineering team ship like a small one. They also make it very easy to ship code nobody understands. Here is how I use them at MobKazi without losing control of the codebase.',
body:`
<h2>Why this matters when you are the whole team</h2>
<p>At MobKazi I am the developer, the ops person and the architect. POS, ERP, SomaSteps, Sentinel, Shauri and the client websites all live in repositories I am responsible for. AI assistants are the reason that workload is possible. They are also the fastest way to fill those repositories with code that works today and confuses me in three months.</p>
<p>The rule I settled on is simple: <b>AI can write the code, but I own every line that gets merged.</b> Everything below is a way of enforcing that rule.</p>

<h2>1. Start with a written plan, not a prompt</h2>
<p>Before I ask for code I write a short plan: what the feature does, which files it touches, the data model change and how I will test it. Then I give the assistant that plan. Two things happen. The output is far more consistent with the rest of the codebase, and I have already done the thinking the code depends on.</p>
<pre><code># Feature: stock adjustment with reason codes
- Model: StockAdjustment(product, qty_delta, reason, user, created_at)
- Reasons: damaged | expired | count_correction | returned
- API: POST /api/stock/adjust  (role: manager)
- Side effect: update Product.stock in the same transaction
- Tests: negative stock rejected, cashier gets 403, audit row written</code></pre>

<h2>2. Small diffs, always</h2>
<p>A 600-line change from an assistant is unreviewable. I ask for one layer at a time: model and migration, then the service function, then the endpoint, then the UI. Each step is small enough to read properly and to roll back if it goes wrong.</p>

<h2>3. Tests are the contract</h2>
<p>I let AI draft tests, but I write or check the assertions myself, because the assertions are the specification. If the generated implementation passes tests I understand, I trust it far more than code that merely looks right.</p>

<h2>4. Review like it came from a stranger</h2>
<p>My checklist for any AI-written change:</p>
<ul>
<li><b>Data:</b> does every query filter by tenant or branch? Multi-tenant leaks are the most expensive bug I can ship.</li>
<li><b>Money:</b> are amounts integers or decimals, never floats?</li>
<li><b>Errors:</b> what happens on timeout, empty input or a duplicate request?</li>
<li><b>Secrets:</b> nothing hard-coded, nothing logged.</li>
<li><b>Dependencies:</b> did it add a package I did not ask for?</li>
</ul>

<h2>5. Keep the hard parts for yourself</h2>
<p>I use AI heavily for boilerplate, UI components, test scaffolding, documentation and migrations. I slow down and think for myself on authentication, payments, permissions, and anything that touches client data or money. AI is excellent at the first group and confidently wrong just often enough on the second.</p>

<h2>What changed in practice</h2>
<p>Features that used to take a weekend now take an evening, and the time saved goes into testing, deployment automation and talking to clients. The quality bar did not drop, because the review process did not change. The assistant just made the typing faster.</p>
<div class="callout"><b>Takeaway:</b> treat AI like a very fast junior developer. Give clear specs, review every change and never merge what you cannot explain.</div>
`},
{
slug:'docker-first-deployments', cat:'DevOps · Docker', read:'12 min', year:'2024',
title:'Getting Started with Docker: Lessons from My First Containerised Deployments',
lead:'Moving MobKazi’s apps onto Docker turned deployments from an anxious afternoon into a single command. These are the patterns that made the biggest difference.',
body:`
<h2>The problem Docker solved for me</h2>
<p>Before containers, every app on the server had its own Python or Node version, its own system packages and its own way of being restarted. Updating one app risked breaking another. Docker gave each app a sealed box with everything it needs, and the server only has to run boxes.</p>

<h2>Lesson 1: order your Dockerfile for the cache</h2>
<p>Docker rebuilds every layer after the first one that changed. Copy dependency files first and source code last, so a code change does not reinstall every package.</p>
<pre><code>FROM python:3.12-slim
WORKDIR /app
ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1

# dependencies change rarely: cache them
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# code changes often: copy it last
COPY . .
CMD ["gunicorn", "core.wsgi:application", "-b", "0.0.0.0:8000", "-w", "3"]</code></pre>
<p>On a typical Django project this took rebuilds from several minutes to a few seconds.</p>

<h2>Lesson 2: multi-stage builds for frontends</h2>
<p>A React or Vite build needs Node and hundreds of megabytes of packages, but the result is a folder of static files. Build in one stage, serve from a tiny one.</p>
<pre><code>FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf</code></pre>
<p>The final image is a few tens of megabytes instead of close to a gigabyte, and it contains no build tools an attacker could use.</p>

<h2>Lesson 3: Compose is your documentation</h2>
<p>A <code>docker-compose.yml</code> describes the whole stack in one file: the app, the database, the cache, and how they connect. When I come back to a project months later, that file tells me how it runs.</p>
<pre><code>services:
  web:
    build: .
    env_file: .env
    depends_on:
      db: { condition: service_healthy }
    restart: unless-stopped
  db:
    image: postgres:16-alpine
    volumes: [pgdata:/var/lib/postgresql/data]
    environment:
      POSTGRES_DB: app
      POSTGRES_PASSWORD: \${DB_PASSWORD}
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 5s
      retries: 10
volumes:
  pgdata:</code></pre>

<h2>Lesson 4: services talk by name</h2>
<p>Inside a Compose network the database host is simply <code>db</code>, not <code>localhost</code>. That one detail caused my first failed deployment. Keep the host in an environment variable so the same image runs on a laptop and on the server.</p>

<h2>Lesson 5: data lives in volumes, not containers</h2>
<p>Containers are disposable. Anything that must survive a rebuild goes in a named volume: database files, uploads, media. And a volume is not a backup. I run a nightly <code>pg_dump</code> to a separate location.</p>

<h2>Lesson 6: health checks and restart policies</h2>
<p><code>restart: unless-stopped</code> brings apps back after a reboot. Health checks stop the app from starting before its database is ready, which removes a whole class of start-up errors.</p>

<h2>My deploy today</h2>
<pre><code>git pull
docker compose build
docker compose up -d
docker compose ps</code></pre>
<p>Four commands, the same on every project. In CI it is one job.</p>
<div class="callout"><b>Takeaway:</b> order layers for the cache, build in stages, describe the stack in Compose, keep data in volumes and back it up separately.</div>
`},
{
slug:'support-to-devops', cat:'Career · DevOps', read:'10 min', year:'2024',
title:'From Technical Support to DevOps: A Practical Transition Guide',
lead:'Support work is a better foundation for DevOps than people think. Here is what carries over, what you need to add, and the order I would learn it in.',
body:`
<h2>What support already taught you</h2>
<p>As a technical support engineer I spent my days diagnosing network faults, configuring routers, fixing CCTV systems and helping users over the phone. None of that felt like DevOps at the time. Looking back, it was the core of it:</p>
<ul>
<li><b>Troubleshooting under pressure.</b> Production incidents are support tickets with higher stakes.</li>
<li><b>Thinking in layers.</b> "Is it DNS, the network, the service or the app?" is the same question whether the user is on Wi-Fi or in Kubernetes.</li>
<li><b>Documentation.</b> Good runbooks come from people who have had to explain fixes to others.</li>
<li><b>Empathy for users.</b> Reliability is about the people affected, not uptime percentages.</li>
</ul>

<h2>What you need to add</h2>
<p>The gap is mostly about <b>automation and code</b>. Support fixes things by hand; DevOps makes sure the fix happens automatically and the problem cannot recur.</p>
<ol>
<li><b>Linux, properly.</b> Processes, permissions, systemd, logs, SSH, package management. Run a small VPS and break it on purpose.</li>
<li><b>Git.</b> Branches, pull requests, resolving conflicts. Everything in DevOps lives in a repository.</li>
<li><b>One scripting language.</b> Bash for glue, Python for anything bigger.</li>
<li><b>Containers.</b> Dockerfiles and Compose. Containerise an app you already know.</li>
<li><b>CI/CD.</b> A pipeline that tests, builds and deploys on every push. GitHub Actions is a great start.</li>
<li><b>A reverse proxy and TLS.</b> Nginx, DNS records, HTTPS certificates. Cloudflare in front.</li>
<li><b>Monitoring.</b> Uptime checks first, then metrics and logs.</li>
<li><b>Infrastructure as code and orchestration.</b> Terraform and Kubernetes come last, once the basics are solid.</li>
</ol>

<h2>Build proof, not just certificates</h2>
<p>Certificates help, but a working project helps more. Pick a real app (yours or a small business you know), and take it all the way: containerised, deployed behind HTTPS, with a pipeline, backups and monitoring. Then write up what you did. That write-up is worth more in an interview than any badge.</p>

<h2>Use your current job</h2>
<p>Look for repetitive tasks in support and automate them: a script that checks a client’s services, a dashboard for device status, a template for network configs. Each one is DevOps experience you can talk about honestly.</p>

<h2>What my path looked like</h2>
<p>I moved from support and field work (networks, CCTV, Wi-Fi) into running every server and pipeline at MobKazi. The troubleshooting instincts came with me; Docker, CI/CD and automation were what I deliberately added. My live progress is on the <a href="#learning">DevOps roadmap</a>.</p>
<div class="callout"><b>Takeaway:</b> you already know how to debug systems. Learn to automate the fixes, and prove it with one real project end to end.</div>
`},
{
slug:'ai-practical-workflows', cat:'Development · AI', read:'9 min', year:'2024',
title:'AI-Assisted Development: Practical Workflows for Building Faster',
lead:'Concrete prompt patterns I use every week, when I reach for AI and when I deliberately do not, and the review loop that keeps it all safe.',
body:`
<h2>Pattern 1: give it the context a colleague would need</h2>
<p>Bad: "write a login page". Good: the framework, the existing auth model, the styling system, the error format and an example of a similar component already in the codebase. The more the assistant sees of your conventions, the less you rewrite.</p>

<h2>Pattern 2: ask for options before code</h2>
<p>For design decisions I ask: "Give me three ways to model recurring subscriptions in this schema, with trade-offs." I pick one, then ask for the implementation. This keeps the architecture my decision.</p>

<h2>Pattern 3: explain-back</h2>
<p>For unfamiliar code (a library, a legacy module), I ask the assistant to explain it, then I explain it back in my own words and ask what I got wrong. It is the fastest way I know to learn a new codebase.</p>

<h2>Pattern 4: tests first, then implementation</h2>
<pre><code>1. "Write pytest cases for calculate_vat(amount, rate) covering
    zero, rounding to 2dp and negative input."
2. Review and fix the assertions myself.
3. "Implement calculate_vat so these tests pass."</code></pre>

<h2>Pattern 5: the rubber-duck debugger</h2>
<p>Paste the error, the relevant code and what you already tried. Ask for the three most likely causes ranked by probability, not for a fix. Then check them yourself.</p>

<h2>When I use AI</h2>
<ul>
<li>Boilerplate: serializers, forms, CRUD views, migrations</li>
<li>UI components and responsive CSS</li>
<li>Regex, SQL and shell one-liners (always tested)</li>
<li>Docs, READMEs, commit messages and client-facing explanations</li>
<li>Converting between formats: JSON to types, CSV to fixtures</li>
</ul>

<h2>When I do not</h2>
<ul>
<li>Authentication, permissions and anything multi-tenant</li>
<li>Payment flows and money calculations</li>
<li>Deleting data, migrations on production databases</li>
<li>Pasting client data or secrets into any tool</li>
</ul>

<h2>The review loop</h2>
<p>Every AI change goes through the same steps: read the diff, run the tests, run it locally, check the edge cases from my checklist, and only then commit with a message I wrote myself. If I cannot explain a line, it does not get merged.</p>
<div class="callout"><b>Takeaway:</b> context in, options before code, tests as the contract, and a review loop that never gets skipped.</div>
`},
{
slug:'mpesa-daraja-integration', cat:'Payments', read:'11 min', year:'2023',
title:'M-Pesa API Integration for Kenyan Applications',
lead:'A practical guide to Safaricom’s Daraja STK Push: sandbox setup, the request, the callback, error codes and the UX details that decide whether customers trust your checkout.',
body:`
<h2>How STK Push works</h2>
<ol>
<li>Your server gets an OAuth access token from Daraja.</li>
<li>Your server sends an STK Push request with the amount and the customer’s phone number.</li>
<li>The customer sees a prompt on their phone and enters their M-Pesa PIN.</li>
<li>Safaricom calls your <b>callback URL</b> with the result.</li>
</ol>
<p>The important part: the response to step 2 only means the prompt was sent. Whether the customer actually paid arrives later, in step 4.</p>

<h2>Sandbox setup</h2>
<p>Create an app on the Daraja developer portal to get a consumer key and secret. The sandbox gives you a test shortcode and passkey for Lipa na M-Pesa Online. Your callback must be a public HTTPS URL; during development, a tunnel to your machine works.</p>

<h2>1. Get an access token</h2>
<pre><code>const BASE = 'https://sandbox.safaricom.co.ke';

async function token() {
  const auth = Buffer.from(KEY + ':' + SECRET).toString('base64');
  const r = await fetch(BASE + '/oauth/v1/generate?grant_type=client_credentials',
    { headers: { Authorization: 'Basic ' + auth } });
  return (await r.json()).access_token;   // valid for about an hour: cache it
}</code></pre>

<h2>2. Send the STK Push</h2>
<pre><code>function timestamp() {               // YYYYMMDDHHmmss
  return new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
}

async function stkPush(phone, amount, orderId) {
  const ts = timestamp();
  const password = Buffer.from(SHORTCODE + PASSKEY + ts).toString('base64');
  const r = await fetch(BASE + '/mpesa/stkpush/v1/processrequest', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + await token(), 'Content-Type': 'application/json' },
    body: JSON.stringify({
      BusinessShortCode: SHORTCODE, Password: password, Timestamp: ts,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Math.round(amount), PartyA: phone, PartyB: SHORTCODE, PhoneNumber: phone,
      CallBackURL: 'https://api.example.co.ke/mpesa/callback',
      AccountReference: orderId, TransactionDesc: 'Order ' + orderId
    })
  });
  return r.json();   // save CheckoutRequestID against the order
}</code></pre>
<p>The timestamp must be in Kenyan time on the server that generates it. If your server runs in UTC, convert before formatting, or the password will be rejected.</p>

<h2>3. Handle the callback</h2>
<pre><code>app.post('/mpesa/callback', async (req, res) => {
  const cb = req.body?.Body?.stkCallback;
  res.json({ ResultCode: 0, ResultDesc: 'Accepted' });   // acknowledge fast
  if (!cb) return;

  const order = await Orders.findByCheckoutId(cb.CheckoutRequestID);
  if (!order || order.status === 'paid') return;          // idempotent

  if (cb.ResultCode === 0) {
    const meta = Object.fromEntries(cb.CallbackMetadata.Item.map(i => [i.Name, i.Value]));
    await order.markPaid({ receipt: meta.MpesaReceiptNumber, amount: meta.Amount });
  } else {
    await order.markFailed(cb.ResultCode, cb.ResultDesc);
  }
});</code></pre>

<h2>Error codes you will see</h2>
<ul>
<li><b>0</b>: success</li>
<li><b>1032</b>: the customer cancelled the prompt</li>
<li><b>1037</b>: the customer could not be reached or did not respond in time</li>
<li><b>1</b>: insufficient balance</li>
<li><b>2001</b>: wrong PIN</li>
</ul>
<p>Show a friendly message for each one and offer a one-tap retry.</p>

<h2>UX that builds trust</h2>
<ul>
<li>Normalise phone numbers: accept 07…, 01…, +254… and convert to 2547… / 2541….</li>
<li>After sending, show "Check your phone and enter your M-Pesa PIN" with a live waiting state.</li>
<li>Poll your own backend for the order status, not Safaricom.</li>
<li>If no callback arrives within about a minute, use the STK Push Query API to check, then let the customer retry.</li>
<li>Always show the M-Pesa receipt number on the confirmation and the printed receipt.</li>
</ul>

<h2>Going live</h2>
<p>Production needs a real Paybill or Till number, the production passkey and a go-live approval from Safaricom. Keep keys in environment variables, log every request and callback, and reconcile against the M-Pesa statement daily.</p>
<div class="callout"><b>Takeaway:</b> the STK request is only half the story. Store the CheckoutRequestID, make the callback idempotent and design the waiting screen with care.</div>
`},
{
slug:'computer-packages-guide', cat:'Tutorial · Education', read:'5 min', year:'2022',
title:'Computer Packages Practical Tutorial Guide',
lead:'Why I wrote an 85-page booklet on computer packages, who it is for, and how to use it with the free course in the Academy.',
body:`
<h2>Why I wrote it</h2>
<p>While teaching computer packages at Humble Crib Investment, I noticed most learners did not struggle with the concepts. They struggled because the material was either too theoretical or tied to someone else’s situation. So I wrote a booklet built around tasks people actually need: a CV, a business letter, a budget, a price list, a presentation, a customer database.</p>

<h2>What it covers</h2>
<ol>
<li>Introduction to computers: what a computer is, types, components, hardware vs software</li>
<li>Anatomy of a computer: input, output, storage and communication devices</li>
<li>Operating systems: the Windows desktop, windows, booting, File Explorer, date and time</li>
<li>Microsoft Word: formatting, images, shapes, tables and columns</li>
<li>Microsoft Excel: data entry, formulas, functions and charts</li>
<li>Microsoft PowerPoint: slides, design, transitions and animations</li>
<li>Microsoft Access: tables, importing from Excel, queries, forms and reports</li>
<li>Microsoft Publisher: newsletters, business cards and certificates</li>
<li>Internet, email and networking basics</li>
<li>Recap, summary and final examination</li>
</ol>

<h2>How to use it</h2>
<p>Read a module, then do its practical exercise straight away. Every exercise produces something useful, so by the end you have a CV, a letter template, a budget and a presentation you can actually use.</p>
<p>The <a href="#academy/computer-packages">Computer Packages track</a> in my Academy follows the same ten modules, with a lesson summary, a hands-on lab and a quick check for each one. Your progress is saved in your browser.</p>
<div class="callout"><b>Read it free:</b> the full booklet is in the <a href="docs/computer-packages-booklet.pdf">document viewer</a>, where you can read, print, download or share it.</div>
`},
{
slug:'designing-for-reliability', cat:'Reliability', read:'12 min', year:'2025',
title:'Designing for Reliability: A Systems Perspective',
lead:'Small businesses do not need five nines. They need a POS that works on a Saturday afternoon. Reliability for a small team is mostly about simple architecture, good habits and knowing what to watch.',
body:`
<h2>Start from what failure costs the client</h2>
<p>A shop whose POS is down cannot sell. A school whose homework platform is down at 8pm has parents who cannot help their children. I start every design by asking what breaks for the client, at what time and for how long they can tolerate it. That answer decides where effort goes.</p>

<h2>Keep the architecture boring</h2>
<p>One well-understood stack (Django or Node, PostgreSQL, Nginx, Docker) running on a server I control beats a clever distributed design I cannot debug at 2am. Every extra moving part is another thing that can fail and another thing to monitor.</p>

<h2>Design for the network you actually have</h2>
<p>In Kenya, connectivity drops and power cuts happen. A POS that stops working when the internet blinks is not reliable, however good the server is. That means:</p>
<ul>
<li>Queueing sales locally when offline and syncing when the connection returns</li>
<li>Idempotent APIs, so a retried request does not create a duplicate sale</li>
<li>Clear status in the UI: online, offline, syncing</li>
<li>Recommending a UPS for the till and the router</li>
</ul>

<h2>Backups you have actually restored</h2>
<p>Automated nightly database dumps, stored off the server, with retention. And the step most people skip: restoring one regularly to prove it works. A backup you have never restored is a hope, not a backup.</p>

<h2>Watch the right things</h2>
<ol>
<li><b>Uptime checks</b> on every public URL, alerting my phone.</li>
<li><b>Disk space</b>: the most common cause of mysterious outages on a small server.</li>
<li><b>Certificate expiry</b> and domain renewals.</li>
<li><b>Error rates</b> in the application logs.</li>
<li><b>Business signals</b>: a shop that normally makes sales every few minutes and has made none in two hours probably has a problem, even if every check is green.</li>
</ol>

<h2>Deploy safely</h2>
<p>Every deploy goes through the same pipeline, migrations are backward compatible, and the previous image is kept so a rollback is one command. Deploys happen when clients are quiet, not on a Friday evening before a busy weekend.</p>

<h2>Support is part of the system</h2>
<p>Reliability includes people: a WhatsApp line clients can reach, trained staff on the client side, a runbook for common issues and someone who can go on site. At MobKazi our team trains clients in person, because a confused user can take a working system down as surely as a failed disk.</p>
<div class="callout"><b>Takeaway:</b> simple architecture, offline-aware design, tested backups, a short list of meaningful alerts and a support process clients can reach.</div>
`},
{
slug:'human-side-of-systems', cat:'Operations', read:'10 min', year:'2025',
title:'The Human Side of Systems: More Than Just Code',
lead:'The hardest problems in my projects have rarely been technical. They have been about expectations, communication and trust. Here is what running MobKazi has taught me about the people around the systems.',
body:`
<h2>Requirements are a conversation</h2>
<p>Clients describe what they do today, not what they need. A shop owner asks for "a system to track stock" when the real problem is that stock disappears between deliveries and the shelf. Asking "what happened the last time this went wrong?" gets to the real requirement faster than any specification template.</p>

<h2>Show early, show often</h2>
<p>I share working screens as early as possible, even rough ones. A five-minute demo on WhatsApp catches more misunderstandings than a long document. Clients feel involved, and nothing at handover is a surprise.</p>

<h2>Explain trade-offs in the client’s language</h2>
<p>"We can add offline mode, which means sales keep working when the internet drops, but it adds two weeks" is a decision a business owner can make. "We need a local-first sync layer with conflict resolution" is not.</p>

<h2>Training is part of delivery</h2>
<p>A system nobody knows how to use has failed, however good the code is. Every MobKazi project includes hands-on training for the people who will use it daily, not just the owner, plus a short guide in plain language.</p>

<h2>Write things down</h2>
<p>Scope, prices, timelines and decisions go in writing, even informally. It protects both sides and turns disagreements into simple checks of what was agreed.</p>

<h2>Be honest about problems</h2>
<p>When something breaks, I tell the client what happened, what I am doing about it and when it will be fixed, before they have to ask. Clients forgive outages. They do not forgive silence.</p>

<h2>Grow people, not just systems</h2>
<p>Mentoring at Power Learn Project and teaching computer packages taught me that explaining something clearly is a skill that makes you a better engineer. The team you build and the clients you educate are as much part of your infrastructure as your servers.</p>
<div class="callout"><b>Takeaway:</b> listen for the real problem, demo early, speak the client’s language, train users, write things down and communicate before you are asked.</div>
`}
];
