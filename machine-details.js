// Base de datos de máquinas
const machinesData = {
    'metasploitable2': {
        name: 'Metasploitable 2',
        difficulty: 'easy',
        description: 'Metasploitable 2 es una máquina virtual Linux intencionalmente vulnerable, diseñada para enseñar sobre vulnerabilidades comunes y técnicas de penetration testing. Es ideal para principiantes que quieren aprender sobre seguridad informática en un entorno controlado.',
        objectives: [
            'Aprender técnicas básicas de reconocimiento de red',
            'Identificar servicios vulnerables corriendo en puertos abiertos',
            'Explotar vulnerabilidades conocidas usando Metasploit',
            'Obtener acceso root al sistema',
            'Practicar post-explotación y escalación de privilegios'
        ],
        tools: ['nmap', 'metasploit', 'searchsploit', 'netcat', 'ssh'],
        os: 'Linux Ubuntu 8.04',
        services: 'SSH, FTP, HTTP, MySQL, Samba',
        ports: '21, 22, 23, 25, 53, 80, 139, 445, 3306',
        vulnerabilities: 'UnrealIRCd, VSFTPD, Samba, Distcc',
        estimatedTime: '2-4 horas',
        references: [
            { title: 'Guía oficial de Metasploitable', url: '#' },
            { title: 'Walkthrough completo', url: '#' },
            { title: 'Lista de vulnerabilidades', url: '#' }
        ]
    },
    'dvwa': {
        name: 'DVWA',
        difficulty: 'medium',
        description: 'Damn Vulnerable Web Application (DVWA) es una aplicación web PHP/MySQL intencionalmente vulnerable. Está diseñada para ayudar a profesionales de seguridad a probar sus habilidades y herramientas en un entorno legal, así como para ayudar a desarrolladores web a comprender mejor los procesos de asegurar aplicaciones web.',
        objectives: [
            'Comprender las vulnerabilidades del OWASP Top 10',
            'Practicar ataques de SQL Injection',
            'Explotar vulnerabilidades XSS',
            'Realizar ataques de fuerza bruta',
            'Aprender sobre file inclusion vulnerabilities'
        ],
        tools: ['burp suite', 'sqlmap', 'dirb', 'nikto', 'browser'],
        os: 'Linux/Windows',
        services: 'Apache, MySQL, PHP',
        ports: '80, 443',
        vulnerabilities: 'SQL Injection, XSS, CSRF, File Inclusion',
        estimatedTime: '3-5 horas',
        references: [
            { title: 'Documentación oficial DVWA', url: '#' },
            { title: 'Tutorial de SQL Injection', url: '#' },
            { title: 'Guía de XSS attacks', url: '#' }
        ]
    },
    'htb-lame': {
        name: 'HackTheBox - Lame',
        difficulty: 'hard',
        description: 'Lame es una de las máquinas más clásicas de HackTheBox. Aunque es considerada "fácil" en HTB, aquí la clasificamos como difícil por requerir conocimientos más avanzados. Esta máquina enseña sobre la explotación de servicios Samba vulnerables y la importancia del reconocimiento detallado.',
        objectives: [
            'Realizar reconocimiento exhaustivo con nmap',
            'Identificar versiones específicas de servicios',
            'Explotar vulnerabilidades en Samba',
            'Comprender CVE-2007-2447',
            'Obtener shell reverso directo como root'
        ],
        tools: ['nmap', 'metasploit', 'smbclient', 'netcat', 'searchsploit'],
        os: 'Linux Ubuntu 8.04',
        services: 'FTP, SSH, Samba, Distcc',
        ports: '21, 22, 139, 445, 3632',
        vulnerabilities: 'CVE-2007-2447 (Samba), CVE-2004-2687 (Distcc)',
        estimatedTime: '1-3 horas',
        references: [
            { title: 'Writeup oficial HTB', url: '#' },
            { title: 'Análisis CVE-2007-2447', url: '#' },
            { title: 'Samba exploitation guide', url: '#' }
        ]
    },
    'webgoat': {
        name: 'WebGoat',
        difficulty: 'easy',
        description: 'WebGoat es una aplicación web intencionalmente insegura mantenida por OWASP, diseñada para enseñar lecciones de seguridad web. Cada lección incluye una tarea específica que demuestra una vulnerabilidad web común.',
        objectives: [
            'Completar lecciones interactivas de seguridad web',
            'Aprender sobre autenticación y autorización',
            'Practicar técnicas de injection',
            'Entender vulnerabilidades de sesión',
            'Explorar ataques del lado del cliente'
        ],
        tools: ['browser', 'burp suite', 'owasp zap', 'curl', 'postman'],
        os: 'Multiplataforma (Java)',
        services: 'HTTP (Spring Boot)',
        ports: '8080',
        vulnerabilities: 'OWASP Top 10 completo',
        estimatedTime: '4-6 horas',
        references: [
            { title: 'Documentación WebGoat', url: '#' },
            { title: 'OWASP Top 10 explained', url: '#' },
            { title: 'Web security fundamentals', url: '#' }
        ]
    },
    'kioptrix': {
        name: 'VulnHub - Kioptrix',
        difficulty: 'medium',
        description: 'La serie Kioptrix es una colección de máquinas vulnerables diseñadas para practicar técnicas de boot2root. Cada nivel incrementa en dificultad, enseñando diferentes aspectos de penetration testing y escalación de privilegios.',
        objectives: [
            'Dominar técnicas de enumeración completa',
            'Explotar servicios web vulnerables',
            'Practicar escalación de privilegios Linux',
            'Aprender sobre kernel exploits',
            'Desarrollar metodología sistemática'
        ],
        tools: ['nmap', 'dirb', 'nikto', 'exploit-db', 'gcc'],
        os: 'Linux (Various)',
        services: 'Apache, SSH, Samba, MySQL',
        ports: '22, 80, 139, 443, 445',
        vulnerabilities: 'Kernel exploits, Web apps, Services',
        estimatedTime: '2-5 horas',
        references: [
            { title: 'Kioptrix series walkthrough', url: '#' },
            { title: 'Linux privilege escalation', url: '#' },
            { title: 'Boot2root methodology', url: '#' }
        ]
    },
    'juiceshop': {
        name: 'Juice Shop',
        difficulty: 'easy',
        description: 'OWASP Juice Shop es probablemente la aplicación web moderna más sofisticada e intencionalmente insegura. Contiene vulnerabilidades de todo el OWASP Top 10 además de muchas otras fallas de seguridad encontradas en aplicaciones del mundo real.',
        objectives: [
            'Explorar aplicación web moderna vulnerable',
            'Resolver challenges de diferentes dificultades',
            'Aprender sobre OWASP Top 10 2021',
            'Practicar con tecnologías modernas (Angular, Node.js)',
            'Usar el scoreboard integrado para tracking'
        ],
        tools: ['browser', 'burp suite', 'owasp zap', 'postman', 'curl'],
        os: 'Multiplataforma (Node.js)',
        services: 'Node.js, Express, SQLite',
        ports: '3000',
        vulnerabilities: 'OWASP Top 10, Business logic flaws',
        estimatedTime: '3-8 horas',
        references: [
            { title: 'Juice Shop documentation', url: '#' },
            { title: 'Challenges solutions', url: '#' },
            { title: 'Modern web security', url: '#' }
        ]
    }
};

