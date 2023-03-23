// Hola, que gusto verte por aquí

const animalValidations = [
    {
        message: "Una familia o genérico de animales no es válido",
        values: ["Pájaro", "Pescado", "Anfíbio", "Aves$", "Ave$", "Aves ", "Ave ", "Cánido", "Felino", "Herbívoro", "Insecto", "Mamífero", "Marsupial", "Primate", "Reptil", "Roedor", "Ursido", "Cefalopodo", "Aracnido"],
    },
    {
        message: "Bueno, a ver, se suele decir que son las ratas del aire, para dejar polémicas a parte elije otro",
        values: ["Paloma"],
    },
    {
        message: "En prevención de posibles plagas ese animal no está permitido",
        values: ["Ratas", "Ratones", "Cucarachas", "Hormigas", "Pulgas", "Garrapatas", "Mosquitos", "Avispas", "Chinches", "Arañas", "Termitas", "Caracoles", "Palomas", "Gaviotas", "Gorgojos", "Polillas", "Ácaros", "Piojos", "Moscas", "Grillos"],
    },
    {
        message: "Los animales fantásticos no son una entrada válida",
        values: ["Dragón", "Fénix", "Hippogriff", "Unicornio", "Kelpie", "Basilisco", "Grifo", "Sirena", "Quimera", "Minotauro", "Centauro", "Kraken", "Hidra", "Cíclope", "Yeti", "Sasquatch", "Chupacabra", "Manticore", "Gorgona", "Espectro", "Demonio", "Ángel", "Elfo", "Hada", "Gnomo", "Enano", "Orco", "Trol", "Djinn", "Vampiro", "Hombre lobo", "Quetzalcóatl", "Esfinge", "Trasgo", "Boggart", "Duende", "Diablo de Tasmania", "Jabalí salvaje de Japón", "Fénec", "Oso hormiguero gigante", "Basilisco de arena", "Roc", "Gigante de hielo", "Alicanto", "Fénix oscuro", "Araña gigante", "Megalodón", "Pegaso", "Colmillo de sable", "Tatzelwurm", "Cuero"],
    },
    {
        message: "Los animales domésticos no son una entrada válida",
        values: ["Perro", "Gato", "Hamster", "Conejo", "Cobaya", "Hurón", "Canario", "Loro", "Pez", "Tortuga", "Serpiente", "Iguana", "Caballo", "Burro", "Vaca", "Oveja", "Cabra", "Cerdo", "Gallina", "Pavo", "Pato", "Ganso"],
    },
    {
        message: "¡Cuidado! Ese animal o algún miembro de su familia se encuentra en peligro de extinción y por lo tanto no son una entrada válida",
        values: ["Tigre", "León", "Jaguar", "Pantera", "Leopardo", "Guepardo", "Lobo", "Lince", "Oso", "Canguro", "Elefante", "Rinoceronte", "Jirafa", "Hipopótamo", "CebfamiliasAra", "Tortuga", "Cocodrilo", "Caimán", "Camaleón", "Iguana", "Lagarto", "Serpiente", "Orangután", "Gorila", "Chimpancé", "Mono", "Lémur", "Panda", "Morsa", "Foca", "Ballena", "Delfín", "Tiburón", "Atún", "Salmón", "Vaquita", "Mariposa", "Abeja", "Murciélago", "Colibrí", "Águila", "Búho", "Condor", "Pingüino", "Loro", "Pato", "Cigüeña", "Grulla", "Pelícano", "Flamenco", "Puma", "Zorro Ártico", "Comadreja", "Narval", "Foca", "Tarsier", "Marmota", "Koala", "Perezoso", "Pangolín", "Armadillo", "Ocelote", "Gato", "Ardilla", "Erizo", "Conejo", "Castor", "Nutria", "Zorro", "Murciélago"],
    },
    {
        message: "Un insecto, en serio, no, prueba con otro",
        values: ["Abeja", "Avispa", "Chinche", "Cigarra", "Cucaracha", "Escarabajo", "Grillo", "Hormiga", "Langosta", "Libélula", "Mantis", "Mariquita", "Mariposa", "Mosca", "Mosquito", "Oruga", "Polilla", "Saltamontes", "Tábano", "Termita", "Vespa", "Vinagrillo", "Acheta domesticus", "Acrida turrita", "Acrida ungarica", "Agave mitis", "Alaus oculatus", "Anthaxia nitidula", "Apis cerana", "Apis dorsata", "Apis mellifera", "Archips cerasivorana", "Argema mittrei", "Asilidae", "Babosas", "Battus philenor", "Bombus terrestris", "Bradysia difformis", "Calopteryx splendens", "Camarón de agua dulce", "Carausius morosus", "Cebrio sp.", "Cerambycidae", "Cetonidae", "Chilo partellus", "Chrysomya albiceps", "Cicada orni", "Coccinella septempunctata", "Coleomegilla maculata", "Condylostylus mundus", "Conocephalus fuscus", "Coreus marginatus", "Crisopas", "Culex pipiens", "Cynthia cardui", "Dermestidae", "Drosophila melanogaster", "Ectropis crepuscularia", "Ephemera danica", "Euproctis chrysorrhoea", "Forficula auricularia", "Galleria mellonella", "Gonatocerus ashmeadi", "Gyrinidae", "Helicoverpa armigera", "Helicoverpa zea", "Hercules beetle", "Heteroptera", "Hippodamia convergens", "Hyalophora cecropia", "Hydraena", "Iridomyrmex humilis", "Issus coleoptratus", "Lacanobia oleracea", "Larva migrans", "Lepidoptera", "Leptoglossus occidentalis", "Leucospis gigas", "Ligia oceanica", "Limonius agonus", "Locusta migratoria", "Lytta vesicatoria", "Machilis hrabei", "Macromia illinoiensis", "Maladera castanea", "Mamestra brassicae", "Mantis spp.", "Mecoptera", "Melanotus"],
    },
    {
        message: "Un insecto (arácnido realmente), en serio, no, prueba con otro",
        values: ["Araña", "Araña cangrejo", "Araña saltarina", "viuda negra", "Escorpión", "Opilión", "Ácaro", "Garrapata"],
    },
    {
        message: "Un metaverso acuático, buena idea, pero mejor para otra versión, prueba con otro",
        values: ["Atún", "Pez", "Bacalao", "Tiburón", "Estrella de mar", "Erizo de mar", "Pulpo", "Calamar", "Medusa", "Anémona de mar", "Cangrejo ermitaño", "Langosta", "Camarón", "Mejillón", "Almeja", "Ostra", "Caracol marino", "Cangrejo de río", "Cangrejo de coral", "Ballena jorobada", "Delfín", "Orca", "Manatí", "Tortuga marina", "Foca", "Morsa", "Pingüino", "Calamar gigante", "Pez abisal", "Coral", "Anguila", "Pez volador", "Pez remo", "Caballito de mar", "Pez tamboril", "Mero", "Barracuda", "Serpiente marina", "Pez aguja", "Pez sapo", "Cangrejo herradura", "Tortuga boba", "Tiburón ballena", "Pez ángel", "Pez cirujano", "Pez mariposa", "Pez globo", "Raya", "Cabra de mar", "Nudibranquio", "Pez"],
    }
];
const knownAnimals = ['conejo', 'rata', 'ciervo', 'zorro', 'ardilla', 'mapache', 'murciélago', 'castor', 'nutria', 'comadreja', 'opossum', 'marmota', 'armadillo', 'erizo', 'turón', 'hurón', 'mofeta', 'canguro', 'koala', 'wombat', 'oso hormiguero', 'iguana', 'serpiente', 'lagarto', 'tortuga', 'sapo', 'rana', 'salamanquesa', 'lagartija', 'gaviota', 'búho', 'halcón', 'águila', 'cuervo', 'paloma', 'tórtola', 'gorrión', 'petirrojo', 'canario', 'colibrí', 'pingüino', 'loro', 'flamenco', 'avestruz', 'pavo real', 'cebra', 'jirafa', 'hipopótamo', 'rinoceronte', 'elefante', 'hipopótamo', 'ñu', 'gacela', 'bufalo', 'alce', 'antílope', 'camello', 'llama', 'guanaco', 'caballo'];

