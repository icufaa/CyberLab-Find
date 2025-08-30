function accessMachine(machineId){
    showAlert(`[+] Iniciando acceso a la máquina: ${machineId.toUpperCase()}\n\nsin funcionalidad.`);
}
//detalles de la maquina
function viewMachineDetails(machineId) {
    window.location.href = `machine-details.html?id=${machineId}`;
}

function showAlert() {
    alert(message);
}

function handleMachineAccess(machineName){
    showAlert('[!] Sin funcionalidad por el momento: Acceso a ${machineName}');
}

function handleMachineInfo(machineName) {
    showAlert('[!] Sin funcionalidad por el momento:Informacion detallada de ${machineName}')
}

// formulario de contacto
function handleContactForm(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !subject || !message){
        alert('[!] Completa todos los campos');
        return;
    }

    //regex para validar el mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        alert.test('[!] Email Invalido');
        return;
    }
    

    // simu del envio
    alert('[+]Mensaje enviado correctamente\n\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\n\n esto no manda a ningun lado todavia');

    document.getElementById('contactForm').reset();
}

// navegacion suave
function smoothScroll(targetId){
    const element = document.getElementById(targetId);
    if (element){
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
}

// event listerner cuando el dom este loading
document.addEventListener('DOMContentLoaded',function(){

    //agrega un listeners a los botones de las maquinas
    const machineCards = document.querySelectorAll('.machine-card');

    machineCards.Cards.forEach(card =>{
        const machineName = card.querySelector('h3').textContent;
        const accesBtn = card.querySelector('.btn-primary');
        const infoBtn = card.querySelector('.btn-secondary');

        if (accesBtn) {
            accesBtn.addEventListener('click', () => handleMachineAccess(machineName));
        }

        if (infoBtn){
            infoBtn.addEventListener('click', () => handleMachineAccess(machineName));
        }
    });

    // event listener p formulario de contacto
    const contacForm = document.getElementById('contactForm');
    if (contactForm){
        contactForm.addEventListener('submit', handleContactForm);
    }

    //event listener p navegacion suave
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link =>{
        link.addEventListener('click', function(e){
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });

    // mensaje de bienvenuti
    console.log('[+] Dashboard cargado correctamente - CyberLab Finder');
});

function addCardEffects() {
    const cards = document.querySelectorAll('.machine-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function(){
            this.style.boxShadow = '0 8px 25px rgba(0, 255, 0, 0.2)';
        });

        card.addEventListener('mouseleave',function(){
            this.style.boxShadow = 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', addCardEffects);