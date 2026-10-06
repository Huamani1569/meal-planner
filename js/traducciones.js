/* Traducciones locales, revisadas a partir de TheMealDB.
   Son DATOS, no un servicio de traducción: no generan peticiones adicionales.
   La clave de cada receta es su idMeal. Para ampliar la cobertura, agrega otra entrada.
   Se conservan las cantidades y el contenido de la fuente, incluidas sus omisiones. */

const CATEGORIAS_ES = {
  Beef: "Carne de res", Chicken: "Pollo", Dessert: "Postres", Lamb: "Cordero",
  Miscellaneous: "Variados", Pasta: "Pasta", Pork: "Cerdo", Seafood: "Pescados y mariscos",
  Side: "Guarniciones", Starter: "Entradas", Vegan: "Vegano", Vegetarian: "Vegetariano",
  Breakfast: "Desayunos", Goat: "Cabra"
};

const ORIGENES_ES = {
  American: "Estados Unidos", "United States": "Estados Unidos", British: "Reino Unido",
  Canadian: "Canadá", Chinese: "China", Croatian: "Croacia", Dutch: "Países Bajos",
  Egyptian: "Egipto", Filipino: "Filipinas", French: "Francia", France: "Francia",
  Greek: "Grecia", Indian: "India", India: "India", Irish: "Irlanda", Italian: "Italia",
  Jamaican: "Jamaica", Japanese: "Japón", Kenyan: "Kenia", Malaysian: "Malasia",
  Mexican: "México", Moroccan: "Marruecos", Polish: "Polonia", Portuguese: "Portugal",
  Russian: "Rusia", "Saudi Arabian": "Arabia Saudita", Spanish: "España", Thai: "Tailandia",
  Tunisian: "Túnez", Turkish: "Turquía", Ukrainian: "Ucrania", Uruguayan: "Uruguay",
  Vietnamese: "Vietnam", Venezuelan: "Venezuela", Venezuela: "Venezuela", Unknown: "Origen desconocido"
};