const superpowerValidations = [
    {
        message: "Ese superpoder es muy peligroso y por eso no es válido.",
        values: ["fuerza", "velocidad", "volar", "vuel", "rayo", "teletrans", "clima", "tiempo", "meteo", "fuego", "salto", "lobezno", "lobo"],
    },
    {
        message: "Ese superpoder puede llevar a cuestiones morales y legales que no permiten que sea un superpoder válido.",
        values: ["invisib", "mente", "mental", 'forma', 'onmi'],
    },
    {
        message: "El superpoder no puede llevar la palabra super, es muy redundante.",
        values: ["super"],
    }
];

const knownSuperpowers = ["animal", "regenera", "Telepatía", "Elasticidad", "agua", "viento", "tierra", "inteligen", "vista", "oído", "Telequinesis", "Precognición", "Retrocognición", "resistencia", "agilidad", "Transformación", "Telekinesis", "sonido", "Inmun", "voz", "transform", "conver", "magia", "mago", "maga"];

const foodValidations = [
    {
        message: "Debes optar por una comida más sana.",
        values: ["Hamburg", "Pizza", "Hot dogs", "Alitas de pollo", "Nachos", "Dona", "frit", "Tacos", "Empanadas", "Churros", "Chips", "Refresco", "Pastel", "Galletas", "Palomitas", "roscas", "mantequilla", "azucar", "Helado", "Burritos", "Macarrones", "Bocadillo", "Bocata", "Rosquillas", "Salsa", "rebozad", "Panqueques", "Nuggets", "crema", "nata", "Batidos", "Waffles", "espaguetis", "spagetti"],
    },
    {
        message: "Bueno... mejor una comida no tan sana, algo que no se considere guarnición",
        values: ["ensalada", "verduras"],
    },
    {
        message: "La creciente insistencia de ponerle chorizo a la paella invalida ese plato, debes elegir otro",
        values: ["paella"],
    },
    {
        message: "Go vegan, save the world (Greta)",
        values: ["Carne", "filete", "Cerdo", "costillas", "tocino", "jamón", "chuletas", "solomillo",
            "Pollo", "pechuga", "alas", "muslos",
            "Pavo",
            "Pescado", "salmón", "atún", "bacalao", "calamar", "pulpo",
            "Marisco", "camarones", "cangrejo", "langosta",
            "Huevos", "revueltos", "tortill",
            "Leche", "Queso", "cheddar", "mozzarella", "gouda", "Yogur", "Mantequilla",
            "Mayonesa", "Gelatina",
            "manteca", "jamón", "salami",
            "césar", "albóndigas", "salchichas", "chorizo", "ceviche", "foie"
        ],
    },
];

