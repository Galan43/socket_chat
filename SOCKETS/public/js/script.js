const socket = io();

// Escuchar respuestas del servidor y mostrarlas en el chat
socket.on("respuesta", (respuesta) => {
    mostrarRespuesta(respuesta);
});

var enviarDatos = document.getElementById("enviarDatos");
enviarDatos.addEventListener("submit", (e) => {
    e.preventDefault();

    var pregunta = document.getElementById("pregunta").value;

    socket.emit("pregunta", pregunta);

    document.getElementById("pregunta").value = "";
});

function mostrarRespuesta(respuesta) {
    var chat = document.getElementById("chat");
    var mensajeElemento = document.createElement("div");
    mensajeElemento.textContent = respuesta;
    mensajeElemento.classList.add("chat-message");
    chat.appendChild(mensajeElemento);
}
