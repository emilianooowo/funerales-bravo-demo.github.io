document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const serviceContents = document.querySelectorAll('.service-content');
    const defaultContent = document.querySelector('.default-content');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            menuItems.forEach(menuItem => menuItem.classList.remove('active'));

            this.classList.add('active');

            if (defaultContent) {
                defaultContent.style.display = 'none';
            }

            serviceContents.forEach(content => content.classList.remove('active'));

            const serviceType = this.getAttribute('data-service');
            const targetContent = document.querySelector(`[data-service="${serviceType}"].service-content`);

            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});