const proyectos = [
    {
        titulo: "Encriptador de texto",
        descripcion: "Este proyecto encripta cualquier texto y lo desencripta",
        link: "https://ehr27.github.io/Encriptador-texto/",
        imagen: "encriptar.png",
        tecnologias: ["HTML", "CSS", "JS"]
    },
    {
        titulo: "Convertidor de monedas",
        descripcion: "Este proyecto es un conversor de monedas",
        link: "https://ehr27.github.io/Currency-Converter/",
        imagen: "currency.png",
        tecnologias: ["HTML", "CSS", "JS", "API"]
    },
    {
        titulo: "Juego del número secreto",
        descripcion: "Este proyecto es un juego donde tienes que adivinar el número secreto",
        link: "https://ehr27.github.io/Secret-Game/",
        imagen: "secreto.png",
        tecnologias: ["HTML", "CSS", "JS"]
    },
    {
        titulo: "Broma de San Valentín",
        descripcion: "Esto es una pequeña broma para el día de San Valentín",
        link: "https://ehr27.github.io/Valentine-prank/",
        imagen: "valentine-prank.png",
        tecnologias: ["HTML", "CSS", "JS"]
    },
    {
        titulo: "Tarjeta de San Valentín",
        descripcion: "Esto es una tarjeta para el día de San Valentín",
        link: "https://ehr27.github.io/Valentine-card/",
        imagen: "valentine-card.png",
        tecnologias: ["HTML", "CSS"]
    },
];

const informacionPersonal ={
    nombre: "Edward",
    subtitulo: "Desarrolador web",
    imagen: "img/me.jpg",
    otros: [
        ["Nacionalidad", "Dominicano"],
        [
            "Edad",
            new Date(new Date() - new Date("1999/02/27")).getFullYear()-1970
        ],
    ],
    idiomas: [
        ["Español", "Nativo"], ["Inglés", "Intermedio"]
    ],
    tecnologias: [
        ["HTML", 5], ["CSS", 5], ["JavaScript", 4]
    ],
    redes: [
        ["github", "https://github.com/EHR27"],
        ["linkedin", "www.linkedin.com/in/edward-hernandez-ramirez-b07490257/"],
    ]
};