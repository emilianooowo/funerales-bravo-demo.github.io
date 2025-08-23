function toggleContent(plan, type) {
    const allSections = document.querySelectorAll(`#${plan}-instalaciones, #${plan}-domicilio`);
    allSections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(`${plan}-${type}`);
    targetSection.classList.add('active');

    const planCard = document.querySelector(`.plan-${plan}`);
    const buttons = planCard.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const activeButton = Array.from(buttons).find(btn =>
        btn.textContent.includes(type === 'instalaciones' ? 'Instalaciones' : 'Domicilio')
    );
    if (activeButton) {
        activeButton.classList.add('active');
    }

    const hiddenItems = targetSection.querySelectorAll('.mobile-hidden');
    const verMasBtn = targetSection.querySelector('.ver-mas-btn');
    hiddenItems.forEach(item => item.classList.remove('show'));
    if (verMasBtn) {
        verMasBtn.classList.remove('expanded');
        verMasBtn.innerHTML = 'Ver más <span class="arrow">↓</span>';
    }
}

function toggleMobileContent(sectionId) {
    const section = document.getElementById(sectionId);
    const hiddenItems = section.querySelectorAll('.mobile-hidden');
    const button = section.querySelector('.ver-mas-btn');
    const isExpanded = button.classList.contains('expanded');

    hiddenItems.forEach(item => {
        if (isExpanded) {
            item.classList.remove('show');
        } else {
            item.classList.add('show');
        }
    });

    if (isExpanded) {
        button.classList.remove('expanded');
        button.innerHTML = 'Ver más <span class="arrow">↓</span>';
    } else {
        button.classList.add('expanded');
        button.innerHTML = 'Ver menos <span class="arrow">↓</span>';
    }
}