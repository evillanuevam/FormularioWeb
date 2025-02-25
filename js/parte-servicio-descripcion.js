// funcion para agregar un nuevo campo de descripcion
function agregarDescripcion() {
    const container = document.getElementById('descripcion-container');
    const nuevaDescripcion = document.createElement('div');
    nuevaDescripcion.classList.add('descripcion-item');
    nuevaDescripcion.innerHTML = `
        <div class="horario">
            <div class="horario-item">
                <label for="hora-inicio">Hora</label>
                <input type="time" id="hora-inicio" name="hora-inicio" required>
            </div>
        </div>
        <textarea id="descripcion-servicio" name="descripcion-servicio" placeholder="Describe el servicio realizado" required></textarea>
        <textarea id="descripcion-accion" name="descripcion-accion" placeholder="Describe la accion tomada (opcional)"></textarea>
        <!-- Nueva verificación dentro de un div similar a los textarea -->
        <div class="verificacion-container">
            <label for="verificacion">Verificación</label>
            <select id="verificacion" name="verificacion">
                <option value="si">Ok</option>
                <option value="no">No OK</option>
            </select>
        </div>
        <button type="button" class="btn-eliminar" onclick="eliminarDescripcion(this)" title="Eliminar">
            <i class="fa fa-trash"></i>
        </button>  
    `;
    container.appendChild(nuevaDescripcion);
}

// Eliminar descripción
function eliminarDescripcion(button) {
    const container = document.getElementById('descripcion-container');
    const item = button.closest('.descripcion-item');
    
    // Verifica si hay más de una descripción antes de eliminar
    if (container.children.length > 1) {
        item.remove();
    } else {
        alert("Debe haber al menos una descripción del servicio.");
    }
}


// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    habilitarDeseleccionRadios();
    
});

function toggleOtrosInput() {
    let otrosCheckbox = document.getElementById('otros');
    let otrosInput = document.getElementById('otros-material');

    // Si el checkbox está marcado, mostramos el input
    if (otrosCheckbox.checked) {
        otrosInput.style.display = 'inline-block';
        otrosInput.focus(); // Poner el cursor en el input
    } else {
        otrosInput.style.display = 'none';
        otrosInput.value = ''; // Limpiar el campo si se deselecciona
    }
}
