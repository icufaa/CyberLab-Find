// prevendir xss
function sanitizeInput(input) {
    return input.replace(/[<>\"'&]/g, function(match) {
        const escapeMap = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '&': '&amp;'
        };
        return escapeMap[match];
    });
}

// solo letras, guiones y numeros
function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
}

// regex para la contrasena
function validatePassword(password) {
    // min 8 caracteres y todo el control de caracteres
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// para mostrar errores porque estoy quedando 
function showError(message) {
    // remover un error anterior si este existiera
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    document.querySelector('.login-container').appendChild(errorDiv);
    
    // eliminar el error dsp de 5 seg
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Rate limiting simple esto es para la fuerza bruta
let loginAttempts = 0;
let lastAttempt = 0;

// login aca
function handleLogin(e) {
    e.preventDefault();
    
    const now = Date.now();
    const timeDiff = now - lastAttempt;
    
    // 5 intentos por minuto
    if (loginAttempts >= 5 && timeDiff < 60000) {
        showError('Demasiados intentos. Espera 1 minuto antes de intentar de nuevo.');
        return;
    }
    
    // reset despues de 1 min
    if (timeDiff > 60000) {
        loginAttempts = 0;
    }
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    
    // Validaciones de seguridad
    if (!username || !password) {
        showError('Por favor completa todos los campos.');
        return;
    }
    
    if (!validateUsername(username)) {
        showError('Usuario inválido. Solo letras, números, guiones y guiones bajos (3-20 caracteres).');
        return;
    }
    
    if (password.length < 8) {
        showError('La contraseña debe tener al menos 8 caracteres.');
        return;
    }
    
    // Limpiar inputs para prevenir XSS
    const cleanUsername = sanitizeInput(username);
    
    loginAttempts++;
    lastAttempt = now;
    
    // cambio de boton
    const loginBtn = document.querySelector('.login-btn');
    const originalText = loginBtn.textContent;
    loginBtn.textContent = '[/] Verificando...';
    loginBtn.disabled = true;
    
    // prara prevenir timing attack, despues implementar en la db
    setTimeout(() => {

        // diccionario de users
        const validUsers = {
            'admin': 'Admin123!',
            'user1': 'User123!'
        };
        
        if (validUsers[cleanUsername] && validUsers[cleanUsername] === password) {
            // login bien y chimpum
            loginAttempts = 0;
            
            
            loginBtn.textContent = '[+] Redirigiendo...';
            loginBtn.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000);
        } else {

            loginBtn.textContent = originalText;
            loginBtn.disabled = false;
            showError('[!]Usuario o contraseña incorrectos.');
        }
    }, 1000); // timing attack de nuevo por aca
}

// no hacer un pate en el campo contrasena
function preventPaste(e) {
    e.preventDefault();
    showError('[!] No se permite pegar en el campo de contrasena por seguridad.');
}


function clearFields() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Agregar event listener al formulario
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Prevenir copiar/pegar en campos sensibles
    document.getElementById('password').addEventListener('paste', preventPaste);
    
    // Limpiar campos al cargar
    clearFields();
});

// Limpiar campos al recargar para prevenir autocomplete malicioso
window.addEventListener('load', clearFields);