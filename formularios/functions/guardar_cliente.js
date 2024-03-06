document.addEventListener('DOMContentLoaded', function() {
    const clienteForm = document.getElementById('clienteForm');
    const clienteList = document.getElementById('clienteList');

    // Evento para manejar el envío del formulario
    clienteForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener valores del formulario
        const documentoID = document.getElementById('documentoID').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;

        const domicilio = document.getElementById('domicilio').value;
        const localidad = document.getElementById('localidad').value;
        const provincia = document.getElementById('provincia').value;
        const telefono = document.getElementById('telefono').value;
        const telefonoAlternativo = document.getElementById('telefonoAlternativo').value;
        const mail = document.getElementById('mail').value;

        // Crear un objeto para representar el cliente
        const cliente = {
            id: Date.now(), // Generar un identificador único utilizando la marca de tiempo
            documentoID: documentoID,
            nombre: nombre,
            apellido: apellido,
            domicilio: domicilio,
            localidad: localidad,
            provincia: provincia,
            telefono: telefono,
            telefonoAlternativo: telefonoAlternativo,
            mail: mail
        };

        // Guardar el cliente en el almacenamiento local
        guardarCliente(cliente);

        // Limpiar el formulario después de enviar
        clienteForm.reset();

        // Mostrar los clientes almacenados
        mostrarClientes();
    });

    // Función para guardar un cliente en el almacenamiento local
    function guardarCliente(cliente) {
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        clientes.push(cliente);
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }

    // Función para mostrar los clientes almacenados
    function mostrarClientes() {
        clienteList.innerHTML = '';
        const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        clientes.forEach(function(cliente) {
            const listItem = document.createElement('li');
            listItem.textContent = `${cliente.nombre} ${cliente.apellido} - ${cliente.telefono} - ${cliente.mail}`;
            clienteList.appendChild(listItem);
        });
    }

    // Mostrar los clientes almacenados al cargar la página
    mostrarClientes();
});
