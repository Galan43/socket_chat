function socket(io) {
    io.on("connection", (socket) => {
        socket.on("pregunta", (pregunta) => {
            var respuesta = obtenerRespuesta(pregunta);
            socket.emit("respuesta", respuesta);
        });
    });
}

function obtenerRespuesta(pregunta) {
    switch (pregunta) {
        case "1":
            return "Para solucionar problemas de conexión a Internet, intenta reiniciar tu router.";
        case "2":
            return "Para proteger tu computadora contra virus, utiliza un buen software antivirus y manténlo actualizado.";
        case "3":
            return "Para recuperar archivos borrados, verifica la papelera de reciclaje o utiliza software de recuperación de datos.";
        case "4":
            return "La forma más eficiente de hacer una copia de seguridad es utilizando servicios en la nube o discos externos.";
        case "5":
            return "Para mejorar el rendimiento de tu computadora, considera desinstalar programas innecesarios y realizar mantenimiento regular.";
        default:
            return "Lo siento, no tengo una respuesta para esa pregunta.";
    }
}

module.exports = socket;



