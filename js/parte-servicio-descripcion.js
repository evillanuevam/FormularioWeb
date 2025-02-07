// funcion para agregar un nuevo campo de descripcion
function agregarDescripcion() {
    const container = document.getElementById('descripcion-container');
    const nuevaDescripcion = document.createElement('div');
    nuevaDescripcion.classList.add('descripcion-item');
    nuevaDescripcion.innerHTML = `
        <div class="horario">
            <div class="horario-item">
                <label for="hora-inicio">Hora</label>
                <input type="time" name="hora-inicio" required>
            </div>
        </div>
        <textarea name="descripcion-servicio" placeholder="Describe el servicio realizado" required></textarea>
        <button type="button" class="btn-eliminar" onclick="eliminarDescripcion(this)">
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
