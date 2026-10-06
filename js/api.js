/* =========================================================
   api.js — Comunicación con la API pública TheMealDB
   Aquí está TODO lo relacionado con Fetch y Promesas.
   Este archivo NO toca el DOM: solo pide datos y los devuelve.
   ========================================================= */

// Dirección base de la API (para simular un error, cambia esta URL)
const API_URL = "https://www.themealdb.com/api/json/v1/1";

// Cantidad máxima de recetas que se muestran por búsqueda
const MAX_RESULTADOS = 12;

// Traducciones de ingredientes comunes (la API solo entiende inglés)
const TRADUCCIONES = {
  pollo: "chicken",
  carne: "beef",
  res: "beef",
  cerdo: "pork",
  cordero: "lamb",
  arroz: "rice",
  huevo: "eggs",
  huevos: "eggs",
  salmon: "salmon",
  "salmón": "salmon",
  atun: "tuna",
  "atún": "tuna",
  camarones: "prawns",
  tomate: "tomato",
  papa: "potatoes",
  papas: "potatoes",
  queso: "cheese",
  leche: "milk",
  cebolla: "onion",
  ajo: "garlic",
  limon: "lemon",
  "limón": "lemon",
  champiñones: "mushrooms",
  espinaca: "spinach",
  tocino: "bacon",
  garbanzos: "chickpeas",
  palta: "avocado",
  aguacate: "avocado"
};

/**
 * Convierte el texto del usuario al formato que espera la API.
 * Ejemplo: "pollo" → "chicken", "chicken breast" → "chicken_breast"
 */
function prepararIngrediente(texto) {
  const traducido = typeof TRADUCCIONES[texto] === "string" ? TRADUCCIONES[texto] : texto;
  return traducido.replace(/\s+/g, "_");
}

/**
 * Hace una petición con Fetch y devuelve una PROMESA con los datos en JSON.
 * Si el servidor responde con error (404, 500...), lanza un Error
 * que será capturado por el .catch() en app.js.
 */
function pedirJSON(url) {
  // Cancelamos una consulta que tarde más de 20 segundos para permitir reintentar.
  const controlador = new AbortController();
  const limiteEspera = setTimeout(function () { controlador.abort(); }, 20000);

  return fetch(url, { signal: controlador.signal }) // Promesa<Response>
    .then(function (respuesta) {
      if (!respuesta.ok) {
        throw new Error("La API respondió con el código " + respuesta.status);
      }
      return respuesta.json();           // .json() también devuelve una Promesa
    })
    .catch(function (error) {
      if (error.name === "AbortError") {
        throw new Error("La API tardó demasiado en responder. Vuelve a intentarlo.");
      }
      throw error;
    })
    .finally(function () { clearTimeout(limiteEspera); });
}

/**
 * RF02 — Busca recetas que contengan un ingrediente.
 * 1) filter.php devuelve solo id, nombre e imagen.
 * 2) Por eso pedimos el detalle de cada receta (lookup.php) para obtener
 *    categoría, área, ingredientes e instrucciones.
 * 3) Promise.all espera a que TODAS esas promesas terminen.
 * Devuelve: Promesa<Array de recetas>  (array vacío si no hay resultados)
 */
function buscarRecetasPorIngrediente(ingrediente) {
  const url = API_URL + "/filter.php?i=" + encodeURIComponent(prepararIngrediente(ingrediente));

  return pedirJSON(url).then(function (datos) {
    // Cuando no hay resultados la API responde { "meals": null }
    if (!datos.meals) {
      return [];
    }

    const primeras = datos.meals.slice(0, MAX_RESULTADOS);
    const promesasDetalle = primeras.map(function (meal) {
      return obtenerDetalleReceta(meal.idMeal);
    });

    return Promise.all(promesasDetalle);
  });
}

/**
 * Obtiene la información completa de una receta por su identificador.
 * Devuelve: Promesa<objeto receta>
 */
function obtenerDetalleReceta(id) {
  const url = API_URL + "/lookup.php?i=" + id;

  return pedirJSON(url).then(function (datos) {
    if (!datos.meals) {
      throw new Error("No se encontró el detalle de la receta " + id);
    }
    return convertirReceta(datos.meals[0]);
  });
}

/**
 * Simplifica los datos y aplica las traducciones guardadas por idMeal.
 * Si una receta no está traducida, conserva sus ingredientes e instrucciones.
 */
function convertirReceta(meal) {
  const traduccion = RECETAS_ES[meal.idMeal];
  // La API guarda los ingredientes en 20 campos: strIngredient1 ... strIngredient20
  const ingredientes = [];
  for (let i = 1; i <= 20; i++) {
    const nombre = meal["strIngredient" + i];
    const medida = meal["strMeasure" + i];
    if (nombre && nombre.trim() !== "") {
      ingredientes.push((medida ? medida.trim() + " " : "") + nombre.trim());
    }
  }

  return {
    id: meal.idMeal,
    nombre: traduccion ? traduccion.nombre : meal.strMeal,
    categoria: CATEGORIAS_ES[meal.strCategory] || meal.strCategory || "Sin categoría",
    area: ORIGENES_ES[meal.strArea] || meal.strArea || "Origen desconocido",
    imagen: meal.strMealThumb,
    instrucciones: traduccion ? traduccion.instrucciones : meal.strInstructions || "Sin instrucciones disponibles.",
    ingredientes: traduccion ? traduccion.ingredientes.slice() : ingredientes,
    traducida: Boolean(traduccion)
  };
}