const knownFoods = [
    "Hamburg", "Pizza", "Hot dogs", "Alitas de pollo", "Nachos", "Dona", "frit", "Tacos", "Empanadas", "Churros", "Chips", "Refresco", "Pastel", "Galletas", "Palomitas", "roscas", "mantequilla", "azucar", "Helado", "Burritos", "Macarrones", "Bocadillo", "Bocata", "Rosquillas", "Salsa", "rebozad", "Panqueques", "Nuggets", "crema", "nata", "Batidos", "Waffles", "espaguetis", "spagetti",
    "Ensalada", "Hummus", "garbanzos", "Guacamole", "aguacate", "Falafel",
    "verduras", "Chili", "lentejas", "Arroz", "frijoles", "Tofu", "Berenjena",
    "Brecol", "brocoli", "Sopa", "Guiso", "manzana", "soja", "fruta", "papa", "patata",
    "Carne", "filete", "Cerdo", "costillas", "tocino", "jamón", "chuletas", "solomillo",
    "Pollo", "pechuga", "alas", "muslos",
    "Pavo",
    "Pescado", "salmón", "atún", "bacalao", "calamar", "pulpo",
    "Marisco", "camarones", "cangrejo", "langosta",
    "Huevos", "revueltos", "tortill",
    "Leche", "Queso", "cheddar", "mozzarella", "gouda", "Yogur", "Mantequilla",
    "Mayonesa", "Gelatina",
    "manteca", "jamón", "salami",
    "césar", "albóndigas", "salchichas", "chorizo", "ceviche", "foie", "paella"
];



