document.addEventListener("DOMContentLoaded", () => {
    // Configuración de fecha y hora por defecto
    const fechaHoraInput = document.getElementById("fecha");

    if (fechaHoraInput) { // Verifica si el campo existe antes de asignarle valores
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // Ajustar la hora a la zona horaria local

        if (fechaHoraInput.type === "datetime-local") {
            fechaHoraInput.value = now.toISOString().slice(0, 16); // Formato para datetime-local
        } else if (fechaHoraInput.type === "date") {
            fechaHoraInput.value = now.toISOString().slice(0, 10); // Formato para date
        }
    }

    // Función para permitir la deselección de botones de radio al hacer clic en ellos nuevamente
    function habilitarDesmarcarRadios() {
        document.addEventListener("click", (event) => {
            if (event.target.type === "radio") {
                if (event.target.checked) {
                    if (event.target.wasChecked) {
                        event.target.checked = false; // Desmarcar si se hace clic nuevamente
                    }
                    event.target.wasChecked = !event.target.wasChecked; // Alternar estado
                }
            }
        });
    }

    // Llamamos a la función para manejar todos los radios en la página
    habilitarDesmarcarRadios();
});
