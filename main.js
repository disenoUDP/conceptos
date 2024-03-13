
// tomar division
const conceptosDiv = document.getElementById('conceptos');

document.addEventListener("DOMContentLoaded", function () {
    fetch('./conceptos.json')
    .then((response) => response.json())
    .then((json) => {
        let data = json.conceptos;
        let tabla = conceptosDiv.appendChild(document.createElement('table'));
        document.createElement('h1').innerHTML = 'Conceptos';

        // crear encabezados
        tabla.appendChild(document.createElement('th')).innerHTML = 'Nombre';
        tabla.appendChild(document.createElement('th')).innerHTML = 'Definición';

        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            // crear nueva fila
            let fila = tabla.appendChild(document.createElement('tr'));

            tabla.appendChild(document.createElement('td')).innerHTML = data[i].nombre;
            tabla.appendChild(document.createElement('td')).innerHTML = data[i].definicion;
        }
    })
});