const colorValidations = [
    {
        message: "Técnicamente el negro no es un color.",
        values: ["#000000"],
    },
    {
        message: "Técnicamente el blanco no es un color.",
        values: ["#FFFFFF"],
    },
];

const cssColorsToPantone = {
    AliceBlue: '658C',
    AntiqueWhite: '7527C',
    Aqua: '3242C',
    Aquamarine: '337C',
    Azure: '656C',
    Beige: '468C',
    Bisque: '719C',
    Black: 'Process Black C',
    BlanchedAlmond: '7401C',
    Blue: '293C',
    BlueViolet: '267C',
    Brown: '462C',
    BurlyWood: '466C',
    CadetBlue: '549C',
    Chartreuse: '390C',
    Chocolate: '476C',
    Coral: '7415C',
    CornflowerBlue: '652C',
    Cornsilk: '7499C',
    Crimson: '202C',
    Cyan: '306C',
    DarkBlue: '289C',
    DarkCyan: '320C',
    DarkGoldenRod: '141C',
    DarkGray: 'Cool Gray 11 C',
    DarkGrey: 'Cool Gray 11 C',
    DarkGreen: '343C',
    DarkKhaki: '4525C',
    DarkMagenta: '261C',
    DarkOliveGreen: '5743C',
    DarkOrange: '716C',
    DarkOrchid: '2627C',
    DarkRed: '7625C',
    DarkSalmon: '162C',
    DarkSeaGreen: '563C',
    DarkSlateBlue: '7673C',
    DarkSlateGray: '432C',
    DarkSlateGrey: '432C',
    DarkTurquoise: '3145C',
    DarkViolet: '2745C',
    DeepPink: '214C',
    DeepSkyBlue: '292C',
    DimGray: 'Cool Gray 11 C',
    DimGrey: 'Cool Gray 11 C',
    DodgerBlue: '286C',
    FireBrick: '7622C',
    FloralWhite: '7499C',
    ForestGreen: '357C',
    Fuchsia: 'Purple C',
    Gainsboro: '422C',
    GhostWhite: 'White C',
    Gold: '1235C',
    GoldenRod: '143C',
    Gray: 'Cool Gray 7 C',
    Grey: 'Cool Gray 7 C',
    Green: '356C',
    GreenYellow: '381C',
    HoneyDew: '573C',
    HotPink: '212C',
    IndianRed: '181C',
    Indigo: '2736C',
    Ivory: '7499C',
    Khaki: '7506C',
    Lavender: '271C',
    LavenderBlush: '672C',
    LawnGreen: '370C',
    LemonChiffon: '7401C',
    LightBlue: '290C',
    LightCoral: '176C',
    LightCyan: '2985C',
    LightGoldenRodYellow: '602C',
    LightGray: 'Cool Gray 2 C',
    LightGrey: 'Cool Gray 2 C',
    LightGreen: '7481C',
    LightPink: '189C',
    LightSalmon: '162C',
    LightSeaGreen: '3278C',
    LightSkyBlue: '284C',
    LightSlateGray: '637C',
    LightSlateGrey: '637C',
    LightSteelBlue: '7451C',
    LightYellow: '7499C',
    Lime: '802C',
    LimeGreen: '369C',
    Linen: '468C',
    Magenta: 'Rhodamine Red C',
    Maroon: '1815C',
    MediumAquaMarine: '321C',
    MediumBlue: '286C',
    MediumOrchid: '2592C',
    MediumPurple: '2096C',
    MediumSeaGreen: '3415C',
    MediumSlateBlue: '2715C',
    MediumSpringGreen: '802C',
    MediumTurquoise: '549C',
    MediumVioletRed: '235C',
    MidnightBlue: '2767C',
    MintCream: '304C',
    MistyRose: '7603C',
    Moccasin: '466C',
    NavajoWhite: '155C',
    Navy: '289C',
    OldLace: '468C',
    Olive: '575C',
    OliveDrab: '5757C',
    Orange: '021C',
    OrangeRed: '1788C',
    Orchid: '252C',
    PaleGoldenRod: '7499C',
    PaleGreen: '351C',
    PaleTurquoise: '317C',
    PaleVioletRed: '204C',
    PapayaWhip: '1205C',
    PeachPuff: '1555C',
    Peru: '730C',
    Pink: '2036C',
    Plum: '2583C',
    PowderBlue: '277C',
    Purple: '2617C',
    RebeccaPurple: '2096C',
    Red: '186C',
    RosyBrown: '472C',
    RoyalBlue: '286C',
    SaddleBrown: '4705C',
    Salmon: '162C',
    SandyBrown: '159C',
    SeaGreen: '3308C',
    SeaShell: '9280C',
    Sienna: '469C',
    Silver: '877C',
    SkyBlue: '290C',
    SlateBlue: '2736C',
    SlateGray: '424C',
    SlateGrey: '424C',
    Snow: '705C',
    SpringGreen: '375C',
    SteelBlue: '540C',
    Tan: '465C',
    Teal: '7472C',
    Thistle: '2577C',
    Tomato: '1788C',
    Turquoise: '3252C',
    Violet: '269C',
    Wheat: '726C',
    White: 'White',
    WhiteSmoke: '420C',
    Yellow: 'Yellow',
    YellowGreen: '375C',
};

