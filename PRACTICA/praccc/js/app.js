document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const mainSection = document.getElementById('main-section');
    const loginForm = document.getElementById('loginForm');
    const mealSection = document.getElementById('meal-section');
    const scanQRBtn = document.getElementById('scanQR');
    const registerMealBtn = document.getElementById('registerMeal');
    const generateReportBtn = document.getElementById('generateReport');
    const messageDiv = document.getElementById('message');

    let students = {};
    let meals = {};

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí se debería hacer la validación del usuario y contraseña
        if (username === 'admin' && password === 'admin') {
            loginSection.style.display = 'none';
            mainSection.style.display = 'block';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });

    scanQRBtn.addEventListener('click', () => {
        // Aquí debería ir el código para escanear el QR y obtener el RUN
        const studentName = document.getElementById('studentName').value;
        if (studentName === '') {
            alert('Por favor ingresa el nombre del alumno.');
            return;
        }

        const run = prompt('Simulación de QR: Ingresa el RUN escaneado del alumno');  // Esto es solo para simular el escaneo
        if (run) {
            students[run] = studentName;
            alert(`Alumno ${studentName} con RUN ${run} registrado`);
        }
    });

    registerMealBtn.addEventListener('click', () => {
        const run = prompt('Simulación de QR: Escanea el RUN del alumno para registrar comida');  // Simulación de escaneo
        const mealType = document.getElementById('mealType').value;

        if (!students[run]) {
            messageDiv.textContent = 'Alumno no registrado.';
            return;
        }

        const currentTime = new Date().toLocaleTimeString();
        if (meals[run] && meals[run][mealType]) {
            messageDiv.textContent = `El alumno ${students[run]} ya ha comido ${mealType}.`;
        } else {
            meals[run] = meals[run] || {};
            meals[run][mealType] = currentTime;
            messageDiv.textContent = `Comida registrada: ${students[run]} - ${mealType} a las ${currentTime}`;
        }
    });

    generateReportBtn.addEventListener('click', () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "RUN,Nombre,Desayuno,Almuerzo,Cena\n";

        Object.keys(students).forEach(run => {
            const studentMeals = meals[run] || {};
            csvContent += `${run},${students[run]},${studentMeals.desayuno || ''},${studentMeals.almuerzo || ''},${studentMeals.cena || ''}\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "reporte_comidas.csv");
        document.body.appendChild(link);

        link.click();
    });
});
