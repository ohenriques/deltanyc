// /**
//  * Updates the countdown timer based on the provided future date.
//  * @param {Date} futureDate - The future date to count down to.
//  */
// function updateCountdown(futureDate) {
//     const now = new Date();
//     const diff = futureDate - now;

//     if (diff < 0) {
//         document.getElementById('time-remaining').innerText = "The countdown has ended!";
//         return;
//     }

//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(diff / 1000 / 60) % 60;
//     const seconds = Math.floor(diff / 1000) % 60;

//     const months = futureDate.getMonth() - now.getMonth() +
//         (12 * (futureDate.getFullYear() - now.getFullYear()));

//     document.getElementById('time-remaining').innerText =
//         `Tempo restante: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
// }

// const futureDate = new Date('2024-09-11T08:45:00');

// updateCountdown(futureDate);

// setInterval(() => {
//     updateCountdown(futureDate);
// }, 1000);

window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav'); // Selecione sua navbar
    if (window.scrollY > 0) { // Verifica se a página foi rolada para baixo
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
});

window.addEventListener('scroll', function () {
    var nav = document.querySelector('nav');
    var body = document.body;
    if (window.scrollY > 0) {
        nav.classList.add('fixed-nav');
        body.classList.add('fixed-nav-padding'); // Adiciona padding ao body
    } else {
        nav.classList.remove('fixed-nav');
        body.classList.remove('fixed-nav-padding'); // Remove o padding do body
    }
});