const RECETAS_ES = {
  "52940": {
    nombre: "Pollo guisado jamaicano",
    ingredientes: ["1 pollo entero", "1 tomate picado", "2 cebollas picadas", "2 dientes de ajo picados", "1 pimiento rojo picado", "1 zanahoria picada", "1 lima", "2 cucharaditas de tomillo", "1 cucharadita de pimienta de Jamaica", "2 cucharadas de salsa de soya", "2 cucharaditas de maicena", "2 tazas de leche de coco", "1 cucharada de aceite vegetal"],
    instrucciones: `Exprime la lima sobre el pollo y frótalo bien. Escurre el exceso de jugo.

Mezcla el tomate, la cebolla china, la cebolla, el ajo, el pimiento, el tomillo, la pimienta de Jamaica y la salsa de soya con los trozos de pollo en un recipiente grande. Tapa y deja marinar al menos una hora.

Calienta el aceite en una olla grande. Retira cada trozo de pollo de la marinada y sacude los condimentos adheridos. Reserva la marinada para la salsa.

Dora ligeramente el pollo en el aceite muy caliente, en pequeñas tandas. Coloca los trozos dorados en un plato mientras terminas con los demás.

Escurre el exceso de aceite y devuelve el pollo a la olla. Vierte la marinada y añade la zanahoria. Remueve y cocina a fuego medio durante 10 minutos.

Mezcla la harina con la leche de coco y añádela al guiso, removiendo constantemente. Baja el fuego al mínimo y cocina otros 20 minutos o hasta que el pollo esté tierno.`
  },
  "53161": {
    nombre: "Arroz con pollo y chorizo",
    ingredientes: ["1 cucharada de aceite", "1 pollo entero", "1 cebolla grande picada", "1 pimiento rojo picado", "3 dientes de ajo machacados", "225 g de chorizo", "1 cucharada de puré de tomate", "1 cucharada de tomillo picado", "150 ml de vino blanco", "800 ml de caldo de pollo", "400 g de arroz", "2 cucharadas de perejil picado"],
    instrucciones: `1. Calienta el aceite en una cazuela grande apta para el fuego y dora los trozos de pollo por todos sus lados. Hazlo en tandas si es necesario. Retíralos y resérvalos.

2. Baja el fuego, añade la cebolla y el pimiento y cocina suavemente durante 10 minutos, hasta que estén tiernos. Añade el ajo y el chorizo y cocina otros 2 minutos, hasta que el chorizo suelte parte de su grasa. Incorpora el puré de tomate y cocina 1 minuto más.

3. Devuelve el pollo a la cazuela junto con el tomillo, el vino blanco y el caldo. Lleva a ebullición, tapa bien y baja el fuego. Cocina durante 30 minutos.

4. Añade el arroz y mezcla todo. Tapa y cocina a fuego bajo otros 15 minutos o hasta que el arroz esté cocido y haya absorbido la mayor parte del líquido. Retira del fuego y deja reposar 10 minutos para que absorba el líquido restante. Sazona al gusto y espolvorea el perejil antes de servir.`
  },
  "52846": {
    nombre: "Cazuela de pollo y champiñones",
    ingredientes: ["50 g de mantequilla", "1 cebolla picada", "100 g de champiñones", "40 g de harina de trigo", "1 cubo de caldo de pollo", "1 pizca de nuez moscada", "1 pizca de mostaza en polvo", "250 g de pollo", "2 puñados de maíz dulce", "2 papas grandes", "1 porción pequeña de mantequilla"],
    instrucciones: `Precalienta el horno a 200 °C, o a 180 °C con ventilador (posición 6 en horno a gas). Pon la mantequilla en una cacerola mediana a fuego medio. Añade la cebolla y cocina 5 minutos, removiendo de vez en cuando. Incorpora los champiñones.

Cuando la cebolla y los champiñones estén casi cocidos, añade la harina y remueve hasta formar una pasta espesa llamada roux. Si utilizas un cubo de caldo, desmenúzalo sobre la mezcla e incorpóralo bien. Cocina a fuego bajo, removiendo continuamente durante 2 minutos, para que la harina pierda su sabor crudo.

Retira del fuego. Añade lentamente el caldo fresco, si lo usas, o 500 ml de agua si has usado un cubo, sin dejar de remover. Sazona con pimienta, una pizca de nuez moscada y mostaza en polvo. Vuelve a poner la cacerola a fuego medio y lleva lentamente a ebullición, removiendo siempre. Cuando espese, baja el fuego al mínimo. Añade el pollo cocido y las verduras y mezcla bien. Engrasa una fuente mediana para horno con un poco de mantequilla y vierte el relleno.

Coloca cuidadosamente las papas sobre el relleno, superponiéndolas ligeramente como una cubierta.

Pincela las papas con mantequilla derretida y hornea unos 35 minutos. La cazuela estará lista cuando las papas estén cocidas y doradas.`
  },
  "52796": {
    nombre: "Pollo Alfredo primavera",
    ingredientes: ["2 cucharadas de mantequilla", "3 cucharadas de aceite de oliva", "5 piezas de pollo deshuesado", "1 cucharadita de sal", "1 calabaza cortada en cubos de ½ pulgada", "1 cabeza de brócoli picada", "8 onzas de champiñones en láminas", "1 pimiento rojo", "1 cebolla picada", "3 dientes de ajo", "½ cucharadita de hojuelas de ají rojo", "½ taza de vino blanco", "½ taza de leche", "½ taza de crema de leche espesa", "1 taza de queso parmesano rallado", "16 onzas de pasta de corbatitas", "1 pizca de sal", "1 pizca de pimienta", "Perejil picado"],
    instrucciones: `Calienta 1 cucharada de mantequilla y 2 de aceite de oliva en una sartén grande a fuego medio-alto. Sazona ambos lados de las pechugas con sal sazonada y una pizca de pimienta. Cocina el pollo entre 5 y 7 minutos por lado, hasta que esté completamente cocido.

Mientras tanto, hierve una olla grande de agua con varias pizcas generosas de sal kosher. Añade la pasta y remueve. Cocina, removiendo de vez en cuando, hasta que esté al dente, unos 12 minutos. Reserva ½ taza del agua de cocción antes de escurrir.

Retira el pollo de la sartén, pásalo a una tabla y déjalo reposar. Baja el fuego a medio y añade a la misma sartén la cucharada restante de mantequilla y el aceite de oliva restante. Incorpora las verduras, excepto el ajo, y las hojuelas de ají rojo. Remueve para cubrirlas con la grasa; espera a que se doren antes de añadir sal. Cocina unos 5 minutos, removiendo con frecuencia, hasta que estén tiernas. Añade el ajo y una pizca generosa de sal y pimienta y cocina 1 minuto.

Vierte el vino blanco para desprender los restos del fondo. Cocina unos 3 minutos, hasta que el vino se reduzca a la mitad. Añade la leche, la crema y el agua de la pasta reservada. Lleva a un hervor suave y deja reducir entre 2 y 3 minutos.

Apaga el fuego e incorpora el parmesano y la pasta cocida. Sazona con sal y pimienta al gusto. Si lo deseas, decora con más parmesano y perejil picado.`
  },
  "52934": {
    nombre: "Pollo a la vasca",
    ingredientes: ["1,5 kg de pollo", "25 g de mantequilla", "6 cucharadas de aceite de oliva", "2 cebollas rojas en rodajas", "3 pimientos rojos grandes", "130 g de chorizo", "8 tomates secos", "6 dientes de ajo en láminas", "300 g de arroz basmati", "Un chorrito de puré de tomate", "½ cucharadita de pimentón", "4 hojas de laurel", "1 puñado de tomillo", "350 ml de caldo de pollo", "180 g de vino blanco seco", "2 limones", "100 g de aceitunas negras", "Sal para servir", "Pimienta para servir"],
    instrucciones: `Precalienta el horno a 180 °C (posición 4 en horno a gas). Prepara las piezas de pollo. Calienta la mantequilla y 3 cucharadas de aceite de oliva en una cazuela apta para el fuego o una sartén grande. Dora el pollo por ambos lados en pequeñas tandas y sazona con sal y pimienta. No llenes demasiado la sartén. Retira cada pieza sobre papel de cocina al terminar.

Añade un poco más de aceite a la cazuela y cocina las cebollas a fuego medio durante 10 minutos, removiendo con frecuencia, hasta que se ablanden sin dorarse. Añade el resto del aceite y los pimientos y cocina otros 5 minutos.

Incorpora el chorizo, los tomates secos y el ajo y cocina entre 2 y 3 minutos. Añade el arroz y remueve para cubrirlo de aceite. Incorpora el puré de tomate, el pimentón, el laurel y el tomillo picado. Vierte el caldo y el vino. Cuando empiece a burbujear, baja el fuego. Presiona el arroz para que quede sumergido y coloca el pollo encima. Distribuye los gajos de limón y las aceitunas alrededor.

Tapa y hornea 50 minutos. El arroz debe estar cocido, pero conservar cierta firmeza. Al pinchar la parte más gruesa del pollo con un cuchillo, los jugos deben salir claros. Si no es así, cocina otros 5 minutos y vuelve a comprobar.`
  },
  "52956": {
    nombre: "Congee de pollo",
    ingredientes: ["8 onzas de pollo", "1 pizca de sal", "1 pizca de pimienta", "1 cucharadita de cordial de jengibre", "1 cucharadita de jengibre", "1 cucharada de cebolla china", "½ taza de arroz", "8 tazas de agua", "2 onzas de cilantro"],
    instrucciones: `1. Marina el pollo. Mezcla en un recipiente el pollo, la sal, la pimienta blanca y el jugo de jengibre. Reserva.

2. Lava el arroz varias veces en un recipiente metálico o una olla y escurre el agua.

3. Añade 8 tazas de agua y calienta a fuego alto hasta que hierva. Cuando la preparación de arroz empiece a hervir, baja el fuego y remueve cada 8 a 10 minutos durante unos 20 a 25 minutos.

Después de 25 minutos, si lo deseas, añade más agua para obtener una consistencia menos espesa.

Incorpora el pollo marinado y cocina a fuego bajo otros 10 minutos. Después, añade la cebolla china, el jengibre en láminas, una pizca de sal y otra de pimienta blanca. Remueve durante 10 segundos.

Sirve el congee en un tazón. Si lo deseas, añade cilantro por encima.`
  },
  "52795": {
    nombre: "Pollo handi",
    ingredientes: ["1,2 kg de pollo", "5 cebollas en rodajas finas", "2 tomates finamente picados", "8 dientes de ajo picados", "1 cucharada de pasta de jengibre", "¼ de taza de aceite vegetal", "2 cucharaditas de semillas de comino", "3 cucharaditas de semillas de cilantro", "1 cucharadita de cúrcuma en polvo", "1 cucharadita de ají en polvo", "2 ajíes verdes", "1 taza de yogur", "¾ de taza de crema de leche", "3 cucharaditas de fenogreco seco", "1 cucharadita de garam masala", "Sal al gusto"],
    instrucciones: `Calienta el aceite en una olla grande o un wok con espacio para todo el pollo. Añade las cebollas en rodajas y fríelas hasta que estén bien doradas. Retíralas a un plato y reserva.

En la misma olla, saltea el ajo picado durante 1 minuto. Añade los tomates y cocina unos 5 minutos, hasta que se ablanden.

Devuelve las cebollas a la olla y remueve. Añade la pasta de jengibre y saltea bien.

Incorpora las semillas de comino, la mitad de las semillas de cilantro y los ajíes verdes picados. Remueve brevemente. Añade la cúrcuma y el ají rojo en polvo y saltea las especias un par de minutos.

Añade el pollo, sazona con sal al gusto y cocina tapado a fuego medio-bajo durante unos 15 minutos, hasta que esté casi cocido. Cocinar lentamente mejora el sabor; no aceleres este paso subiendo el fuego.

Cuando el aceite se separe de las especias, añade el yogur batido con el fuego al mínimo para que no se corte. Incorpora el resto de las semillas de cilantro y la mitad de las hojas secas de fenogreco. Mezcla bien.

Añade la crema y mezcla para integrar. Espolvorea el fenogreco restante y el garam masala. Sirve caliente con pan naan o roti.`
  },
  "52831": {
    nombre: "Pollo karaage",
    ingredientes: ["450 g de pollo deshuesado y sin piel", "1 cucharada de jengibre", "1 diente de ajo", "2 cucharadas de salsa de soya", "1 cucharada de sake", "2 cucharaditas de azúcar granulada", "⅓ de taza de fécula de papa", "⅓ de taza de aceite vegetal", "⅓ de taza de limón"],
    instrucciones: `Mezcla el jengibre, el ajo, la salsa de soya, el sake y el azúcar en un recipiente. Añade el pollo y remueve para cubrirlo de manera uniforme. Tapa y refrigera al menos 1 hora.

Vierte una capa de 1 pulgada de aceite vegetal en una olla de fondo grueso y calienta hasta alcanzar 360 °F. Cubre una rejilla con 2 hojas de papel absorbente y prepara unas pinzas. Pon la fécula de papa en un recipiente.

Pasa una pequeña tanda de pollo por la fécula y remueve para cubrir cada pieza de forma uniforme.

Fríe por tandas hasta que el exterior esté dorado y el pollo completamente cocido. Pásalo a la rejilla con papel absorbente. Para conservarlo crujiente durante más tiempo, puedes dejarlo enfriar y freírlo una segunda vez hasta que tome un color más oscuro. Sirve con gajos de limón.`
  },
  "53358": {
    nombre: "Pollo mandi",
    ingredientes: ["1 pollo", "2 tazas de arroz basmati", "4 tazas de agua", "1 cebolla grande", "4 dientes de ajo", "2 ajíes verdes", "1½ cucharaditas de sal", "3 cucharadas de aceite", "1 cucharada de cúrcuma en polvo", "1 cucharadita de cilantro", "½ cucharada de cardamomo", "¼ de cucharadita de clavo de olor", "½ cucharadita de canela", "1 cucharadita de pimienta", "2 hojas de laurel"],
    instrucciones: `1. Limpia y corta el pollo. Marínalo brevemente con sal, cúrcuma y un poco de aceite.

2. Lava el arroz basmati y déjalo en remojo entre 20 y 30 minutos.

3. Calienta ghee o aceite en una olla grande. Fríe la cebolla picada hasta dorarla. Añade el ajo picado y los ajíes verdes y fríe entre 1 y 2 minutos.

4. Añade las especias enteras: cardamomo, clavo, canela y laurel. Incorpora las especias molidas: cilantro y comino. Remueve hasta que desprendan su aroma.

5. Añade el pollo, dóralo ligeramente y vierte agua o caldo de pollo suficiente para cubrirlo. Cocina a fuego suave hasta que esté casi cocido.

6. Retira el pollo. Mide el líquido restante y añade el arroz remojado. Lleva a ebullición, baja el fuego, tapa y cocina hasta que el arroz esté casi listo.

7. Coloca el pollo sobre el arroz, tapa bien y cocina al vapor a fuego bajo entre 10 y 15 minutos para integrar los sabores.

8. Opcional, para un aroma ahumado: calienta un pequeño carbón hasta que esté al rojo vivo y colócalo en un recipiente pequeño de papel aluminio en el centro de la olla. Añade una cucharadita de mantequilla o aceite sobre el carbón y tapa inmediatamente para retener el humo entre 5 y 10 minutos. Retira el carbón.

9. Decora con cebolla frita y cilantro picado. Sirve con chutney o raita.`
  },
  "53186": {
    nombre: "Pollo con azafrán, pasas y piñones",
    ingredientes: ["1,25 kg de pollo", "2 cucharadas de aceite de oliva", "3 dientes de ajo picados", "1 pizca de azafrán", "125 ml de jerez seco", "200 ml de caldo de pollo", "1 cucharada de tomillo", "50 g de pasas", "2 cucharadas de piñones", "1 puñado de perejil"],
    instrucciones: `1. Calienta una sartén grande a fuego alto y sazona el pollo. Añade el aceite de oliva y después el pollo. Dora unos 5 minutos por lado, retira a un plato y reserva.

2. Baja a fuego medio. Fríe las cebollas en la grasa restante durante 3 minutos. Añade el ajo y el azafrán y cocina otros 3 a 4 minutos. Incorpora el jerez y deja hervir suavemente entre 3 y 5 minutos, hasta que tome una consistencia de jarabe.

3. Devuelve los trozos de pierna de pollo a la sartén. Añade el caldo, el tomillo y las pasas, tapa y cocina suavemente a fuego bajo durante 20 minutos. Incorpora las pechugas y los jugos que hayan quedado en el plato. Cocina otros 10 minutos, hasta que el pollo esté completamente cocido y la salsa se reduzca.

4. Mientras tanto, precalienta el horno a 200 °C, o 180 °C con ventilador (posición 6 en horno a gas). Distribuye los piñones en una bandeja y tuéstalos durante 10 minutos hasta que estén dorados. Sazona el pollo al gusto, añade los piñones y el perejil y sirve con arroz.`
  },
  "53220": {
    nombre: "Kabsa de pollo",
    ingredientes: ["400 g de pollo", "1 taza de arroz", "1 pimiento verde", "1 pimiento rojo", "2 champiñones", "1 maíz dulce", "2 zanahorias", "1 puñado de pasas", "1 cucharadita de cúrcuma", "1 cucharadita de especias para kabsa", "1 pizca de sal", "1 pizca de pimienta negra"],
    instrucciones: `1. Dora el pollo con aceite de oliva. Añade un cubo de caldo Maggi y hiérvelo durante unos 30 minutos.

2. En otra olla, añade todas las verduras y dóralas hasta que estén tiernas.

3. Añade el arroz, las pasas y las especias a las verduras. Incorpora 2½ tazas de agua para cocinar el arroz.

4. Cuando el arroz esté listo, lleva toda la preparación al horno.`
  },
  "52813": {
    nombre: "Pollo frito estilo Kentucky",
    ingredientes: ["1 pollo entero", "2 cuartos de galón de aceite neutro para freír", "1 clara de huevo", "1½ tazas de harina", "1 cucharada de azúcar rubia", "1 cucharada de sal", "1 cucharada de pimentón", "2 cucharaditas de sal de cebolla", "1 cucharadita de ají en polvo", "1 cucharadita de pimienta negra", "½ cucharadita de sal de apio", "½ cucharadita de salvia", "½ cucharadita de ajo en polvo", "½ cucharadita de pimienta de Jamaica", "½ cucharadita de orégano", "½ cucharadita de albahaca", "½ cucharadita de mejorana"],
    instrucciones: `Precalienta la freidora a 350 °F. Mezcla bien todos los ingredientes de la mezcla de especias.

Combina las especias con la harina, el azúcar rubia y la sal.

Pasa los trozos de pollo por la clara de huevo para cubrirlos ligeramente y después por la mezcla de harina. Dales varias vueltas para que el rebozado se adhiera bien. Repite con todas las piezas.

Deja reposar el pollo 5 minutos para que la cubierta se seque un poco.

Fríe en tandas. Las pechugas y las alas tardarán entre 12 y 14 minutos; las piernas y los muslos necesitarán unos minutos más. El pollo estará listo cuando un termómetro de carne insertado en la parte más gruesa marque 165 °F.

Deja escurrir sobre papel absorbente al retirarlo de la freidora. Sirve caliente.`
  },
  "53329": {
    nombre: "Arepa pelúa",
    ingredientes: ["500 g de carne de res", "1 cebolla", "1 pimiento rojo", "2 dientes de ajo", "1 cucharadita de comino", "1 cucharadita de orégano", "1 cucharadita de pimentón", "1 litro de caldo de res", "2½ tazas de agua", "1 pizca de sal", "200 g de queso", "1 pizca de aceite de oliva extra virgen"],
    instrucciones: `Cocina la carne: coloca la falda de res en una olla con caldo o agua y sal. Cocina a fuego bajo unas 2 horas, hasta que esté tierna y sea fácil de deshilachar.

Deshilacha la carne: escúrrela y sepárala en hebras con dos tenedores.

Prepara las verduras: saltea la cebolla, el pimiento y el ajo picados con un poco de aceite. Añade comino, orégano, pimentón y sal. Incorpora la carne y cocina unos minutos para integrar los sabores.

Prepara la masa: mezcla la harina de maíz con agua tibia y sal hasta obtener una masa suave. Deja reposar 5 minutos.

Forma las arepas: divide la masa en 6 porciones, forma bolas y aplánalas para obtener discos gruesos.

Cocina las arepas en una plancha o sartén a fuego medio durante 2 a 3 minutos por lado, hasta dorarlas. Puedes hornearlas unos minutos más si las prefieres más crujientes.

Ábrelas por un lado, rellena con la carne caliente y añade queso rallado.`
  },
  "52874": {
    nombre: "Pastel de carne y mostaza",
    ingredientes: ["1 kg de carne de res", "2 cucharadas de harina de trigo", "2 cucharadas de aceite de colza", "200 ml de vino tinto", "400 ml de caldo de res", "1 cebolla en rodajas finas", "2 zanahorias picadas", "3 ramitas de tomillo", "2 cucharadas de mostaza", "2 yemas de huevo de gallinas camperas", "400 g de masa de hojaldre", "300 g de vainitas", "25 g de mantequilla", "1 pizca de sal", "1 pizca de pimienta"],
    instrucciones: `Precalienta el horno a 150 °C / 300 °F (posición 2 en horno a gas).

Mezcla la carne y la harina en un recipiente con sal y pimienta negra. Calienta una cazuela grande, añade la mitad del aceite de colza y suficiente carne para cubrir el fondo. Dora por todos los lados y reserva. Repite con el aceite y la carne restantes.

Devuelve la carne a la cazuela, añade el vino y cocina hasta reducirlo a la mitad. Incorpora el caldo, la cebolla, las zanahorias, el tomillo y la mostaza. Sazona con sal y pimienta. Tapa y hornea 2 horas.

Retira del horno, comprueba la sazón y deja enfriar. Retira el tomillo.

Cuando la carne esté fría y vayas a montar el pastel, precalienta el horno a 200 °C / 400 °F (posición 6 en horno a gas).

Pasa la carne a una fuente para pastel. Pincela el borde con las yemas batidas y cubre con el hojaldre. Pincela también la superficie con huevo. Recorta la masa dejando un pequeño sobrante para sellar los bordes. Hornea 30 minutos, hasta que esté dorada y cocida.

Hierve las vainitas en agua con sal entre 4 y 5 minutos, hasta que estén tiernas. Escurre, mezcla con la mantequilla y sazona con pimienta negra.

Sirve una porción generosa de pastel en cada plato con las vainitas al lado.`
  },
  "53522": {
    nombre: "Arroz con leche",
    ingredientes: ["1 taza de arroz", "4 ramas de canela", "2 tazas de agua", "4 tazas de leche", "1 pizca de sal", "2 cucharadas de mantequilla", "2 cucharadas de extracto de vainilla", "1 taza de azúcar", "12 onzas de leche condensada"],
    instrucciones: `Pon el agua y las ramas de canela en una olla pequeña. Lleva a ebullición y cocina 10 minutos. Reserva el agua y desecha las ramas.

Coloca el arroz y el agua de canela en una cacerola grande a fuego medio y cocina 5 minutos.

Añade la sal, la mantequilla, el extracto de vainilla, 2 tazas de leche y el azúcar. Mezcla bien y cocina sin tapa unos 15 minutos.

Baja el fuego a medio-bajo. Añade la leche restante y la leche condensada y remueve con una cuchara de madera. Cocina 1 hora y 15 minutos o hasta alcanzar la consistencia deseada.

Mezcla bien, retira del fuego y deja enfriar a temperatura ambiente. La consistencia debe ser muy cremosa. Refrigera al menos 1 hora o durante toda la noche.`
  },
  "52997": {
    nombre: "Bowl de carne banh mi con mayonesa de sriracha",
    ingredientes: ["Arroz blanco", "1 cebolla", "1 lima", "3 dientes de ajo", "1 pepino", "3 onzas de zanahoria", "1 libra de carne molida de res", "2 onzas de salsa de soya"],
    instrucciones: `Ingredientes adicionales indicados en la preparación original: mayonesa y sriracha.

1. Lava el arroz en un colador fino hasta que el agua salga clara. Ponlo en una olla pequeña con 1 taza de agua (2 tazas para 4 porciones) y una pizca de sal. Lleva a ebullición, tapa y baja el fuego. Cocina 15 minutos, hasta que esté tierno. Déjalo tapado fuera del fuego al menos 10 minutos o hasta servir.

2. Lava y seca las verduras. Pela y pica finamente el ajo. Ralla la cáscara de la lima y córtala en cuartos; para 4 porciones, ralla 1 lima y corta ambas. Corta el pepino por la mitad a lo largo y después en medias lunas finas. Pela la cebolla y córtala en cubos medianos. Pela y ralla la zanahoria.

3. Mezcla el pepino con el jugo de media lima, ¼ de cucharadita de azúcar (½ para 4 porciones) y una pizca de sal. En otro recipiente, mezcla la mayonesa con una pizca de ajo, un poco de jugo de lima y sriracha al gusto. Sazona con sal y pimienta.

4. Calienta un chorrito de aceite en una sartén grande a fuego medio-alto. Añade la cebolla y cocina entre 4 y 5 minutos, removiendo, hasta que se ablande. Incorpora la carne, el ajo restante y 2 cucharaditas de azúcar (4 para 4 porciones). Cocina entre 4 y 5 minutos, deshaciendo la carne en trozos, hasta que esté dorada y cocida. Añade la salsa de soya. Apaga el fuego y ajusta la sal y la pimienta.

5. Separa el arroz con un tenedor y mezcla con la ralladura de lima y 1 cucharada de mantequilla. Repártelo en tazones. Coloca encima la carne, la zanahoria rallada y el pepino encurtido. Añade jugo de lima y termina con la mayonesa de sriracha.`
  },
  "52959": {
    nombre: "Salmón al horno con hinojo y tomates",
    ingredientes: ["2 hinojos medianos", "2 cucharadas de perejil picado", "Jugo de 1 limón", "175 g de tomates cherry", "1 cucharada de aceite de oliva", "350 g de salmón", "Aceitunas negras para servir"],
    instrucciones: `Precalienta el horno a 180 °C, o 160 °C con ventilador (posición 4 en horno a gas). Retira las hojas del hinojo y resérvalas. Corta los bulbos por la mitad y después cada mitad en 3 gajos. Hiérvelos en agua con sal durante 10 minutos y escurre bien. Pica las hojas de hinojo y mézclalas con el perejil y la ralladura de limón.

Distribuye el hinojo en una fuente poco profunda para horno y añade los tomates. Rocía con aceite de oliva y hornea 10 minutos. Coloca el salmón entre las verduras, añade el jugo de limón y hornea otros 15 minutos, hasta que el pescado esté recién cocido. Espolvorea la mezcla de perejil y sirve.`
  },
  "53079": {
    nombre: "Sopa de pescado ukha",
    ingredientes: ["2 cucharadas de aceite de oliva", "1 cebolla en rodajas", "2 zanahorias medianas", "3 tazas de caldo de pescado", "3 tazas de agua", "4 papas grandes", "3 hojas de laurel", "1 bacalao", "1 salmón"],
    instrucciones: `Calienta el aceite de oliva en una olla mediana a fuego medio-alto. Añade la cebolla y cocina, removiendo de vez en cuando, hasta que empiece a caramelizarse. Incorpora las zanahorias y cocina unos 4 minutos más, hasta que comiencen a ablandarse.

Añade el caldo, el agua, las papas, el laurel y los granos de pimienta negra. Sazona con sal y lleva a ebullición. Baja el fuego, tapa y cocina 10 minutos. Añade el mijo y cocina otros 15 minutos, hasta que el mijo y las papas estén cocidos.

Incorpora con cuidado los cubos de pescado. Remueve y lleva a un hervor suave. El pescado se cocina rápidamente, así que evita cocinarlo en exceso. Estará listo cuando la carne esté opaca y se separe fácilmente en láminas.

Decora con eneldo fresco o perejil picado antes de servir.`
  }
};
