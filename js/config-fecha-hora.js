document.addEventListener("DOMContentLoaded", () => {
    // Configuración de fecha y hora por defecto
    const fechaHoraInput = document.getElementById("fecha");

    if (fechaHoraInput) { // Verifica si el campo existe antes de asignarle valores
        const now = new Date(); // Obtenemos la fecha y hora actual
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); // Ajustar la hora a la zona horaria local

        if (fechaHoraInput.type === "datetime-local") {
            fechaHoraInput.value = now.toISOString().slice(0, 16); // Formato para datetime-local(pagina parte de servicio)
        } else if (fechaHoraInput.type === "date") {
            fechaHoraInput.value = now.toISOString().slice(0, 10); // Formato para date (pagina parte de equipos)
        }
    }

});
