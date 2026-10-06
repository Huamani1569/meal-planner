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

HTML5 · CSS3 (Grid, Flexbox, variables, cristal, animaciones, media queries) · JavaScript
(sin frameworks ni librerías) · DOM · Callbacks · Promesas · Fetch API.

## Estructura

```
meal-planner/
├── index.html        → estructura: formulario, resultados, detalle y menú semanal
├── css/
│   └── estilos.css   → tarjetas, calendario semanal y estados
├── assets/
│   └── favicon.svg   → icono local de la aplicación
├── js/
│   ├── traducciones.js → traducciones guardadas por identificador
│   ├── api.js        → Fetch + Promesas (comunicación con TheMealDB)
│   ├── planner.js    → lógica del plan semanal (agregar, eliminar, dibujar)
│   └── app.js        → eventos, estados de la UI y creación de elementos DOM
└── verification/    → comprobaciones y datos de prueba (no se carga en la web)
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

## Diseño y traducciones

La interfaz usa una paleta clara con verde salvia, fotografías originales y controles
con transparencia y desenfoque inspirados en Liquid Glass. Es una aproximación visual
web: no reproduce la refracción nativa de iOS. El contenido de las recetas mantiene un
fondo sólido para facilitar la lectura. El efecto de cristal tiene una base legible
para navegadores sin desenfoque.

Las animaciones de entrada, pulsación y desplazamiento del indicador son CSS. Un
`IntersectionObserver` reconoce las secciones visibles y actualiza la barra inferior.
La barra permite pulsar sus enlaces; no implementa un gesto de arrastre personalizado.
Se respeta la preferencia de movimiento reducido. El diseño se adapta a celular,
tableta y computadora sin frameworks, fuentes externas ni librerías de iconos.

`traducciones.js` contiene **18 recetas** con nombre, ingredientes, cantidades y
preparación en español. Incluye las primeras 12 recetas de la búsqueda de pollo
consultadas para esta versión, dos de carne, dos de arroz y dos de salmón. Los
resultados de la API pueden cambiar; la traducción depende del ID, no de su posición.
Categorías y países usan tablas de equivalencias reutilizables.

El flujo es: **API → convertirReceta() → traducción por ID si existe → pantalla**.
Las recetas sin traducción conservan su nombre, ingredientes e instrucciones originales,
y el detalle informa que aún no hay una traducción guardada. No se utiliza una API de
traducción y no se añaden peticiones para traducir. Las traducciones son contenido local,
no una caché de traducciones automáticas.

Para ampliar la cobertura, se añade otra entrada a `RECETAS_ES` con el ID y los tres
campos. Si la receta original cambia, hay que revisar su traducción. Se han conservado
las cantidades y el contenido original; algunas recetas de la fuente mencionan en la
preparación ingredientes que no aparecen en su lista, o dejan pasos incompletos.

Las fotografías usan la URL original de TheMealDB, sin `/preview`. Esto conserva el
detalle disponible en la fuente; no mejora artificialmente su resolución. Las fotos de
tarjetas y del calendario se cargan cuando se necesitan (`loading="lazy"`).

## Cómo explicarlo en la exposición

1. **HTML:** estructura de la interfaz y símbolos SVG locales.
2. **CSS:** diseño adaptable, superficies de cristal y animaciones.
3. **api.js:** peticiones con Fetch, Promesas y conversión de la respuesta.
4. **traducciones.js:** datos en español asociados a identificadores estables.
5. **app.js:** eventos, estados, selección, presentación y navegación.
6. **planner.js:** reglas del plan: máximo tres recetas y sin duplicados por día.

Se eligieron traducciones guardadas para ofrecer contenido revisado en un conjunto
definido de recetas sin depender de otro servicio. La limitación es que las recetas
nuevas requieren una traducción manual. La búsqueda sigue siendo real y depende de
TheMealDB. Puede hacer hasta 13 peticiones de datos por búsqueda: una para la lista y
hasta 12 para los detalles. Mientras carga, se bloquean nuevas búsquedas para evitar
peticiones superpuestas. Cada petición tiene un límite de espera de 20 segundos;
si no responde, se cancela y se muestra un mensaje para reintentar. No existe
garantía de disponibilidad de la API.

El plan vive en memoria, igual que en la versión inicial: se reinicia al recargar o
cerrar la página. No se ha añadido almacenamiento persistente.

## Verificación

Con Node.js instalado, desde esta carpeta: `node verification/comprobar.js`.
Las comprobaciones usan respuestas originales guardadas como datos de prueba;
`verification/` no se carga en la aplicación. Revisan las 18 traducciones, el número
de ingredientes, el respaldo al idioma original, las peticiones, los errores de la
API y las reglas de agregar/eliminar. No necesitan conexión ni paquetes adicionales.
