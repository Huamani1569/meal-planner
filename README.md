# 🍽️ Meal Planner — Planificador semanal de comidas

Aplicación web que permite **buscar recetas por ingrediente** usando la API pública
[TheMealDB](https://www.themealdb.com) y **organizar un menú semanal** asignando
recetas a cada día de la semana.

Práctica calificada — Ingeniería Web · Ejercicio integrador 4.

---

## Funcionalidades

| Requisito | Funcionalidad | Dónde está |
|-----------|---------------|------------|
| RF01 | Introducir un ingrediente (en inglés o en español para los más comunes) | `index.html` → `#formulario-busqueda` |
| RF02 | Consultar recetas mediante **Fetch** | `js/api.js` → `pedirJSON()`, `buscarRecetasPorIngrediente()` |
| RF03 | Mostrar las recetas encontradas (nombre, categoría, área e imagen) | `js/app.js` → `mostrarResultados()`, `crearTarjetaReceta()` |
| RF04 | Seleccionar una receta y ver su información básica | `js/app.js` → `seleccionarReceta()`, `mostrarDetalle()` |
| RF05 | Asignar la receta a un día de la semana | `js/planner.js` → `agregarAlPlan()` |
| RF06 | Mostrar el menú semanal | `js/planner.js` → `renderizarPlan()` |
| RF07 | Eliminar recetas del menú | `js/planner.js` → `eliminarDelPlan()` |
| — | Estados de la UI: cargando, resultados, sin resultados y error | `js/app.js` → sección 3 |
| — | Manejo de errores (API caída, URL incorrecta, sin internet, entrada inválida) | `js/app.js` → `manejarError()`, `manejarBusqueda()` |

Reglas del plan: no se puede repetir la misma receta en el mismo día y cada día
admite como máximo 3 recetas (`MAX_RECETAS_POR_DIA` en `planner.js`).

## Tecnologías

HTML5 · CSS3 (Grid, Flexbox, variables, animaciones, media queries) · JavaScript
(sin frameworks ni librerías) · DOM · Callbacks · Promesas · Fetch API.

## Estructura

```
meal-planner/
├── index.html        → estructura: formulario, resultados, detalle y menú semanal
├── css/
│   └── estilos.css   → tarjetas, calendario semanal y estados
└── js/
    ├── api.js        → Fetch + Promesas (comunicación con TheMealDB)
    ├── planner.js    → lógica del plan semanal (agregar, eliminar, dibujar)
    └── app.js        → eventos, estados de la UI y creación de elementos DOM
```

## Cómo ejecutar

Se necesita conexión a internet, porque las recetas vienen de la API.

- **Opción 1:** abrir `index.html` con doble clic en el navegador (Chrome, Edge o Firefox).
- **Opción 2 (recomendada):** en VS Code, clic derecho sobre `index.html` → **Open with Live Server**.

## API utilizada

| Endpoint | Uso |
|----------|-----|
| `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}` | Lista de recetas con ese ingrediente (id, nombre, imagen) |
| `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}` | Detalle de una receta (categoría, área, ingredientes, instrucciones) |

Si no hay resultados, la API responde `{ "meals": null }`.
