// Interactive Code Playground
document.addEventListener('DOMContentLoaded', function () {
    const codeExamples = {
        dockerfile: {
            title: 'Dockerfile',
            mode: 'dockerfile',
            content: `FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose port
EXPOSE 8000

# Run application
CMD ["python", "app.py"]`
        },
        'docker-compose': {
            title: 'docker-compose.yml',
            mode: 'yaml',
            content: `version: '3.8'

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`
        },
        nginx: {
            title: 'nginx.conf',
            mode: 'nginx',
            content: `server {
    listen 80;
    server_name example.com;
    
    location / {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
    
    location /static/ {
        alias /var/www/static/;
    }
}`
        },
        python: {
            title: 'app.py',
            mode: 'python',
            content: `from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, World!"

@app.route('/health')
def health():
    return {"status": "healthy"}, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)`
        }
    };

    let editor;
    const editorElement = document.getElementById('code-editor');
    const envOptions = document.querySelectorAll('.env-opt');
    const deployBtn = document.getElementById('deploy-btn');
    const outputPanel = document.getElementById('terminal-output');
    const editorTitle = document.getElementById('editor-title');

    // Initialize CodeMirror
    if (editorElement) {
        editor = CodeMirror.fromTextArea(editorElement, {
            lineNumbers: true,
            mode: 'dockerfile',
            theme: 'monokai',
            indentUnit: 2,
            lineWrapping: true,
            autofocus: true
        });

        // Load initial example
        loadExample('dockerfile');
    }

    // Handle environment selection
    envOptions.forEach(opt => {
        opt.addEventListener('click', function () {
            // Remove active class from all
            envOptions.forEach(o => o.classList.remove('active'));
            // Add to clicked
            this.classList.add('active');

            const value = this.getAttribute('data-value');
            loadExample(value);
        });
    });

    // Handle deploy button
    if (deployBtn) {
        deployBtn.addEventListener('click', function () {
            simulateDeploy();
        });
    }

    function loadExample(exampleKey) {
        const example = codeExamples[exampleKey];
        if (example && editor) {
            editor.setValue(example.content);
            editor.setOption('mode', example.mode);
            editorTitle.textContent = example.title;
        }
    }

    function simulateDeploy() {
        const activeOpt = document.querySelector('.env-opt.active');
        const exampleKey = activeOpt ? activeOpt.getAttribute('data-value') : 'dockerfile';

        // Clear output
        outputPanel.innerHTML = '';

        const timestamp = new Array(8).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        addOutputLine(`[SYSTEM] Initiating deployment for ${exampleKey}...`, 'info');

        setTimeout(() => {
            addOutputLine(`$ docker build -t myapp:${timestamp} .`, 'command');
            setTimeout(() => {
                addOutputLine('Sending build context to Docker daemon...', 'output');
                addOutputLine('Step 1/6 : FROM environment', 'output');
                addOutputLine('Step 2/6 : RUN security-audit --strict', 'output');
                addOutputLine('Successfully built container image.', 'success');

                setTimeout(() => {
                    addOutputLine(`$ docker-compose up -d`, 'command');
                    setTimeout(() => {
                        addOutputLine('Container started: prod-node-01', 'success');
                        addOutputLine('System integrity verified at 100%.', 'success');
                        addOutputLine('', 'output');
                        addOutputLine('Note: This is a safe pre-deployment simulation.', 'info');
                    }, 800);
                }, 800);
            }, 800);
        }, 400);
    }

    function addOutputLine(text, type = 'output') {
        const line = document.createElement('div');
        line.className = `terminal-line-output ${type}`;

        if (type === 'command') {
            line.innerHTML = `<span class="prompt">></span> <span>${text}</span>`;
        } else if (type === 'success') {
            line.innerHTML = `<span class="success" style="color:#10B981">✓</span> <span>${text}</span>`;
        } else if (type === 'info') {
            line.innerHTML = `<span class="info" style="color:#3B82F6">ℹ</span> <span>${text}</span>`;
        } else {
            line.innerHTML = `<span>${text}</span>`;
        }

        outputPanel.appendChild(line);
        outputPanel.scrollTop = outputPanel.scrollHeight;
    }
});