const cssColorsToHex = {
    AliceBlue: "#F0F8FF",
    AntiqueWhite: "#FAEBD7",
    Aqua: "#00FFFF",
    Aquamarine: "#7FFFD4",
    Azure: "#F0FFFF",
    Beige: "#F5F5DC",
    Bisque: "#FFE4C4",
    Black: "#000000",
    BlanchedAlmond: "#FFEBCD",
    Blue: "#0000FF",
    BlueViolet: "#8A2BE2",
    Brown: "#A52A2A",
    BurlyWood: "#DEB887",
    CadetBlue: "#5F9EA0",
    Chartreuse: "#7FFF00",
    Chocolate: "#D2691E",
    Coral: "#FF7F50",
    CornflowerBlue: "#6495ED",
    Cornsilk: "#FFF8DC",
    Crimson: "#DC143C",
    Cyan: "#00FFFF",
    DarkBlue: "#00008B",
    DarkCyan: "#008B8B",
    DarkGoldenRod: "#B8860B",
    DarkGray: "#A9A9A9",
    DarkGrey: "#A9A9A9",
    DarkGreen: "#006400",
    DarkKhaki: "#BDB76B",
    DarkMagenta: "#8B008B",
    DarkOliveGreen: "#556B2F",
    DarkOrange: "#FF8C00",
    DarkOrchid: "#9932CC",
    DarkRed: "#8B0000",
    DarkSalmon: "#E9967A",
    DarkSeaGreen: "#8FBC8F",
    DarkSlateBlue: "#483D8B",
    DarkSlateGray: "#2F4F4F",
    DarkSlateGrey: "#2F4F4F",
    DarkTurquoise: "#00CED1",
    DarkViolet: "#9400D3",
    DeepPink: "#FF1493",
    DeepSkyBlue: "#00BFFF",
    DimGray: "#696969",
    DimGrey: "#696969",
    DodgerBlue: "#1E90FF",
    FireBrick: "#B22222",
    FloralWhite: "#FFFAF0",
    ForestGreen: "#228B22",
    Fuchsia: "#FF00FF",
    Gainsboro: "#DCDCDC",
    GhostWhite: "#F8F8FF",
    Gold: "#FFD700",
    GoldenRod: "#DAA520",
    Gray: "#808080",
    Grey: "#808080",
    Green: "#008000",
    GreenYellow: "#ADFF2F",
    HoneyDew: "#F0FFF0",
    HotPink: "#FF69B4",
    IndianRed: "#CD5C5C",
    Indigo: "#4B0082",
    Ivory: "#FFFFF0",
    Khaki: "#F0E68C",
    Lavender: "#e6e6fa",
    LavenderBlush: "#fff0f5",
    LawnGreen: "#7cfc00",
    LemonChiffon: "#fffacd",
    LightBlue: "#add8e6",
    LightCoral: "#f08080",
    LightCyan: "#e0ffff",
    LightGoldenRodYellow: "#fafad2",
    LightGray: "#d3d3d3",
    LightGrey: "#d3d3d3",
    LightGreen: "#90ee90",
    LightPink: "#ffb6c1",
    LightSalmon: "#ffa07a",
    LightSeaGreen: "#20b2aa",
    LightSkyBlue: "#87cefa",
    LightSlateGray: "#778899",
    LightSlateGrey: "#778899",
    LightSteelBlue: "#b0c4de",
    LightYellow: "#ffffe0",
    Lime: "#00ff00",
    LimeGreen: "#32cd32",
    Linen: "#faf0e6",
    Magenta: "#ff00ff",
    Maroon: "#800000",
    MediumAquaMarine: "#66c2a5",
    MediumBlue: "#0000cd",
    MediumOrchid: "#ba55d3",
    MediumPurple: "#9370db",
    MediumSeaGreen: "#3cb371",
    MediumSlateBlue: "#7b68ee",
    MediumSpringGreen: "#00fa9a",
    MediumTurquoise: "#48d1cc",
    MediumVioletRed: "#c71585",
    MidnightBlue: "#191970",
    MintCream: "#f5fffa",
    MistyRose: "#ffe4e1",
    Moccasin: "#ffe4b5",
    NavajoWhite: "#ffdead",
    Navy: "#000080",
    OldLace: "#fdf5e6",
    Olive: "#808000",
    OliveDrab: "#6b8e23",
    Orange: "#ffa500",
    OrangeRed: "#ff4500",
    Orchid: "#da70d6",
    PaleGoldenRod: "#eee8aa",
    PaleGreen: "#98fb98",
    PaleTurquoise: "#afeeee",
    PaleVioletRed: "#db7093",
    PapayaWhip: "#ffefd5",
    PeachPuff: "#ffdab9",
    Peru: "#cd853f",
    Pink: "#ffc0cb",
    Plum: "#dda0dd",
    PowderBlue: "#b0e0e6",
    Purple: "#800080",
    RebeccaPurple: "#663399",
    Red: "#ff0000",
    RosyBrown: "#bc8f8f",
    RoyalBlue: "#4169e1",
    SaddleBrown: "#8b4513",
    Salmon: "#fa8072",
    SandyBrown: "#f4a460",
    SeaGreen: "#2e8b57",
    SeaShell: "#fff5ee",
    Sienna: "#a0522d",
    Silver: "#c0c0c0",
    SkyBlue: "#87ceeb",
    SlateBlue: "#6a5acd",
    SlateGray: "#708090",
    SlateGrey: "#708090",
    Snow: "#fffafa",
    SpringGreen: "#00FF7F",
    SteelBlue: "#4682B4",
    Tan: "#D2B48C",
    Teal: "#008080",
    Thistle: "#D8BFD8",
    Tomato: "#FF6347",
    Turquoise: "#40E0D0",
    Violet: "#EE82EE",
    Wheat: "#F5DEB3",
    White: "#FFFFFF",
    WhiteSmoke: "#F5F5F5",
    Yellow: "#FFFF00",
    YellowGreen: "#9ACD32"
};


