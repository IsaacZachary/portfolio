// Interactive Code Playground
document.addEventListener('DOMContentLoaded', function() {
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
    const exampleSelect = document.getElementById('example-select');
    const deployBtn = document.getElementById('deploy-btn');
    const outputPanel = document.getElementById('terminal-output');
    const editorTitle = document.getElementById('editor-title');
    
    // Initialize CodeMirror
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
    
    // Handle example selection
    exampleSelect.addEventListener('change', function() {
        loadExample(this.value);
    });
    
    // Handle deploy button
    deployBtn.addEventListener('click', function() {
        simulateDeploy();
    });
    
    function loadExample(exampleKey) {
        const example = codeExamples[exampleKey];
        if (example) {
            editor.setValue(example.content);
            editor.setOption('mode', example.mode);
            editorTitle.textContent = example.title;
        }
    }
    
    function simulateDeploy() {
        const selectedExample = exampleSelect.value;
        const code = editor.getValue();
        
        // Clear output
        outputPanel.innerHTML = '';
        
        // Simulate deployment process
        addOutputLine('$ docker build -t myapp .', 'command');
        setTimeout(() => {
            addOutputLine('Sending build context to Docker daemon...', 'output');
            addOutputLine('Step 1/6 : FROM python:3.11-slim', 'output');
            addOutputLine('Step 2/6 : WORKDIR /app', 'output');
            addOutputLine('Step 3/6 : COPY requirements.txt .', 'output');
            addOutputLine('Step 4/6 : RUN pip install --no-cache-dir -r requirements.txt', 'output');
            addOutputLine('Step 5/6 : COPY . .', 'output');
            addOutputLine('Step 6/6 : CMD ["python", "app.py"]', 'output');
            addOutputLine('Successfully built abc123def456', 'success');
            
            setTimeout(() => {
                addOutputLine('$ docker run -d -p 8000:8000 myapp', 'command');
                setTimeout(() => {
                    addOutputLine('Container started: myapp-container-123', 'success');
                    addOutputLine('Application running at http://localhost:8000', 'success');
                    addOutputLine('', 'output');
                    addOutputLine('Note: This is a simulation. No actual containers were created.', 'info');
                }, 500);
            }, 500);
        }, 500);
    }
    
    function addOutputLine(text, type = 'output') {
        const line = document.createElement('div');
        line.className = `terminal-line-output ${type}`;
        
        if (type === 'command') {
            line.innerHTML = `<span class="prompt">$</span> <span>${text}</span>`;
        } else if (type === 'success') {
            line.innerHTML = `<span class="success">✓</span> <span>${text}</span>`;
        } else if (type === 'info') {
            line.innerHTML = `<span class="info">ℹ</span> <span>${text}</span>`;
        } else {
            line.innerHTML = `<span>${text}</span>`;
        }
        
        outputPanel.appendChild(line);
        outputPanel.scrollTop = outputPanel.scrollHeight;
    }
});
