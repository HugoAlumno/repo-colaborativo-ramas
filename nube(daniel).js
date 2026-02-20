
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    const edad = parseInt(document.getElementById("edad").value);

    if (edad < 18 || isNaN(edad)) {
        event.preventDefault(); 
        alert("Debes tener más de 18 años. Por favor, vuelve a rellenar el campo.");
        document.getElementById("edad").value = ""; 
        document.getElementById("edad").focus(); 
    }
});
