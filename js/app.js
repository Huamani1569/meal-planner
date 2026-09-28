/* =========================================================
   app.js — Controlador principal de la aplicación
   - Registra los eventos (callbacks) de formularios y botones.
   - Gestiona los estados de la UI: cargando, resultados, vacío y error.
   - Crea y modifica los elementos del DOM (tarjetas y detalle).
   Usa las funciones de api.js (datos) y planner.js (plan semanal).
   ========================================================= */

// ---------- 1. REFERENCIAS A ELEMENTOS DEL DOM ----------
const formularioBusqueda = document.getElementById("formulario-busqueda");
const campoIngrediente = document.getElementById("campo-ingrediente");
const botonBuscar = document.getElementById("boton-buscar");
const botonesSugerencia = document.querySelectorAll(".sugerencia");

const estado = document.getElementById("estado");
const contadorResultados = document.getElementById("contador-resultados");
const listaResultados = document.getElementById("lista-resultados");

const detalle = document.getElementById("detalle");
const detalleVacio = document.getElementById("detalle-vacio");
const detalleContenido = document.getElementById("detalle-contenido");
const detalleImagen = document.getElementById("detalle-imagen");
const detalleNombre = document.getElementById("detalle-nombre");
const detalleCategoria = document.getElementById("detalle-categoria");
const detalleArea = document.getElementById("detalle-area");
const detalleIngredientes = document.getElementById("detalle-ingredientes");
const detalleInstrucciones = document.getElementById("detalle-instrucciones");

const formularioPlan = document.getElementById("formulario-plan");
const selectorDia = document.getElementById("selector-dia");
const mensajePlan = document.getElementById("mensaje-plan");

const calendario = document.getElementById("calendario");
const contadorPlan = document.getElementById("contador-plan");

// Texto original del botón (se restaura al terminar la búsqueda)
const TEXTO_BOTON_BUSCAR = botonBuscar.textContent;

// ---------- 2. ESTADO DE LA APLICACIÓN ----------
let recetaSeleccionada = null;   // receta que el usuario eligió de los resultados

// ---------- 3. ESTADOS DE LA INTERFAZ ----------

/**
 * Muestra un mensaje de estado.
 * tipo: "info" | "cargando" | "vacio" | "error"  → cambia la clase CSS (color e icono)
 */
function mostrarEstado(tipo, mensaje) {
  estado.className = "estado estado--" + tipo;
  estado.textContent = mensaje;
  estado.hidden = false;
}

function ocultarEstado() {
  estado.hidden = true;
}

/** Estado CARGANDO: mensaje con animación y botón desactivado. */
function mostrarCargando(ingrediente) {
  mostrarEstado("cargando", "Buscando recetas con «" + ingrediente + "»...");
  botonBuscar.disabled = true;
  botonBuscar.textContent = "Buscando...";
}

/** Se ejecuta siempre al terminar la búsqueda (con éxito o con error). */
function terminarCarga() {
  botonBuscar.disabled = false;
  botonBuscar.textContent = TEXTO_BOTON_BUSCAR;
}

/** Estado VACÍO: la búsqueda funcionó pero no hay recetas. */
function mostrarSinResultados(ingrediente) {
  mostrarEstado(
    "vacio",
    "No se encontraron recetas con «" + ingrediente + "». Prueba con otro ingrediente en inglés, por ejemplo: chicken, beef o rice."
  );
}

/** Estado ERROR: falló Fetch (sin internet, URL incorrecta, error del servidor...). */
function manejarError(error) {
  console.error("Error al consultar la API:", error);
  limpiarResultados();
  mostrarEstado(
    "error",
    "No se pudieron cargar las recetas. Revisa tu conexión a internet o inténtalo más tarde. (Detalle: " + error.message + ")"
  );
}

/** Borra las tarjetas y el contador de resultados. */
function limpiarResultados() {
  listaResultados.innerHTML = "";
  contadorResultados.textContent = "";
}

// ---------- 4. BÚSQUEDA (RF01, RF02, RF03) ----------

/**
 * CALLBACK del evento "submit" del formulario de búsqueda.
 * Se ejecuta cuando el usuario pulsa «Buscar recetas» o presiona Enter.
 */
