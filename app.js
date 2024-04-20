document.querySelector("#btn").addEventListener("click", () => {
    const excusa = generarExcusa();
    document.querySelector("#excusa").innerHTML = excusa;
    document.getElementById("overlay").style.display = "block";

    // Mostrar la imagen si es ganador
    if (document.querySelector("#excusa").classList.contains("ganador")) {
        document.querySelector("#ganadorImg").style.display = "block";
    }
});
const quien = [
    "Miquel",
    "Ferran",
    "Mi gato",
    "Nair",
    "Mi abuela",
    "Mi amigo",
    "Un alien",
    "Un fantasma",
    "Un ninja",
    "Un mago",
    "Un dragón",
    "Un monstruo",
    "Un espectro",
    "Un duende",
    "Un elfo",
    "Un ogro",
    "Un diablo",
    "Miquel",
    "Un ser paranormal",
    "Un ser misterioso"
];

const accion = [
    "aprobó",
    "dañó",
    "malinterpretó",
    "derramó",
    "distorsionó",
    "rompió",
    "ensució",
    "trituró",
    "desconectó",
    "arruinó",
    "cortó",
    "desordenó",
    "arrancó",
    "extravió",
    "soltó",
    "desinstaló",
    "sacó",
    "cambiado",
    "estropeó",
    "mordió"
];

const que = [
    "el examen",
    "la reserva",
    "el documento",
    "el control remoto",
    "la conexión",
    "la fotografía",
    "la junta",
    "el informe",
    "el bootcamp",
    "el contrato",
    "el video",
    "la cita",
    "el mensaje",
    "la dirección",
    "la cartera",
    "el itinerario",
    "la llave",
    "el recuerdo",
    "el proyecto",
    "la oportunidad"
];

const donde = [
    "en el restaurante.",
    "en la escuela.",
    "en la consulta.",
    "en la playa.",
    "en la plaza.",
    "en el centro comercial.",
    "en el avión.",
    "en la sala de espera.",
    "en el bosque.",
    "en la clínica.",
    "en el coche.",
    "en la reunión.",
    "en la estación.",
    "en el hospital.",
    "en la piscina.",
    "en el jardín.",
    "en la boda.",
    "en la conferencia.",
    "en el cine.",
    "en el espacio."
];

function generarExcusa() {
    const quienIndex = Math.floor(Math.random() * quien.length);
    const accionIndex = Math.floor(Math.random() * accion.length);
    const queIndex = Math.floor(Math.random() * que.length);
    const dondeIndex = Math.floor(Math.random() * donde.length);

    const excusa =
        quien[quienIndex] +
        " " +
        accion[accionIndex] +
        " " +
        que[queIndex] +
        " " +
        donde[dondeIndex];

     if (
        quien[quienIndex] === "Miquel" &&
        accion[accionIndex] === "aprobó" &&
        que[queIndex] === "el bootcamp" &&
        donde[dondeIndex] === "en el setup gamer."
    ) {
        document.querySelector("#excusa").classList.add("ganador");
    }

    return excusa;
