document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const serviceContents = document.querySelectorAll('.service-content');
    const defaultContent = document.querySelector('.default-content');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remover clase active de todos los items
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));

            // Agregar clase active al item clickeado
            this.classList.add('active');

            // Ocultar contenido por defecto
            if (defaultContent) {
                defaultContent.style.display = 'none';
            }

            // Ocultar todos los contenidos
            serviceContents.forEach(content => content.classList.remove('active'));

            // Mostrar el contenido correspondiente
            const serviceType = this.getAttribute('data-service');
            const targetContent = document.querySelector(`[data-service="${serviceType}"].service-content`);

            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});