function manejarBusqueda(evento) {
  evento.preventDefault();   // evita que el formulario recargue la página

  const ingrediente = campoIngrediente.value.trim().toLowerCase();

  // Validación 1: campo vacío
  if (ingrediente === "") {
    limpiarResultados();
    mostrarEstado("error", "Escribe un ingrediente antes de buscar.");
    campoIngrediente.focus();
    return;
  }

  // Validación 2: solo letras y espacios (sin números ni símbolos)
  if (!/^[a-záéíóúüñ\s]+$/.test(ingrediente)) {
    limpiarResultados();
    mostrarEstado("error", "El ingrediente solo puede contener letras. Ejemplo: chicken.");
    campoIngrediente.focus();
    return;
  }

  buscar(ingrediente);
}

/**
 * Flujo principal: Fetch → Promesa → resultados → DOM.
 */
function buscar(ingrediente) {
  limpiarResultados();
  mostrarCargando(ingrediente);

  buscarRecetasPorIngrediente(ingrediente)   // (api.js) devuelve una Promesa
    .then(function (recetas) {              // se ejecuta si la Promesa se resuelve
      if (recetas.length === 0) {
        mostrarSinResultados(ingrediente);
      } else {
        mostrarResultados(recetas);
      }
    })
    .catch(manejarError)                     // se ejecuta si la Promesa se rechaza
    .finally(terminarCarga);                 // se ejecuta siempre al final
}

/** Estado RESULTADOS: crea una tarjeta por cada receta. */
function mostrarResultados(recetas) {
  ocultarEstado();
  contadorResultados.textContent =
    "Se encontraron " + recetas.length + " recetas. Haz clic en una para ver su información.";

  recetas.forEach(function (receta) {
    const tarjeta = crearTarjetaReceta(receta, seleccionarReceta);
    listaResultados.appendChild(tarjeta);
  });
}

/**
 * Crea la tarjeta HTML de una receta (nombre, categoría, área e imagen).
 * @param {Object} receta          Datos de la receta
 * @param {Function} alSeleccionar CALLBACK que se ejecuta al hacer clic en la tarjeta
 * @returns {HTMLElement} la tarjeta lista para insertar en el DOM
 *
 * Estructura que genera:
 * <article class="tarjeta">
 *   <img class="tarjeta__imagen">
 *   <div class="tarjeta__cuerpo">
 *     <h3 class="tarjeta__nombre">...</h3>
 *     <p><span class="etiqueta">categoría</span> <span class="etiqueta etiqueta--area">área</span></p>
 *     <button class="tarjeta__boton">Ver receta</button>
 *   </div>
 * </article>
 */
function crearTarjetaReceta(receta, alSeleccionar) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";
  tarjeta.dataset.id = receta.id;

  const imagen = document.createElement("img");
  imagen.className = "tarjeta__imagen";
  imagen.src = receta.imagen + "/preview";
  imagen.alt = receta.nombre;
  imagen.loading = "lazy";

  const cuerpo = document.createElement("div");
  cuerpo.className = "tarjeta__cuerpo";

  const nombre = document.createElement("h3");
  nombre.className = "tarjeta__nombre";
  nombre.textContent = receta.nombre;

  const etiquetas = document.createElement("p");
  etiquetas.className = "detalle__etiquetas";

  const categoria = document.createElement("span");
  categoria.className = "etiqueta";
  categoria.textContent = receta.categoria;

  const area = document.createElement("span");
  area.className = "etiqueta etiqueta--area";
  area.textContent = receta.area;

  const boton = document.createElement("button");
  boton.type = "button";
  boton.className = "tarjeta__boton";
  boton.textContent = "Ver receta";

  // Armamos la tarjeta (de adentro hacia afuera)
  etiquetas.appendChild(categoria);
  etiquetas.appendChild(area);
  cuerpo.appendChild(nombre);
  cuerpo.appendChild(etiquetas);
  cuerpo.appendChild(boton);
  tarjeta.appendChild(imagen);
  tarjeta.appendChild(cuerpo);

  // Evento: al hacer clic en la tarjeta (o en su botón) se llama al callback
  tarjeta.addEventListener("click", function () {
    alSeleccionar(receta, tarjeta);
  });

  return tarjeta;
}

