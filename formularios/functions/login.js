 document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // acá hacer una solicitud AJAX al backend para validar las credenciales
    // simulamos el inicio de sesión
    if (usuario === "admin" && contrasena === "admin123") {
        alert("Inicio de sesión exitoso como administrador.");
        window.location.href="forms/nuevo_cliente.html";
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});