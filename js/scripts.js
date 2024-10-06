// Плавное появление контента при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    const projectDetails = document.querySelector('.project-details');
    const projectDescription = document.querySelector('.project-description');
    const footer = document.querySelector('.project-footer');
    const header = document.querySelector('header');

    // Анимация появления секции проектов
    setTimeout(() => {
        projectDetails.style.opacity = '1';
        projectDetails.style.transform = 'translateY(0)';
    }, 300);

    // Анимация появления описания проекта
    setTimeout(() => {
        projectDescription.style.opacity = '1';
        projectDescription.style.transform = 'translateY(0)';
    }, 500);

    // Анимация появления футера
    setTimeout(() => {
        footer.style.opacity = '1';
    }, 1000);

    // Изменение стиля хедера при прокрутке
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
