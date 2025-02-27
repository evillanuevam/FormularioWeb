function agregarDescripcion() {
    const container = document.getElementById('descripcion-container');
    const nuevaDescripcion = document.createElement('div');
    nuevaDescripcion.classList.add('descripcion-item');

    // Crear un ID único para cada input de archivo
    const uniqueId = 'archivo_' + Date.now();

    nuevaDescripcion.innerHTML = `
        <div class="horario">
            <div class="horario-item">
                <label for="hora-inicio">Hora</label>
                <input type="time" name="hora-inicio" required>
            </div>
        </div>

        <textarea name="descripcion-servicio" placeholder="Describe el servicio realizado" required></textarea>
        <textarea name="descripcion-accion" placeholder="Describe la acción tomada (opcional)"></textarea>

        <!-- Contenedor de verificación y checkbox -->
        <div class="verificacion-container">
            <div class="verificacion-item">
                <label for="verificacion">Verificación</label>
                <select name="verificacion">
                    <option value="si">Ok</option>
                    <option value="no">No OK</option>
                </select>
            </div>

            <div class="incidencia-item">
                <label for="incidencia">Marque si es incidencia:</label>
                <input type="checkbox" class="incidencia-checkbox">
                <input type="hidden" name="incidencia" value="no">
            </div>
        </div>

        <!-- Sección de subida de archivo -->
        <div class="archivo-item">
            <input type="file" id="${uniqueId}" class="archivo-input" style="display: none;" onchange="mostrarNombreArchivo(this)">
            <button type="button" class="archivo-boton" onclick="document.getElementById('${uniqueId}').click();">
                📁 Subir archivo
            </button>
            <span class="archivo-nombre">Archivo no seleccionado</span>
        </div>

        <button type="button" class="btn-eliminar" onclick="eliminarDescripcion(this)" title="Eliminar">
            <i class="fa fa-trash"></i>
        </button>
    `;

    // Obtener el checkbox y su input hidden
    const checkboxIncidencia = nuevaDescripcion.querySelector('.incidencia-checkbox');
    const inputHidden = nuevaDescripcion.querySelector('input[type="hidden"][name="incidencia"]');

    // Evento para cambiar el color de fondo si es incidencia
    checkboxIncidencia.addEventListener('change', function() {
        if (this.checked) {
            nuevaDescripcion.style.backgroundColor = "#ffcccc"; // Rojo claro cuando es incidencia
            inputHidden.value = "si"; // Enviar "si" a la BD
        } else {
            nuevaDescripcion.style.backgroundColor = ""; // Color normal
            inputHidden.value = "no"; // Enviar "no" a la BD
        }
    });

    container.appendChild(nuevaDescripcion);
}

// Mostrar el nombre del archivo seleccionado
function mostrarNombreArchivo(input) {
    let nombreArchivo = input.files.length > 0 ? input.files[0].name : "No se ha seleccionado archivo";
    input.nextElementSibling.nextElementSibling.textContent = nombreArchivo;
}

// Función para habilitar el cambio de color en todas las descripciones (tanto las nuevas como las iniciales)
function activarCambioColorIncidencia() {
    document.querySelectorAll('.incidencia-checkbox').forEach(checkbox => {
        const descripcionItem = checkbox.closest('.descripcion-item');
        const inputHidden = descripcionItem.querySelector('input[type="hidden"][name="incidencia"]');

        checkbox.addEventListener('change', function () {
            if (this.checked) {
                descripcionItem.style.backgroundColor = "#ffcccc"; // Color rojo claro
                if (inputHidden) inputHidden.value = "si"; // Solo cambiar si el inputHidden existe
            } else {
                descripcionItem.style.backgroundColor = ""; // Color normal
                if (inputHidden) inputHidden.value = "no"; // Solo cambiar si el inputHidden existe
            }
        });
    });
}

// Asegurar que se ejecuta cuando la página se carga
document.addEventListener("DOMContentLoaded", activarCambioColorIncidencia);

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

// Función para mostrar material controlado en caso de "otros"
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
