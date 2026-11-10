/* Isaac's Academy course content. Rendered at #academy/<course>[/<unit>]. */
window.COURSES = [
{
id:'computer-packages', tag:'Flagship track', level:'Beginner', hours:'12.5',
title:'Professional Computer Packages Mastery',
blurb:'Computer fundamentals, Windows and the Microsoft Office suite, taught through practical tasks: a CV, a budget, a presentation, a customer database and more. Based on my 85-page booklet.',
book:'docs/computer-packages-booklet.pdf',
units:[
{t:'Introduction to computers', d:'45 min',
 obj:['Define a computer and the input, process, output cycle','Tell types of computers apart','Name the main components','Explain hardware vs software'],
 body:`<p>A <b>computer</b> is an electronic device that accepts data, processes it according to instructions and produces a result. It always works in the same three steps: <b>input</b> (data and instructions come in), <b>processing</b> (the CPU works on them) and <b>output</b> (the result comes out in a useful form). Results can also be <b>stored</b> for later.</p>
<p><b>Data</b> is raw facts, like a list of names and marks. <b>Information</b> is data that has been processed into something meaningful, like a ranked results sheet.</p>
<h3>Types of computers</h3><ul><li><b>By size:</b> supercomputers, mainframes, minicomputers and microcomputers (desktops, laptops, tablets, smartphones).</li><li><b>By function:</b> general-purpose (your laptop) or special-purpose (an ATM, a POS terminal).</li><li><b>By data:</b> analog, digital or hybrid.</li></ul>
<h3>Components</h3><p>The <b>processor (CPU)</b> does the work, the <b>motherboard</b> connects everything, <b>memory (RAM)</b> holds what is in use right now, the <b>hard drive or SSD</b> stores files permanently, and the <b>monitor, keyboard and mouse</b> let you interact.</p>
<p><b>Hardware</b> is the physical parts you can touch. <b>Software</b> is the instructions that tell the hardware what to do: the operating system and applications.</p>`,
 lab:'Look at the computer or phone you are using. List three input devices, two output devices and one storage device it has, and say whether it is general-purpose or special-purpose.',
 q:[['Which is the correct order of a computer’s basic operations?',['Output, process, input','Input, process, output','Process, input, output'],1],
    ['Which of these is software?',['Keyboard','Microsoft Word','Motherboard'],1],
    ['A POS terminal at a supermarket is best described as…',['A special-purpose computer','A supercomputer','An analog computer'],0]]},
{t:'Anatomy of a computer', d:'50 min',
 obj:['Classify input, output, storage and communication devices','Understand units of memory','Compare HDD, SSD, USB and cloud storage'],
 body:`<h3>Input devices</h3><p>Send data into the computer: keyboard, mouse, scanner, microphone, webcam, barcode scanner, touch screen.</p>
<h3>Output devices</h3><p>Present results: monitor, printer, speakers, projector, receipt printer.</p>
<h3>Storage devices</h3><ul><li><b>Hard drive (HDD):</b> mechanical, large and cheap per gigabyte.</li><li><b>SSD:</b> flash memory, much faster and more durable, no moving parts.</li><li><b>USB flash drive:</b> small and portable.</li><li><b>CD and DVD:</b> optical discs, now mostly legacy.</li><li><b>Cloud storage:</b> provided by a third party and accessed over the internet (Google Drive, OneDrive).</li></ul>
<h3>Units of memory</h3><p>1 <b>bit</b> is a 0 or 1. 8 bits = 1 <b>byte</b> (about one character). 1,024 bytes = 1 KB, 1,024 KB = 1 MB, 1,024 MB = 1 GB, 1,024 GB = 1 TB.</p>
<h3>Communication devices</h3><p>Connect computers to each other and to the internet: modems, routers, network interface cards (NICs), Wi-Fi adapters.</p>`,
 lab:'Find out your computer’s storage type and size, and how much RAM it has (Windows: Settings → System → About, and This PC). Write them down in GB.',
 q:[['Which device is used for both input and output?',['Touch screen','Printer','Microphone'],0],
    ['How many bytes are in 1 KB?',['1,000','1,024','8'],1],
    ['Which storage is fastest?',['DVD','SSD','Hard drive (HDD)'],1]]},
{t:'Operating systems (Windows)', d:'1 h 15 min',
 obj:['Name the parts of the Windows desktop and of a window','Describe the booting process','Manage files and folders in File Explorer','Set the date and time'],
 body:`<p>An <b>operating system</b> manages the hardware and lets you run applications. Types include desktop (Windows, macOS, Linux), mobile (Android, iOS), server and embedded systems.</p>
<h3>Booting</h3><ol><li>Power on: the BIOS/UEFI starts.</li><li><b>POST</b> (Power-On Self Test) checks the hardware.</li><li>The <b>boot loader</b> is found and loads the OS.</li><li>Windows loads and shows the login screen.</li><li>You log in and the desktop appears.</li></ol>
<h3>The desktop</h3><p>Desktop, taskbar, Start menu, notification area, taskbar icons and desktop icons such as This PC and the Recycle Bin.</p>
<h3>Anatomy of a window</h3><p>Title bar, menu bar or ribbon, toolbar, status bar, scroll bars, and the <b>minimise, maximise and close</b> buttons.</p>
<h3>File Explorer</h3><ul><li>Create a folder: right-click → New → Folder.</li><li>Copy: Ctrl+C, paste: Ctrl+V, cut/move: Ctrl+X.</li><li>Rename: select and press F2.</li><li>Delete: Delete key (goes to the Recycle Bin).</li><li>Properties: right-click → Properties.</li></ul>
<p>Shut down properly from Start → Power → Shut down, so files are saved and the system closes cleanly.</p>`,
 lab:'In Documents, create a folder called "My Course", with subfolders Word, Excel, PowerPoint, Access and Publisher. You will save every exercise from this track there.',
 q:[['What does POST stand for?',['Power-On Self Test','Primary Operating System Task','Post Office Setup Tool'],0],
    ['Which shortcut renames a selected file?',['F2','Ctrl+R','F5'],0],
    ['Where do deleted files go first?',['The Recycle Bin','The cloud','They are erased immediately'],0]]},
{t:'Word processing (Microsoft Word)', d:'1 h 30 min',
 obj:['Create, save and open documents','Format text and paragraphs','Insert images, shapes and tables','Use columns'],
 body:`<h3>Basics</h3><p>File → New → Blank document. Save with <b>Ctrl+S</b>; the first time, choose a folder and a clear file name. Open with Ctrl+O.</p>
<h3>Formatting</h3><p>Select text, then on the <b>Home</b> tab change font, size, colour, bold (Ctrl+B), italic (Ctrl+I), underline (Ctrl+U) and alignment: left, centre, right, justify. Use <b>Styles</b> (Heading 1, Heading 2) for titles, so your document stays consistent and can generate a table of contents.</p>
<h3>Images and shapes</h3><p>Insert → Pictures or Shapes. Use Wrap Text to control how text flows around them.</p>
<h3>Tables and columns</h3><p>Insert → Table, pick rows and columns. Layout → Columns splits text into newspaper-style columns, ideal for flyers and newsletters.</p>
<h3>What people actually use Word for</h3><p>CVs and cover letters, business letters, flyers and brochures, invoices and quotations.</p>`,
 lab:'Create a one-page CV for yourself: your name as Heading 1, sections (Profile, Education, Experience, Skills) as Heading 2, a two-column table for contacts, and save it as a PDF too (File → Save As → PDF).',
 q:[['Which shortcut makes selected text bold?',['Ctrl+B','Ctrl+D','Ctrl+H'],0],
    ['Why use Heading styles?',['They make text red','Consistent formatting and an automatic table of contents','They lock the document'],1],
    ['Where do you split text into columns?',['Layout → Columns','View → Zoom','Insert → Symbol'],0]]},
{t:'Spreadsheets (Microsoft Excel)', d:'1 h 45 min',
 obj:['Know the Excel window','Enter and format data','Use SUM, AVERAGE, MAX and MIN','Create charts'],
 body:`<h3>The Excel window</h3><p>Title bar, Quick Access Toolbar, ribbon, <b>formula bar</b>, worksheet grid of <b>cells</b> (column letter + row number, e.g. B3), sheet tabs, status bar and zoom.</p>
<h3>Entering data</h3><p>Click a cell and type. Format numbers as Currency or Percentage on the Home tab. Use bold headers and borders so the sheet is easy to read.</p>
<h3>Formulas and functions</h3><p>Every formula starts with <b>=</b>.</p><ul><li><code>=B2*C2</code> quantity × price</li><li><code>=SUM(D2:D10)</code> total</li><li><code>=AVERAGE(D2:D10)</code> average</li><li><code>=MAX(D2:D10)</code> and <code>=MIN(D2:D10)</code> highest and lowest</li></ul><p>Drag the fill handle (bottom-right corner of a cell) to copy a formula down a column.</p>
<h3>Charts</h3><p>Select the data, then Insert → Chart. Column charts compare items, line charts show change over time, pie charts show parts of a whole.</p>`,
 lab:'Build a monthly budget: columns Item, Category, Planned, Actual and Difference (=D2-C2). Add totals with SUM and a column chart comparing Planned and Actual.',
 q:[['Every Excel formula begins with…',['=','#','@'],0],
    ['Which function adds up a range?',['=TOTAL()','=SUM()','=ADD()'],1],
    ['Which chart best shows sales over 12 months?',['Pie chart','Line chart','Doughnut chart'],1]]},
{t:'Presentations (Microsoft PowerPoint)', d:'1 h 15 min',
 obj:['Create a presentation and add slides','Format text and apply designs','Add images, shapes and charts','Use transitions and animations with restraint'],
 body:`<h3>Building slides</h3><p>Home → New Slide, then pick a layout (Title, Title and Content, Two Content). Apply a theme from the Design tab so every slide matches.</p>
<h3>Good slides</h3><ul><li>One idea per slide.</li><li>Few words, large text: around six bullets at most.</li><li>Use images and charts instead of paragraphs.</li><li>High contrast between text and background.</li></ul>
<h3>Transitions and animations</h3><p><b>Transitions</b> happen between slides; <b>animations</b> move items within a slide. Use subtle ones (Fade, Appear) and keep them consistent. Too many effects distract from your message.</p>
<h3>Presenting</h3><p>F5 starts from the beginning. Presenter View shows your notes and the next slide while the audience sees only the current one.</p>`,
 lab:'Make a 6-slide business proposal for a small shop going digital: problem, solution, features, cost, timeline and a closing slide with contacts. Apply one theme and one transition throughout.',
 q:[['Which key starts a slideshow from the first slide?',['F5','F2','F12'],0],
    ['Transitions are effects…',['between slides','on a single word','in Excel'],0],
    ['A good slide usually has…',['one clear idea','as much text as possible','a different font on every line'],0]]},
{t:'Databases (Microsoft Access)', d:'1 h 30 min',
 obj:['Understand tables, records and fields','Create related tables','Import data from Excel','Create queries, forms and reports'],
 body:`<h3>Key ideas</h3><p>A <b>database</b> stores organised data. A <b>table</b> holds one kind of thing (Customers), each <b>record</b> (row) is one item and each <b>field</b> (column) is one attribute. A <b>primary key</b> uniquely identifies each record.</p>
<h3>Relationships</h3><p>Separate tables for Customers and Orders, linked by CustomerID, so you never type a customer’s details twice.</p>
<h3>Importing from Excel</h3><p>External Data → New Data Source → From File → Excel, then follow the wizard and choose a primary key.</p>
<h3>Queries, forms and reports</h3><ul><li><b>Queries</b> ask questions: all customers in Nairobi, all books by one author.</li><li><b>Forms</b> make data entry easy and less error-prone.</li><li><b>Reports</b> present data for printing or sharing.</li></ul>`,
 lab:'Create a Books database with fields Title, Author, Genre and Read (Yes/No). Add 10 books, then build a query that lists all unread books in one genre.',
 q:[['A row in a table is called a…',['field','record','query'],1],
    ['What uniquely identifies each record?',['Primary key','Report','Form'],0],
    ['Which object answers questions like "customers in Nairobi"?',['Query','Form','Macro'],0]]},
{t:'Desktop publishing (Microsoft Publisher)', d:'1 h',
 obj:['Create a publication from a template','Add and arrange text boxes, images and shapes','Format objects for print'],
 body:`<p>Publisher is built for <b>layout</b>: placing text and images exactly where you want them on the page. Everything sits in a box (text box, picture frame, shape) that you can move, resize and layer.</p>
<h3>Getting started</h3><p>Start from a template (Business Cards, Newsletters, Certificates) or a blank page size. Use the built-in guides to align objects.</p>
<h3>Working with objects</h3><ul><li>Insert → Draw Text Box, Pictures or Shapes.</li><li>Arrange → Bring Forward or Send Backward to layer items.</li><li>Group related items so they move together.</li></ul>
<h3>Print-ready tips</h3><p>Leave a margin around the edges, use high-resolution images, stick to two fonts, and check the print preview before sending to a printer.</p>
<p>The same principles apply in Canva, which is how I design most MobKazi marketing today.</p>`,
 lab:'Design a business card (front and back) for a real or imagined company: logo, name, title, phone and email, plus a certificate of accomplishment for finishing this track.',
 q:[['Publisher is mainly used for…',['page layout and print design','calculations','databases'],0],
    ['Arrange → Send Backward is used to…',['layer objects','delete objects','print'],0],
    ['A print-ready design should…',['use high-resolution images','use as many fonts as possible','have text touching the edges'],0]]},
{t:'Internet, email & networking', d:'1 h 15 min',
 obj:['Explain how the internet works','Send, receive and attach files by email','Follow email etiquette','Describe LAN, WAN and Wi-Fi'],
 body:`<h3>The internet</h3><p>A global network of networks. Your device connects through an ISP; <b>DNS</b> turns names like google.com into IP addresses; your browser fetches pages over <b>HTTP/HTTPS</b>. The padlock means the connection is encrypted.</p>
<h3>Email</h3><p>Popular providers are Gmail, Outlook and Yahoo. A good email has a clear subject, a greeting, a short body and a sign-off. Use <b>CC</b> for people who should be informed and <b>BCC</b> to hide recipients from each other. Attach files with the paperclip icon, and mention the attachment in the message.</p>
<h3>Etiquette and safety</h3><ul><li>Professional address and signature.</li><li>Do not write in ALL CAPS.</li><li>Never open unexpected attachments or links asking for passwords: that is phishing.</li><li>Use strong, unique passwords and two-step verification.</li></ul>
<h3>Networking basics</h3><p>A <b>LAN</b> connects devices in one place (an office); a <b>WAN</b> connects distant sites (the internet is the largest WAN). <b>Wi-Fi</b> is a wireless LAN. A <b>router</b> connects your LAN to the internet.</p>`,
 lab:'Send a professional email to yourself with your CV from Unit 4 attached: a clear subject, greeting, two-line message and signature. Then turn on two-step verification on your email account.',
 q:[['What does DNS do?',['Turns domain names into IP addresses','Encrypts email','Stores files'],0],
    ['Which field hides recipients from each other?',['CC','BCC','To'],1],
    ['A network inside one office is a…',['WAN','LAN','DNS'],1]]},
{t:'Recap & final examination', d:'2 h',
 obj:['Review all nine modules','Complete an integrated practical project','Take the final quick check'],
 body:`<h3>Recap</h3><p>You can now explain how a computer works, manage files in Windows, and use Word, Excel, PowerPoint, Access and Publisher to produce real business documents, then share them safely by email.</p>
<h3>Final project: digitise a small business</h3><ol><li><b>Word:</b> a business letter introducing the shop to suppliers.</li><li><b>Excel:</b> a stock and sales sheet with totals and a chart.</li><li><b>Access:</b> a customer table and a query for repeat customers.</li><li><b>PowerPoint:</b> a 5-slide pitch to the owner.</li><li><b>Publisher:</b> a flyer announcing a promotion.</li><li><b>Email:</b> send everything as attachments in one professional email.</li></ol>
<p>Keep every file in the "My Course" folder from Unit 3. Together they make a small portfolio you can show an employer.</p>`,
 lab:'Complete the final project above. If you would like it reviewed or want a certificate for an instructor-led class, use the contact page.',
 q:[['Which app is best for a stock sheet with totals?',['Excel','Publisher','PowerPoint'],0],
    ['Which app is best for a printed promotional flyer?',['Access','Publisher','Excel'],1],
    ['To send several files professionally you should…',['attach them to one clear email','paste them into the subject','send one email per word'],0]]}
]},
{
id:'coffee-kiosk', tag:'Workshop', level:'Intermediate', hours:'8',
title:'Coffee Kiosk: Digital Ordering with M-PESA',
blurb:'Build a real ordering system end to end: a React menu and cart, a Node API with PostgreSQL, M-PESA STK Push payments, then Docker and an HTTPS deployment.',
units:[
{t:'Plan the system & data model', d:'45 min',
 obj:['Define the order flow','Design the tables','Set up the repository'],
 body:`<p>The flow: customer browses the menu → adds items → enters a phone number → pays with M-PESA → the kiosk screen shows the paid order → the barista marks it ready.</p>
<h3>Tables</h3><pre><code>products(id, name, price_kes, category, available)
orders(id, phone, total_kes, status, checkout_request_id, mpesa_receipt, created_at)
order_items(id, order_id, product_id, qty, unit_price_kes)</code></pre>
<p>Order status moves through <code>pending → awaiting_payment → paid → ready → collected</code>, or <code>failed</code>. Store money as whole shillings (integers).</p>`,
 lab:'Create a repository with /web and /api folders, a README describing the flow above, and a schema.sql with the three tables.',
 q:[['Why store prices as integers in shillings?',['Avoid floating-point rounding errors','It looks nicer','Databases cannot store decimals'],0],
    ['Which field links an order to its M-PESA request?',['checkout_request_id','category','qty'],0]]},
{t:'React menu & cart', d:'1 h',
 obj:['Render the menu from the API','Manage cart state','Build a mobile-first checkout'],
 body:`<p>Create the app with Vite. Fetch <code>/api/products</code>, group by category and render cards. Keep the cart in state as <code>{productId: qty}</code> and derive the total from it, never store the total separately.</p>
<pre><code>const total = Object.entries(cart)
  .reduce((s, [id, q]) =&gt; s + byId[id].price_kes * q, 0);</code></pre>
<p>Most customers will order on their phones: large tap targets, a sticky cart bar and a single phone-number field at checkout.</p>`,
 lab:'Build the menu page and a cart drawer showing items, quantities and a live total.',
 q:[['Why derive the total from the cart instead of storing it?',['It can never get out of sync','It is faster to type','React requires it'],0]]},
{t:'Node & Express API', d:'1 h',
 obj:['Create REST endpoints','Validate input','Recalculate prices on the server'],
 body:`<p>Endpoints: <code>GET /products</code>, <code>POST /orders</code>, <code>GET /orders/:id</code>, <code>POST /orders/:id/pay</code>, <code>POST /mpesa/callback</code>.</p>
<p><b>Never trust prices from the browser.</b> The client sends product IDs and quantities; the server looks up prices and computes the total.</p>`,
 lab:'Implement POST /orders that validates items, recalculates the total from the database and returns the new order.',
 q:[['Who should calculate the order total?',['The server','The browser','The customer'],0]]},
{t:'PostgreSQL & orders', d:'1 h',
 obj:['Connect to PostgreSQL','Use transactions','Seed the menu'],
 body:`<p>Use a connection pool (<code>pg</code>). Create the order and its items inside one <b>transaction</b>, so you never end up with an order missing its items.</p>
<pre><code>BEGIN;
INSERT INTO orders ... RETURNING id;
INSERT INTO order_items ...;
COMMIT;</code></pre>`,
 lab:'Write a seed script with 10 menu items and wrap order creation in a transaction.',
 q:[['Why use a transaction when creating an order?',['All inserts succeed or none do','It makes queries prettier','It encrypts data'],0]]},
{t:'M-PESA STK Push', d:'1 h 15 min',
 obj:['Get a Daraja token','Send an STK Push','Store the CheckoutRequestID'],
 body:`<p>Follow the request flow from my article <a href="#article/mpesa-daraja-integration">M-Pesa API Integration for Kenyan Applications</a>: OAuth token → password = base64(shortcode + passkey + timestamp) → POST to <code>/mpesa/stkpush/v1/processrequest</code>.</p>
<p>Normalise the phone number to <code>2547XXXXXXXX</code> or <code>2541XXXXXXXX</code>, set the order to <code>awaiting_payment</code> and save the <code>CheckoutRequestID</code>.</p>`,
 lab:'Trigger a sandbox STK Push from POST /orders/:id/pay and confirm the prompt arrives on the test number.',
 q:[['A successful STK Push response means…',['The prompt was sent, not that the customer paid','The money has arrived','The order is ready'],0]]},
{t:'Callbacks & live order status', d:'1 h',
 obj:['Handle the callback idempotently','Map result codes','Show live status to the customer and the kiosk'],
 body:`<p>Respond to Safaricom immediately, then process. Find the order by CheckoutRequestID; if it is already paid, do nothing. ResultCode 0 marks it paid with the receipt number; 1032 (cancelled) and 1037 (timeout) mark it failed with a retry button.</p>
<p>The customer page polls <code>GET /orders/:id</code> every two seconds; the kiosk screen lists paid orders for the barista.</p>`,
 lab:'Implement the callback and a kiosk screen that shows paid orders with a "Ready" button.',
 q:[['What does ResultCode 1032 mean?',['The customer cancelled','Payment succeeded','Insufficient funds'],0],
    ['Why make the callback idempotent?',['Callbacks can arrive more than once','It is faster','Daraja requires JSON'],0]]},
{t:'Dockerise with Compose', d:'1 h',
 obj:['Write Dockerfiles for web and api','Run the stack with Compose','Keep secrets in .env'],
 body:`<p>Multi-stage build for the React app served by Nginx, a slim Node image for the API, and PostgreSQL with a named volume. See <a href="#article/docker-first-deployments">my Docker lessons</a> for the patterns.</p>
<pre><code>docker compose up -d --build
docker compose logs -f api</code></pre>`,
 lab:'Run the whole system with one docker compose command on your machine.',
 q:[['Where should the Daraja secret live?',['In an environment variable / .env file','In the React code','In the README'],0]]},
{t:'Deploy behind Nginx with HTTPS', d:'1 h',
 obj:['Point a domain at your server','Reverse-proxy with Nginx','Enable HTTPS and set the live callback'],
 body:`<p>Create DNS records (I use Cloudflare), proxy <code>/</code> to the web container and <code>/api</code> to the API, and enable HTTPS. Daraja requires an HTTPS callback URL.</p>
<pre><code>location /api/ { proxy_pass http://api:3000/; }
location /     { proxy_pass http://web:80/; }</code></pre>
<p>Add an uptime check and a nightly database backup, and the kiosk is ready for real customers.</p>`,
 lab:'Deploy to a VPS, set the public callback URL and complete a sandbox payment end to end over HTTPS.',
 q:[['Why must the callback URL be HTTPS and public?',['Safaricom must reach it securely','It is faster','Nginx requires it'],0]]}
]}
];
