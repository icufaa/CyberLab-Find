// para limpiar y validar input (caso de ataque XSS)
function sanitizeInput(input){
    return input.replace(/[<>\"'&]/g, function(match){
        const escapeMap = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '&': '&amp'
        };
        return escapeMap[match];
    });
}

// validar formato de usuario (solo letras, numeros y guiones)
function valideUsername(username){
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
}

//validar seg de contraseña
function validePassword(password){
    // Minimo 8 caracteres, al menos una mayuscula, una minuscula y un numero
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// mostrar errores
function showError(message){
    // eliminar el error anterior si es que existe
    const existingError = document.querySelector('.error-message');
    if (existingError){
        existingError.remove();
    }

    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-mesage';
    errorDiv.style.cssText = 'color: #ff4444; text-align: center; margin-top: 15px; font-size 14px';
    errorDiv.textContent = message;

    document.querySelector('.login-container').appendChild(errorDiv);

    // sacar el error despues de 5 seg
    setTimeout(()=>{
        errorDiv.remove();
    },5000);
}

// rate limiting simple para prevenir ataques de fb
let loginAttemps = 0;
let lastAttemp = 0;

//login funcion 

function handleLogin(e) {
    e.preventDefault();

    const now = Date.now()
    const timeDiff = now - lastAttemp;

    // limite de intentos para fb
    if (loginAttemps >= 5 && timeDiff < 60000){
        showError('[!] Demasiados intentos. Espera 1 minuto antes de intentar de nuevo.');
        return;
    }

    // reseteo del cont despois de 1 min
    if (timeDiff > 60000) {
        loginAttemps = 0;
    }

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        showError('[!] Por favor complete todos los campos.');
        return;
    }

    if (!validateUsername(username)) {
        showError('[!] usuario invalido, solo letras, numeros y guiones (3-20 caracteres).')
    }

    if (password.length < 8) {
        showError('[!] La contrasena tiene que tener al menos 8 caracteres.')
    }

    const cleanUsername = sanitizeInput(username); // prevenir el xss por aca

    loginAttemps++;
    lastAttemp = now;

    // aca despues tendria que agregar el modulo de tiempo para los timing attack con la db, mientras un diccionario basico
    setTimeout(() => {
        const validUsers ={
            'root':'Root123!',
            'admin':'Admin123!',
            'guest':'Guest123!'
        }

        if (validUsers[cleanUsername] && validUsers[cleanUsername] === password){
            //login exitoso se resetea intentos
            loginAttemps = 0;
            alert('[+] Credenciales Validas, Bienvenido' + cleanUsername);
            window.location.href = 'dashboard.html';
        }else{
            showError('[!] Usuario o contrasena incorrecta.');
        }
    }, 1000);
}


// que no puedan copiar/pegar en campos sensibles
function preventPaste(e){
    e.preventDefault();
    showError('[!] No se permite pegar en el campo de contraseñas, tipea.')
}

//limpiar campos al recargar para prevenir autocomplete maligno
function clearFields(){
    document.getElementById('username').value= '';
    document.getElementById('password').value= '';
}



// controlar esto despues - listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit',handleLogin); // esto agrega un event listener al form
    document.getElementById('password').addEventListener('paste'.preventPaste);
    clearFields();
});

// si recarga la pagina se borra todos los datos
window.addEventListener('load',clearFields);