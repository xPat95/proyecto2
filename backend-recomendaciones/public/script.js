document.getElementById('formulario-usuario').addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;

  const respuesta = await fetch('/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre })
  });

  if (respuesta.ok) {
    alert('Usuario registrado exitosamente');
    document.getElementById('nombre').value = '';
  } else {
    alert('Error al registrar usuario');
  }
});

async function obtenerRecomendaciones() {
  const nombre = document.getElementById('usuarioRecomendado').value;

  const respuesta = await fetch(`/recomendar/${nombre}`);
  const datos = await respuesta.json();

  const lista = document.getElementById('lista-recomendaciones');
  lista.innerHTML = '';

  datos.forEach((titulo) => {
    const item = document.createElement('li');
    item.textContent = titulo;
    lista.appendChild(item);
  });
}