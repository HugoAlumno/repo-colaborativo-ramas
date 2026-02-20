
function validarApellido(apellido) {
    let apellidoLower = apellido.toLowerCase();
    if (apellidoLower.length > 3 && 
        apellidoLower.length < 10 && 
        apellidoLower.startsWith("m")) {
        return "Apellido válido";
    } else {
        return "Apellido no válido";
    }
}