function replaceAccents(value) {
    return value.toLowerCase().replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('ó', 'o').replaceAll('ú', 'u');
}

function displayPantoneField() {
    document.getElementById("pantone-wrapper").classList.add('show');
}

function validate(e) {
    displayPantoneField();
    let isValid = true;
    const form = e.target;
    console.log('validate');
    // Validating Animal
    isValid = !form.elements.name.validationMessage;

    const name = form.elements.name;
    name.parentElement.querySelector(".invalid-feedback").innerHTML = name.validationMessage;

    const animal = form.elements.animal;
    animal.setCustomValidity('');
    isValid = isValid && !animal.validationMessage;
    isValid && animalValidations.forEach(validation => {
        if (validation.values.some(value => replaceAccents(animal.value + "$").indexOf(replaceAccents(value)) != -1)) {
            animal.setCustomValidity(validation.message);
            isValid = false;
        }
    });
    if (isValid && !knownAnimals.some(value => replaceAccents(animal.value).indexOf(replaceAccents(value)) != -1)) {
        animal.setCustomValidity('No conozco ese animal, lo siento.');
        isValid = false;
    }
    animal.parentElement.querySelector(".invalid-feedback").innerHTML = animal.validationMessage;

    // Validating Superpower
    const superpower = form.elements.superpower;
    superpower.setCustomValidity('');
    isValid = isValid && !superpower.validationMessage;
    isValid && superpowerValidations.forEach(validation => {
        if (validation.values.some(value => replaceAccents(superpower.value).indexOf(replaceAccents(value)) != -1)) {
            superpower.setCustomValidity(validation.message);
            isValid = false;
        }
    });
    if (isValid && !knownSuperpowers.some(value => replaceAccents(superpower.value).indexOf(replaceAccents(value)) != -1)) {
        superpower.setCustomValidity('No conozco ese superpoder, lo siento.');
        isValid = false;
    }
    superpower.parentElement.querySelector(".invalid-feedback").innerHTML = superpower.validationMessage;


    // Validating food
    const food = form.elements.food;
    food.setCustomValidity('');
    isValid = isValid && !food.validationMessage;
    isValid && replaceAccents(food.value).indexOf('vegan') == -1 && foodValidations.forEach(validation => {
        if (validation.values.some(value => replaceAccents(food.value).indexOf(replaceAccents(value)) != -1)) {
            food.setCustomValidity(validation.message);
            isValid = false;
        }
    });
    if (isValid && !knownFoods.some(value => replaceAccents(food.value).indexOf(replaceAccents(value)) != -1)) {
        food.setCustomValidity('No conozco ese alimento, lo siento.');
        isValid = false;
    }
    food.parentElement.querySelector(".invalid-feedback").innerHTML = food.validationMessage;


    // Validating Color
    const color = form.elements.color;
    color.setCustomValidity('');
    isValid = isValid && !color.validationMessage;
    isValid && colorValidations.forEach(validation => {
        if (validation.values.some(value => replaceAccents(color.value.substring(0, 7)).indexOf(replaceAccents(value)) != -1)) {
            color.setCustomValidity(validation.message);
            isValid = false;
        }
    });
    color.parentElement.querySelector(".invalid-feedback").innerHTML = color.validationMessage;



    // Validating Pantone
    const pantone = form.elements.pantone;
    if (!pantone) {
        isValid = false;
    }
    let hexToCssColors = {};
    let PantoneToCssColors = {};
    Object.keys(cssColorsToHex).forEach(color => hexToCssColors[cssColorsToHex[color].toLowerCase()] = color);
    Object.keys(cssColorsToPantone).forEach(color => PantoneToCssColors[cssColorsToPantone[color].toLowerCase()] = color);
    pantone.setCustomValidity('');
    isValid = isValid && !pantone.validationMessage;
    if (isValid && (!hexToCssColors[color.value.toLowerCase()] || hexToCssColors[color.value.toLowerCase()] != PantoneToCssColors[pantone.value.toLowerCase()])) {
        pantone.setCustomValidity('Incorrecto según mis conocimientos (que son pocos).');
        isValid = false;
    }
    pantone.parentElement.querySelector(".invalid-feedback").innerHTML = pantone.validationMessage;

    // Validating Username
    const username = form.elements.username;
    username.setCustomValidity('');
    isValid = isValid && !username.validationMessage;
    if (isValid) {
        username.setCustomValidity('Nombre de usuario no disponible... o eso parece');
    }
    username.parentElement.querySelector(".invalid-feedback").innerHTML = username.validationMessage;
    isValid = false;

    if (!isValid) { // form.checkValidity()
        e.preventDefault()
        e.stopPropagation()
    }
    form.classList.add('was-validated')
    //submitting form...
}



document.querySelector('form').onsubmit = validate;
document.querySelector('form').action = "generateavatar.php";
document.querySelector('#color').onchange = displayPantoneField;