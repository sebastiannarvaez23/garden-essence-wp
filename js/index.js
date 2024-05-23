function App() { }

window.onload = function (event) {
    let app = new App();
    window.app = app;
}

App.prototype.processingButton = function (event) {
    const btn = event.currentTarget;
    const carouselList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const carousel = track.querySelectorAll('.carousel');

    const carouselWidth = carousel[0].offsetWidth;

    const trackWidth = track.offsetWidth;
    const listWidth = carouselList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    btn.dataset.button == "button-prev" ? prevAction(leftPosition, carouselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carouselWidth, track);
}

let prevAction = (leftPosition, carouselWidth, track) => {
    if (leftPosition > 0) {
        track.style.left = `${-1 * (leftPosition - carouselWidth)}px`;
    }
}

let nextAction = (leftPosition, trackWidth, listWidth, carouselWidth, track) => {
    if (leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + carouselWidth)}px`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const imageLinks = document.querySelectorAll('.button');

    imageLinks.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita la acción por defecto del enlace
            enableVerticalScroll(); // Activa el desbordamiento vertical
            showImage(index + 1); // Muestra la imagen correspondiente
        });
    });

    function enableVerticalScroll() {
        // Activa el desbordamiento vertical
        document.documentElement.style.overflowY = 'scroll';
        document.body.style.overflowY = 'scroll';
    }

    function showImage(index) {
        const images = document.querySelectorAll('.img');
        const buttons = document.querySelectorAll('.button');
        const imageSlider = document.querySelector('.image-slider');

        // Restaura todos los elementos a su estado original
        images.forEach(function (img) {
            img.style.width = '240px';
            img.style.height = '370px';
            img.style.backgroundColor = 'transparent';
            img.style.filter = 'saturate(10%)';
        });

        buttons.forEach(function (button) {
            button.style.width = '240px';
            button.style.height = '370px';
            button.style.backgroundColor = 'rgba(0, 0, 0, .4)';
        });

        // Muestra la imagen seleccionada
        const selectedImage = images[index - 1];
        const selectedButton = buttons[index - 1];

        selectedImage.style.width = '300px';
        selectedImage.style.height = '500px';
        selectedImage.style.backgroundColor = 'transparent';
        selectedImage.style.filter = 'saturate(100%)';

        selectedButton.style.width = '300px';
        selectedButton.style.height = '500px';
        selectedButton.style.backgroundColor = 'transparent';

        // Aplica el desplazamiento horizontal
        switch (index) {
            case 1:
                imageSlider.style.left = '70%';
                break;
            case 2:
                imageSlider.style.left = '50%';
                break;
            case 3:
                imageSlider.style.left = '25%';
                break;
            case 4:
                imageSlider.style.left = '5%';
                break;
            case 5:
                imageSlider.style.left = '-25%';
                break;
            case 6:
                imageSlider.style.left = '-50%';
                break;
            case 7:
                imageSlider.style.left = '-70%';
                break;
        }
    }
});