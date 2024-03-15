const proyectosContainer = document.getElementById("tarjetasContainer");
const aside = document.getElementsByTagName("aside")[0];

const getTecnologias = (tecnologias) =>{
    let res = "";
    tecnologias.forEach(tecnologia =>{
        res += `<span class="tecnologia">${tecnologia}</span>`
    })
    return res;
}

//Creacion de tabla de proyectos
proyectos.forEach(proyecto =>{
    const nuevoProyecto = document.createElement("div");
    nuevoProyecto.classList = "tarjeta proyecto"
    nuevoProyecto.textContent = proyecto.titulo;
    proyectosContainer.appendChild(nuevoProyecto);

    nuevoProyecto.innerHTML = `
    <img src="img/proyectos/${proyecto.imagen}">
    <div>
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion}</p>
        <p>Tecnologías: ${getTecnologias(proyecto.tecnologias)}</p>
    </div>    
    <a href="${proyecto.link}" target="_blank">Ver proyecto</a>
    `
});

//Creacion de info personal
const nuevaPresentacion = document.createElement("div");
nuevaPresentacion.classList = "presentacion";
nuevaPresentacion.innerHTML = `
    <img src="${informacionPersonal.imagen}">
`;

informacionPersonal.otros.forEach(dato =>{
    nuevaPresentacion.innerHTML += `
    <div>
        <span>${dato[0]}:</span>
        <span>${dato[1]}</span>
    </div>
    `
})

aside.appendChild(nuevaPresentacion);

//Idiomas
const nuevoIdioma = document.createElement("div");
nuevoIdioma.classList = "idioma";
informacionPersonal.idiomas.forEach(dato =>{
    nuevoIdioma.innerHTML += `
    <div>
        <span>${dato[0]}:</span>
        <span>${dato[1]}</span>
    </div>
    `
})
aside.appendChild(nuevoIdioma);

//Lenguajes de programacion
const nuevoLenguajeProgramacion = document.createElement("div");
nuevoLenguajeProgramacion.classList = "idioma";
informacionPersonal.tecnologias.forEach(dato =>{
    nuevoLenguajeProgramacion.innerHTML += `
    <div>
        <span>${dato[0]}</span>
        <span>${dato[1]}</span>
    </div>
    <progress max="10" value=${dato[1]}>
    `
})
aside.appendChild(nuevoLenguajeProgramacion);

//Links

function getIconoRed (red){
    switch(red){
        case "linkedin":
            return "linkedin.svg";
        case "github":
            return "github.svg";
    }
}

const nuevoRedes = document.createElement("div");
nuevoRedes.classList = "redes";
informacionPersonal.redes.forEach(dato =>{
    if(dato[1] === "") return;
    nuevoRedes.innerHTML += `
    <a href="${dato[1]}" target="_blank">
        <img src="img/icons/${getIconoRed(dato[0])}">
    </a>
    `
})
aside.appendChild(nuevoRedes);