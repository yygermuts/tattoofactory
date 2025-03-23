//Script para Arraste

    let isDown = false;
    let startX;
    let scrollLeft;

    const carousel = document.querySelector('#carouselWithCaptions .carousel-inner');

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; // Controle da velocidade de arraste
        carousel.scrollLeft = scrollLeft - walk;
    });


     // Obter o ano atual
     const year = new Date().getFullYear();

     // Definir o ano no elemento com o id "currentYear"
     document.getElementById('currentYear').textContent = year;