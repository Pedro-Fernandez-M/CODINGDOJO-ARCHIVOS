// document.addEventListener('DOMContentLoaded', (event) => {
//     document.body.addEventListener('click', function (e) {
//         if (e.target.id === 'alertButton') {
//             toggleBoxColor();
//         } else if (e.target.id === 'toggleButton') {
//             toggleDayNightMode();
//         }
//     });
// });

// function toggleDayNightMode() {
//     var body = document.body;
//     var currentColor = body.style.backgroundColor;
//     if (currentColor === 'rgb(249, 249, 249)' || currentColor === '') {
//         // Cambiar a modo noche
//         body.style.backgroundColor = '#333'; // Cambiar el color de fondo a modo noche
//     } else {
//         // Cambiar a modo día
//         body.style.backgroundColor = '#f9f9f9'; // Cambiar el color de fondo a modo día
//     }
// }

// function toggleBoxColor() {
//     var hoverBox = document.getElementById('hoverBox');
//     var currentColor = hoverBox.style.backgroundColor;
//     if (currentColor === 'rgb(76, 175, 80)') {
//         hoverBox.style.backgroundColor = '#f39c12'; // Cambio en el color de fondo
//     } else {
//         hoverBox.style.backgroundColor = '#4CAF50'; // Cambio en el color de fondo
//     }
// }


document.addEventListener('DOMContentLoaded', () => {
    const longTaskButton = document.getElementById('longTaskButton');
    const secondTaskButton = document.getElementById('secondTaskButton');
    const status = document.getElementById('status');
    const count = document.getElementById('count');
    let longTaskRunning = false;

    longTaskButton.addEventListener('click', () => {
        longTaskRunning = true;
        longTaskButton.disabled = true;
        secondTaskButton.disabled = false;
        status.textContent = 'Tarea Larga Corriendo...';
        count.textContent = ''; // Reset counter display

        // Simulate a long running task with a counter.
        let currentCount = 0;
        const intervalId = setInterval(() => {
            if (currentCount < 300) {
                count.textContent = currentCount++;
            } else {
                clearInterval(intervalId);
                status.textContent = '¡Tarea Larga Completa!';
                count.textContent = '';
                longTaskButton.disabled = false;
                longTaskRunning = false;
            }
        }, 10);
    });

    secondTaskButton.addEventListener('click', () => {
        if (longTaskRunning) {
            status.textContent = 'Debes esperar tu turno :(';
        }
    });
});