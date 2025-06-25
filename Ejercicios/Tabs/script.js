//Obtener el elemento del DOM
const tabsButtons = document.querySelectorAll('.tab-button');
const tabsContent = document.querySelectorAll('.tab');

// Función para mostrar una pestaña específica
function showTab(tabIndex) {
    // Ocultar todas las pestañas
    tabsContent.forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Remover la clase activa de todos los botones
    tabsButtons.forEach(button => {
        button.classList.remove('tab-button-active');
    });
    
    // Mostrar la pestaña seleccionada
    tabsContent[tabIndex].style.display = 'block';
    // Activar el botón correspondiente
    tabsButtons[tabIndex].classList.add('tab-button-active');
}

// Agregar event listeners a todos los botones
tabsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showTab(index);
    });
});

// Mostrar la primera pestaña por defecto
showTab(0);

