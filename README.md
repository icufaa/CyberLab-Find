# CyberLab Finder 🔐

**Plataforma Educativa de Hacking Ético y Ciberseguridad**

CyberLab Finder es una plataforma web diseñada para estudiantes y profesionales de la ciberseguridad que buscan practicar técnicas de hacking ético en un entorno controlado y legal. La plataforma unifica recursos prácticos (máquinas virtuales y laboratorios) con recursos teóricos (herramientas y documentación).

##  Objetivos del Proyecto

- Facilitar el aprendizaje de estudiantes de seguridad informática
- Proporcionar acceso centralizado a máquinas vulnerables para práctica
- Ofrecer un entorno seguro para el desarrollo de habilidades de pentesting
- Documentar y organizar herramientas y metodologías de ciberseguridad

##  Características Principales

### Sistema de Autenticación
- Login seguro con validaciones avanzadas
- Protección contra ataques de fuerza bruta
- Sanitización de inputs para prevenir XSS
- Rate limiting y timing attack protection

###  Gestión de Máquinas
- **Vista Grid**: Tarjetas visuales con información detallada
- **Vista Tabla**: Listado organizable y filtrable
- **Fichas Individuales**: Información completa de cada máquina
- Sistema de progreso con checkpoints

###  Funcionalidades Avanzadas
- Filtros por dificultad y sistema operativo
- Búsqueda en tiempo real
- Ordenamiento por múltiples criterios
- Interfaz responsive para dispositivos móviles
- Navegación fluida entre secciones

##  Estructura del Proyecto

```
cyberlab-finder/
├── index.html              # Página de login
├── styles.css              # Estilos del login
├── login.js                # Lógica de autenticación
├── dashboard.html          # Dashboard principal (vista grid)
├── dashboard.css           # Estilos del dashboard
├── dashboard.js            # Lógica del dashboard
├── machines-table.html     # Listado de máquinas en tabla
├── machines-table.css      # Estilos de la tabla
├── machines-table.js       # Lógica de la tabla
├── machine-details.html    # Página de detalles de máquina
├── machine-details.css     # Estilos de detalles
├── machine-details.js      # Lógica de detalles
└── README.md              # Este archivo
```

##  Credenciales de Acceso

Para acceder a la plataforma, utiliza una de las siguientes credenciales de prueba:

### Usuario Administrador
- **Usuario:** `admin`
- **Contraseña:** `Admin123!`

### Usuario Root
- **Usuario:** `root`
- **Contraseña:** `Root123!`

### Usuario Estándar
- **Usuario:** `user1`
- **Contraseña:** `User123!`

> **Nota:** Las contraseñas deben cumplir con los requisitos de seguridad (mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número).


### Navegación

1. **Login:** Ingresa con las credenciales proporcionadas
2. **Dashboard:** Vista principal con máquinas en formato grid
3. **Tabla:** Listado completo con filtros y ordenamiento
4. **Detalles:** Información específica de cada máquina
5. **Contacto:** Formulario para soporte técnico

##  Tecnologías Utilizadas

### Frontend
- **HTML5:** Estructura semantica y accesible
- **CSS3:** Diseño responsive con Flexbox y Grid
- **JavaScript Vanilla:** Funcionalidad sin frameworks externos

### Características Técnicas
- **HTML Semántico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **CSS Grid y Flexbox:** Layouts modernos y responsivos
- **Validaciones del lado del cliente:** Seguridad y UX mejorada
- **Progressive Enhancement:** Funciona sin JavaScript habilitado

##  Medidas de Seguridad Implementadas

### Autenticación
- ✅ Validación de formato de usuario y contraseña
- ✅ Sanitización de inputs (prevención XSS)
- ✅ Rate limiting (máximo 5 intentos por minuto)
- ✅ Protección contra timing attacks
- ✅ Bloqueo de paste en campos sensibles

### Frontend
- ✅ Validaciones con expresiones regulares
- ✅ Escape de caracteres especiales
- ✅ Límites de caracteres en inputs
- ✅ Navegación segura entre páginas

##  Máquinas Disponibles

La plataforma incluye **6 máquinas virtuales** para práctica:

| Máquina | Dificultad | Sistema | Enfoque |
|---------|------------|---------|---------|
| **Metasploitable 2** | Fácil | Linux Ubuntu | Vulnerabilidades básicas |
| **DVWA** | Medio | Web App | OWASP Top 10 |
| **HackTheBox - Lame** | Difícil | Linux Ubuntu | CVE específicos |
| **WebGoat** | Fácil | Java App | Lecciones interactivas |
| **VulnHub - Kioptrix** | Medio | Linux | Boot2root |
| **Juice Shop** | Fácil | Node.js | Vulnerabilidades modernas |

##  Funcionalidades por Página

###  Dashboard (dashboard.html)
- Vista grid de máquinas
- Estadísticas del usuario
- Formulario de contacto
- Navegación principal

###  Tabla (machines-table.html)
- Listado completo en formato tabla
- Filtros por dificultad y SO
- Búsqueda en tiempo real
- Ordenamiento por columnas
- Contador de resultados

###  Detalles (machine-details.html)
- Información completa de cada máquina
- Objetivos de aprendizaje
- Herramientas recomendadas
- Sistema de progreso con checkboxes
- Máquinas relacionadas



### Referencias
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Metasploit Unleashed](https://www.metasploit.com/)
- [VulnHub](https://www.vulnhub.com/)
- [HackTheBox](https://www.hackthebox.eu/)

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript Security](https://cheatsheetseries.owasp.org)



