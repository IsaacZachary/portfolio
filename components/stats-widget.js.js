class Terminal {
    constructor() {
        this.commands = {
            help: this.showHelp.bind(this),
            about: this.showAbout.bind(this),
            projects: this.showProjects.bind(this),
            contact: this.showContact.bind(this),
            clear: this.clearTerminal.bind(this),
            theme: this.toggleTheme.bind(this)
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.printWelcomeMessage();
        this.addNewLine();
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            const commandLine = document.getElementById('command-line');
            
            if (e.key === 'Enter') {
                this.processCommand();
            } else if (e.key === 'Backspace') {
                if (commandLine.textContent.length > 0) {
                    commandLine.textContent = commandLine.textContent.slice(0, -1);
                }
            } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
                commandLine.textContent += e.key;
            }
        });
    }

    processCommand() {
        const commandLine = document.getElementById('command-line');
        const input = commandLine.textContent.trim();
        const [command, ...args] = input.split(' ');
        const cmd = command.toLowerCase();
        
        if (this.commands[cmd]) {
            this.commands[cmd](args);
        } else if (cmd) {
            this.printLine(`Command not found: ${command}. Type 'help' for available commands.`);
        }
        
        commandLine.textContent = '';
        this.addNewLine();
    }

    printWelcomeMessage() {
        this.printLine('Welcome to Isaac Zachary\'s Portfolio Terminal');
        this.printLine('Type "help" to see available commands');
    }

    showHelp() {
        this.printLine('Available commands:');
        this.printLine('  about     - Show about information');
        this.printLine('  projects  - List my projects');
        this.printLine('  contact   - Show contact information');
        this.printLine('  theme     - Toggle dark/light mode');
        this.printLine('  clear     - Clear terminal');
        this.printLine('  help      - Show this help');
    }

    showAbout() {
        this.printLine('Isaac Zachary - Software Support Engineer & DevOps Professional');
        this.printLine('Specializing in cloud-native solutions and automation');
        this.printLine('Based in Nairobi, Kenya');
    }

    showProjects() {
        this.printLine('Featured Projects:');
        this.printLine('1. TechCareAfrica - IT Helpdesk System (Python/Django)');
        this.printLine('2. DEFTEC Maintenance System (PHP/MySQL)');
        this.printLine('3. Star Wars Data Explorer (R/Shiny)');
    }

    showContact() {
        this.printLine('Contact Information:');
        this.printLine('Email: isaaczachary18@gmail.com');
        this.printLine('Phone: +254 759 325 915');
        this.printLine('LinkedIn: linkedin.com/in/isaaczachary');
        this.printLine('GitHub: github.com/IsaacZachary');
    }

    toggleTheme() {
        document.querySelector('.theme-toggle').click();
        this.printLine('Theme toggled successfully');
    }

    clearTerminal() {
        document.querySelector('.terminal-body').innerHTML = '';
        this.printWelcomeMessage();
        this.addNewLine();
    }

    printLine(text) {
        const terminalBody = document.querySelector('.terminal-body');
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.innerHTML = `<span class="prompt">$</span> <span class="command">${text}</span>`;
        terminalBody.appendChild(line);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    addNewLine() {
        const terminalBody = document.querySelector('.terminal-body');
        const newLine = document.createElement('div');
        newLine.className = 'terminal-line';
        newLine.innerHTML = '<span class="prompt">$</span> <span class="command" id="command-line"></span><span class="cursor">|</span>';
        terminalBody.appendChild(newLine);
        terminalBody.scrollTop = terminalBody.scrollHeight;
        
        // Focus on the new command line
        const commandLine = document.getElementById('command-line');
        if (commandLine) {
            commandLine.focus();
        }
    }
}