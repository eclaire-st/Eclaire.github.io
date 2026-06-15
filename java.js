document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENÚ DESPLEGABLE RESPONSIVO ---
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    // Verifica si los elementos existen en la página actual
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Cambia el icono de barras a una 'X' al abrir el menú
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- 2. VALIDACIÓN DEL FORMULARIO DE INICIAR SESIÓN ---
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // Detiene el envío real del formulario (comportamiento por defecto)
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            // Limpiar estados de error anteriores
            errorMessage.classList.add('hidden');
            errorMessage.textContent = '';

            // Validación de ejemplo en el cliente
            if (email === "" || password === "") {
                mostrarError("Por favor, completa todos los campos requeridos.");
                return;
            }

            if (password.length < 6) {
                mostrarError("La contraseña debe tener al menos 6 caracteres.");
                return;
            }

            // Simulador de autenticación exitosa
            console.log("Datos enviados de forma segura:", { email, password });
            alert("¡Inicio de sesión simulado con éxito!");
            
            // Aquí puedes redirigir al usuario si lo deseas:
            // window.location.href = "index.html";
        });
    }

    /**
     * Función auxiliar para desplegar alertas de error en el login
     * @param {string} mensaje - El texto descriptivo del error.
     */
    function mostrarError(mensaje) {
        if (errorMessage) {
            errorMessage.textContent = mensaje;
            errorMessage.classList.remove('hidden');
        }
    }
});