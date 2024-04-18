document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#excusa").innerHTML = generarExcusa();
});

const quien = [
  "Mi perro",
  "Mi gato",
  "Mi vecino",
  "Mi abuela",
  "Mi profesor",
  "Mi jefe",
  "Mi amigo",
  "Mi novio",
  "Mi novia",
  "Un extraterrestre",
  "El presidente",
  "Una celebridad",
  "Un fantasma",
  "Un unicornio",
  "Un ninja",
  "Un pirata",
  "Un vampiro",
  "Un mago",
  "Un dragón",
  "Un robot",
  "Un superhéroe",
  "Un hada",
  "Un monstruo",
  "Un espectro",
  "Un espía",
  "Un zombie",
  "Un genio",
  "Un espíritu de la lámpara",
  "Un genio de la botella",
  "Un duende",
  "Un demonio",
  "Un elfo",
  "Un gnomo",
  "Un leprechaun",
  "Un ogro",
  "Un troll",
  "Un gremlin",
  "Un diablo",
  "Un ángel",
  "Un ser mitológico",
  "Una criatura mítica",
  "Un ser legendario",
  "Vicente",
  "Un ser mágico",
  "Miquel",
  "Un ser paranormal",
  "Un ser extraño",
  "Una entidad desconocida",
  "Un ser enigmático",
  "Un ser misterioso"
];

const accion = [
  "se comió",
  "rompió",
  "perdió",
  "olvidó",
  "escondió",
  "confundió",
  "aprobó",
  "tiró",
  "ensució",
  "mordió",
  "quemó",
  "escribió en",
  "cortó",
  "mojó",
  "congeló",
  "extravió",
  "robó",
  "manchó",
  "arruinó",
  "pisó",
  "dañó",
  "desconfiguró",
  "desarmó",
  "derramó",
  "trituró",
  "destrozó",
  "arrancó",
  "estropeó",
  "desapareció",
  "cambió",
  "desenchufó",
  "desinstaló",
  "rayó",
  "borró",
  "enmudeció",
  "dobló",
  "volcó",
  "desordenó",
  "sacó",
  "despegó",
  "cortocircuitó",
  "traspapeló",
  "fundió",
  "soltó",
  "desprestigió",
  "malinterpretó",
  "distorsionó",
  "desfiguró",
  "inutilizó",
  "desconectó"
];

const que = [
  "el trabajo",
  "la tarea",
  "el informe",
  "el proyecto",
  "el documento",
  "el contrato",
  "el teléfono",
  "la computadora",
  "el auto",
  "la llave",
  "el control remoto",
  "la cartera",
  "el dinero",
  "el boleto",
  "la cita",
  "la entrevista",
  "la oportunidad",
  "el examen",
  "la receta",
  "el regalo",
  "el libro",
  "la clave",
  "la idea",
  "el misterio",
  "el mensaje",
  "el correo electrónico",
  "la información",
  "la fotografía",
  "la conexión",
  "la melodía",
  "el video",
  "la dirección",
  "la maleta",
  "la chaqueta",
  "el paraguas",
  "el recuerdo",
  "la reserva",
  "el plan",
  "el itinerario",
  "el vuelo",
  "el tren",
  "el autobús",
  "la junta",
  "el acuerdo",
  "el bootcamp",
  "el anillo",
  "la cerradura"
];

const donde = [
  "en el baño.",
  "en la cocina.",
  "en mi cuarto.",
  "en el jardín.",
  "en la calle.",
  "en la oficina.",
  "en el trabajo.",
  "en la escuela.",
  "en la universidad.",
  "en el parque.",
  "en el centro comercial.",
  "en la tienda.",
  "en el restaurante.",
  "en el cine.",
  "en el teatro.",
  "en el estacionamiento.",
  "en el coche.",
  "en el autobús.",
  "en el tren.",
  "en el avión.",
  "en el bar.",
  "en la fiesta.",
  "en la boda.",
  "en la reunión.",
  "en la conferencia.",
  "en la presentación.",
  "en el setup gamer.",
  "en la cita.",
  "en la consulta.",
  "en el hospital.",
  "en la clínica.",
  "en la farmacia.",
  "en el supermercado.",
  "en la plaza.",
  "en la estación.",
  "en la terminal.",
  "en la sala de espera.",
  "en el gimnasio.",
  "en la piscina.",
  "en la playa.",
  "en la montaña.",
  "en el bosque.",
  "en el campo.",
  "en el espacio.",
  "en otro planeta.",
  "en otro universo.",
  "en un lugar desconocido.",
  "en un lugar lejano.",
  "en un lugar secreto.",
  "en un lugar misterioso.",
  "en un lugar oculto.",
  "en un lugar perdido.",
  "en un lugar remoto."
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
  //
  // Esta forma de abajo es una optimización de la concatenación, ya que prettier es un plug-in que automáticamente te ordena hacia abajo el código.
  // const excusa = `${quien[quienIndex]} ${accion[accionIndex]} ${que[queIndex]} ${donde[dondeIndex]}`;

  if (
    quien[quienIndex] === "Miquel" &&
    accion[accionIndex] === "aprobó" &&
    que[queIndex] === "el bootcamp" &&
    donde[dondeIndex] === "en el setup gamer."
  ) {
    // Añade una clase al elemento con id "excusa"
    document.querySelector("#excusa").classList.add("ganador");
    alert("HAS GANADO UN PREMIO!!!");
  }

  return excusa;
}
