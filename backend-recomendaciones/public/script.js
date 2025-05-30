//Registrar usuario y preferencia.
//Agrega un listener al formulario ID form-registro para interceptar el evento submit.
document.getElementById('form-registro').addEventListener('submit', async (e) => {
  e.preventDefault();

//Lectura y validar campos
//Obtiene los valores y luego los valida.
  const nombre = document.getElementById('nombre').value.trim();
  const pelicula = document.getElementById('pelicula').value.trim();
  const genero = document.getElementById('genero').value.trim();

  if (!nombre || !pelicula || !genero) {
    alert("Completa todos los campos.");
    return;
  }

  //Envio de datos a API.
  //Envia la solicitud POST a la ruta /registro-completo del servidor con los datos en formato JSON.
  const res = await fetch('/registro-completo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, pelicula, genero })
  });

  alert(res.ok ? 'Registro completo exitoso' : 'Error al registrar');
});

//Obtener recomendacion de peliculas
//Llama desde  un botno o evento para obtener recomendaciones para el usuario. Toma el nombre del usuario desde un campo con ID usuarioRecomendado.
//Luego realiza una solicitud GET a /recomendar/:nombre y lo convierte a JSON.
async function obtenerRecomendaciones() {
  const nombre = document.getElementById('usuarioRecomendado').value.trim();
  const res = await fetch(`/recomendar/${nombre}`);
  const datos = await res.json();

  //Muestra el resultado en la pagina.
  const lista = document.getElementById('lista-recomendaciones');
  lista.innerHTML = '';

  datos.forEach((titulo) => {
    const item = document.createElement('li');
    item.textContent = titulo;
    lista.appendChild(item);
  });
}
