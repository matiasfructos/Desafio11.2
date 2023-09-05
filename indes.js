// Define una función llamada enviarFormulario
function enviarFormulario() {
    // Obtiene el valor del campo de entrada con id "nombre"
    const nombre = document.getElementById('username').value;

    // Obtiene el valor del campo de entrada con id "apellido"
    const apellido = document.getElementById('pass').value;
    
    // Crea un objeto formData para almacenar los valores obtenidos del formulario
    const formData = {
        nombre: nombre,
        apellido: apellido,
    };

    console.log(formData)

    // Realiza una solicitud POST a la URL especificada usando fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
        // Especifica que se usará el método POST para la solicitud
        method: 'POST',

        // Configura el encabezado para indicar que se está enviando JSON
        headers: {
            'Content-Type': 'application/json'
        },

        // Convierte el objeto formData a una cadena JSON y lo coloca en el cuerpo de la solicitud
        body: JSON.stringify(formData)
    })
    // Cuando la solicitud se complete con éxito, analiza la respuesta como JSON
    .then(response => response.json())
    .then(data => {
        // Manipula la respuesta del servidor (en este caso, imprime los datos en la consola)
        console.log(data);
    })
    // Captura cualquier error que ocurra durante la solicitud o el análisis de la respuesta
    .catch(error => {
        // Maneja errores imprimiéndolos en la consola
        console.error('Error:', error);
    });
}