// Función para obtener parámetros de URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Función para cargar datos de la máquina
function loadMachineData() {
    const machineId = getUrlParameter('id');
    const machine = machinesData[machineId];
    
    if (!machine) {
        
        alert('[!] Maquina no encontrada. Redirigiendo al dashboard...');
        window.location.href = 'dashboard.html';
        return;
    }
    
    // update title pag
    document.title = `CyberLab Finder - ${machine.name}`;
    
    // update breadcrumb
    document.getElementById('current-machine').textContent = machine.name;
    
    // update main information
    document.getElementById('machine-name').textContent = machine.name;
    document.getElementById('machine-difficulty').textContent = machine.difficulty === 'easy' ? 'Fácil' : 
                                                                machine.difficulty === 'medium' ? 'Medio' : 'Difícil';
    document.getElementById('machine-difficulty').className = `difficulty ${machine.difficulty}`;
    
    // update description
    document.getElementById('machine-description').textContent = machine.description;
    
    // update objetives
    const objectivesList = document.getElementById('learning-objectives');
    objectivesList.innerHTML = '';
    machine.objectives.forEach(objective => {
        const li = document.createElement('li');
        li.textContent = objective;
        objectivesList.appendChild(li);
    });
    
    // update tools
    const toolsContainer = document.getElementById('recommended-tools');
    toolsContainer.innerHTML = '';
    machine.tools.forEach(tool => {
        const span = document.createElement('span');
        span.className = 'tool-tag';
        span.textContent = tool;
        toolsContainer.appendChild(span);
    });
    
    // update references
    const referencesContainer = document.getElementById('references');
    referencesContainer.innerHTML = '';
    machine.references.forEach(ref => {
        const a = document.createElement('a');
        a.href = ref.url;
        a.textContent = ref.title;
        a.onclick = (e) => {
            e.preventDefault();
            alert('[!]Funcionalidad en desarrollo: ' + ref.title);
        };
        referencesContainer.appendChild(a);
    });
    
    // update
    document.getElementById('machine-os').textContent = machine.os;
    document.getElementById('machine-services').textContent = machine.services;
    document.getElementById('machine-ports').textContent = machine.ports;
    document.getElementById('machine-vulns').textContent = machine.vulnerabilities;
    document.getElementById('estimated-time').textContent = machine.estimatedTime;
    
    
    document.getElementById('access-btn').onclick = () => {
        alert(`[+]Iniciando laboratorio: ${machine.name}\n\n[!]Funcionalidad en desarrollo.`);
    };
}

// progreso de los checkers
function setupProgressCheckers() {
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    const progressText = document.querySelector('.progress-text');
    
    // simulacion de checks, despues esto hay que verificar con la db
    const completedChecks = Math.floor(Math.random() * 3); 
    
    for (let i = 0; i < completedChecks; i++) {
        checkboxes[i].checked = true;
    }
    
    updateProgressText();
    
    // Agregar event listeners para cambios 
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgressText);
    });
    
    function updateProgressText() {
        const totalChecks = checkboxes.length;
        const completedChecks = document.querySelectorAll('.check-item input[type="checkbox"]:checked').length;
        progressText.textContent = `${completedChecks}/${totalChecks} Completado`;
    }
}

// Funcion para manejar clics en maquinas relacionadas
function setupRelatedMachines() {
    const relatedCards = document.querySelectorAll('.related-card');
    relatedCards.forEach(card => {
        card.addEventListener('click', function() {
            const machineName = this.querySelector('h3').textContent;
            alert(`[!]Funcionalidad en desarrollo: Navegar a ${machineName}`);
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    loadMachineData();
    setupProgressCheckers();
    setupRelatedMachines();
    
    console.log('Machine details page loaded successfully');
});