// ---------- 5. SELECCIÓN DE RECETA (RF04) ----------

/** CALLBACK que se ejecuta al hacer clic en una tarjeta. */
function seleccionarReceta(receta, tarjeta) {
  recetaSeleccionada = receta;

  // Quitamos el resaltado de la tarjeta anterior y resaltamos la nueva
  const anterior = document.querySelector(".tarjeta--seleccionada");
  if (anterior) {
    anterior.classList.remove("tarjeta--seleccionada");
  }
  tarjeta.classList.add("tarjeta--seleccionada");

  mostrarDetalle(receta);
  mensajePlan.hidden = true;

  // En pantallas pequeñas el detalle queda debajo: nos desplazamos hasta él
  if (window.innerWidth <= 900) {
    detalle.scrollIntoView({ behavior: "smooth" });
  }
}

/** Rellena el panel «Receta seleccionada» con la información básica. */
function mostrarDetalle(receta) {
  detalleVacio.hidden = true;
  detalleContenido.hidden = false;

  detalleImagen.src = receta.imagen;
  detalleImagen.alt = receta.nombre;
  detalleNombre.textContent = receta.nombre;
  detalleCategoria.textContent = "Categoría: " + receta.categoria;
  detalleArea.textContent = "Origen: " + receta.area;
  detalleInstrucciones.textContent = receta.instrucciones;

  // Lista de ingredientes: borramos la anterior y creamos un <li> por ingrediente
  detalleIngredientes.innerHTML = "";
  receta.ingredientes.forEach(function (ingrediente) {
    const item = document.createElement("li");
    item.textContent = ingrediente;
    detalleIngredientes.appendChild(item);
  });
}

// ---------- 6. PLAN SEMANAL (RF05, RF06, RF07) ----------

/** CALLBACK del evento "submit" del formulario «Agregar al plan». */
function manejarAgregarAlPlan(evento) {
  evento.preventDefault();

  if (recetaSeleccionada === null) {
    mostrarMensajePlan(false, "Primero selecciona una receta.");
    return;
  }

  const dia = selectorDia.value;
  const resultado = agregarAlPlan(dia, recetaSeleccionada);   // (planner.js)

  mostrarMensajePlan(resultado.ok, resultado.mensaje);
  if (resultado.ok) {
    actualizarPlan();
  }
}

/** Muestra un mensaje verde (éxito) o rojo (error) debajo del botón «Agregar al plan». */
function mostrarMensajePlan(esExito, texto) {
  mensajePlan.className = esExito ? "mensaje mensaje--exito" : "mensaje mensaje--error";
  mensajePlan.textContent = texto;
  mensajePlan.hidden = false;
}

/** CALLBACK que planner.js ejecuta al pulsar «Eliminar» en el calendario. */
function manejarEliminar(dia, idReceta) {
  eliminarDelPlan(dia, idReceta);   // (planner.js)
  actualizarPlan();
}

/** Vuelve a dibujar el calendario y actualiza el contador de recetas. */
function actualizarPlan() {
  renderizarPlan(calendario, manejarEliminar);   // pasamos manejarEliminar como callback

  const total = contarRecetasEnPlan();
  contadorPlan.textContent = total + (total === 1 ? " receta planificada" : " recetas planificadas");
}

// ---------- 7. REGISTRO DE EVENTOS E INICIO ----------

// addEventListener(evento, callback): el navegador llamará al callback cuando ocurra el evento
formularioBusqueda.addEventListener("submit", manejarBusqueda);
formularioPlan.addEventListener("submit", manejarAgregarAlPlan);

// Botones de sugerencia: escriben el ingrediente y envían el formulario
botonesSugerencia.forEach(function (boton) {
  boton.addEventListener("click", function () {
    campoIngrediente.value = boton.dataset.ingrediente;
    formularioBusqueda.requestSubmit();   // dispara el mismo evento "submit"
  });
});

// Dibujamos el calendario vacío al cargar la página
actualizarPlan();
