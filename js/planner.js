/* =========================================================
   planner.js — Lógica del plan semanal
   Guarda qué recetas hay en cada día, permite agregarlas,
   eliminarlas y dibujar el calendario en el DOM.
   ========================================================= */

// Días de la semana (el valor coincide con las <option> del <select> en index.html)
const DIAS_SEMANA = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

// Nombre que se muestra en pantalla para cada día
const NOMBRES_DIAS = {
  lunes: "Lunes",
  martes: "Martes",
  miercoles: "Miércoles",
  jueves: "Jueves",
  viernes: "Viernes",
  sabado: "Sábado",
  domingo: "Domingo"
};

// Máximo de recetas por día (desayuno, almuerzo y cena).
// Para impedir dos recetas en el mismo día basta con cambiarlo a 1.
const MAX_RECETAS_POR_DIA = 3;

// Plan semanal: un objeto con un arreglo de recetas por cada día
const planSemanal = {
  lunes: [],
  martes: [],
  miercoles: [],
  jueves: [],
  viernes: [],
  sabado: [],
  domingo: []
};

/**
 * RF05 — Agrega una receta a un día.
 * Devuelve un objeto { ok, mensaje } para que app.js informe al usuario.
 */
function agregarAlPlan(dia, receta) {
  const recetasDelDia = planSemanal[dia];

  // Condición 1: no repetir la misma receta en el mismo día
  const yaExiste = recetasDelDia.some(function (r) {
    return r.id === receta.id;
  });
  if (yaExiste) {
    return { ok: false, mensaje: "«" + receta.nombre + "» ya está en el " + NOMBRES_DIAS[dia] + "." };
  }

  // Condición 2: no superar el máximo de recetas por día
  if (recetasDelDia.length >= MAX_RECETAS_POR_DIA) {
    return { ok: false, mensaje: "El " + NOMBRES_DIAS[dia] + " ya tiene " + MAX_RECETAS_POR_DIA + " receta(s). Elimina una o elige otro día." };
  }

  // Solo guardamos los datos que necesita el calendario
  recetasDelDia.push({
    id: receta.id,
    nombre: receta.nombre,
    categoria: receta.categoria,
    imagen: receta.imagen
  });

  return { ok: true, mensaje: "«" + receta.nombre + "» se agregó al " + NOMBRES_DIAS[dia] + "." };
}

/**
 * RF07 — Elimina una receta de un día.
 * filter crea un nuevo arreglo con todas las recetas EXCEPTO la que tiene ese id.
 */
function eliminarDelPlan(dia, idReceta) {
  planSemanal[dia] = planSemanal[dia].filter(function (r) {
    return r.id !== idReceta;
  });
}

/** Cuenta cuántas recetas hay en toda la semana. */
function contarRecetasEnPlan() {
  let total = 0;
  DIAS_SEMANA.forEach(function (dia) {
    total += planSemanal[dia].length;
  });
  return total;
}

/**
 * RF06 — Dibuja el menú semanal dentro del contenedor.
 * @param {HTMLElement} contenedor  Elemento donde se dibuja el calendario (#calendario)
 * @param {Function} alEliminar     CALLBACK que se ejecuta al pulsar «Eliminar»; recibe (dia, idReceta)
 */
function renderizarPlan(contenedor, alEliminar) {
  contenedor.innerHTML = "";   // Borramos el calendario anterior para dibujarlo de nuevo

  DIAS_SEMANA.forEach(function (dia) {
    const recetas = planSemanal[dia];

    // Columna del día
    const columna = document.createElement("article");
    columna.className = "dia";
    if (recetas.length > 0) {
      columna.classList.add("dia--con-recetas");
    }

    const titulo = document.createElement("h3");
    titulo.className = "dia__titulo";
    titulo.textContent = NOMBRES_DIAS[dia];
    columna.appendChild(titulo);

    // Día sin recetas
    if (recetas.length === 0) {
      const vacio = document.createElement("p");
      vacio.className = "dia__vacio";
      vacio.textContent = "Sin recetas";
      columna.appendChild(vacio);
    } else {
      // Día con recetas: una lista <ul> con un <li> por receta
      const lista = document.createElement("ul");
      lista.className = "dia__lista";

      recetas.forEach(function (receta) {
        const item = document.createElement("li");
        item.className = "comida";

        const imagen = document.createElement("img");
        imagen.className = "comida__imagen";
        imagen.src = receta.imagen;   // fotografía original, cargada cuando se necesita
        imagen.alt = receta.nombre;
        imagen.loading = "lazy";
        imagen.decoding = "async";

        const nombre = document.createElement("span");
        nombre.className = "comida__nombre";
        nombre.textContent = receta.nombre;

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.className = "comida__eliminar";
        botonEliminar.textContent = "Eliminar";
        botonEliminar.setAttribute("aria-label", "Eliminar " + receta.nombre + " del " + NOMBRES_DIAS[dia]);
        botonEliminar.addEventListener("click", function () {
          alEliminar(dia, receta.id);   // llamamos al callback que nos pasó app.js
        });

        item.appendChild(imagen);
        item.appendChild(nombre);
        item.appendChild(botonEliminar);
        lista.appendChild(item);
      });

      columna.appendChild(lista);
    }

    contenedor.appendChild(columna);
  });
}
