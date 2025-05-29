document.getElementById('form-registro').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const pelicula = document.getElementById('pelicula').value.trim();
  const genero = document.getElementById('genero').value.trim();

  if (!nombre || !pelicula || !genero) {
    alert("Completa todos los campos.");
    return;
  }

  const res = await fetch('/registro-completo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, pelicula, genero })
  });

  alert(res.ok ? 'Registro completo exitoso' : 'Error al registrar');
});

async function obtenerRecomendaciones() {
  const nombre = document.getElementById('usuarioRecomendado').value.trim();
  const res = await fetch(`/recomendar/${nombre}`);
  const datos = await res.json();

  const lista = document.getElementById('lista-recomendaciones');
  lista.innerHTML = '';

  datos.forEach((titulo) => {
    const item = document.createElement('li');
    item.textContent = titulo;
    lista.appendChild(item);
  });
}