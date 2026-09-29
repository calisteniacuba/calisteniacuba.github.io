/* =========================================================
   COACH.JS
   Datos + lógica de la página individual del entrenador.
   ========================================================= */

const COACHES = {
  1: {
  nombre: 'Fulanito',
  rol: 'Entrenador de Calistenia',
  ubicacion: 'La Habana',
  bio: '',
  especialidades: ['', '', '', 'Front Lever'],
  stats: {
    experiencia: '',
    alumnos: '',
    eventos: ''
  }
}
   
};

/* ---------- Logica de render ---------- */

document.addEventListener('DOMContentLoaded', function () {
  console.log('coach.js cargado OK');

  const container = document.getElementById('coach-content');
  if (!container) {
    console.warn('No se encontro #coach-content');
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  console.log('ID recibido:', id);

  const coach = id && COACHES[id];
  console.log('Coach encontrado:', coach);

  if (!coach) {
    container.innerHTML = renderError();
    return;
  }

  document.title = coach.nombre + ' - Calistenia en Cuba';
  container.innerHTML = renderCoach(coach);
});

/* ---------- Plantilla del coach ---------- */

function renderCoach(coach) {
  const inicial = coach.nombre.trim().charAt(0).toUpperCase();
  const primerNombre = coach.nombre.split(' ')[0];

  let especialidadesHTML = '';
  for (let i = 0; i < coach.especialidades.length; i++) {
    especialidadesHTML += '<li class="tag">' + coach.especialidades[i] + '</li>';
  }

  const mensaje = encodeURIComponent(
    'Hola ' + primerNombre + ', quiero informacion sobre tus entrenamientos.'
  );

  return `
    <div class="coach-header">
      <div class="coach-avatar" aria-hidden="true">${inicial}</div>
      <h1 class="coach-nombre">${coach.nombre}</h1>
      <p class="coach-rol">${coach.rol}</p>
      <p class="coach-ubicacion">
        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
        ${coach.ubicacion}
      </p>
    </div>

    <p class="coach-bio">${coach.bio}</p>

    <div class="coach-grid">

      <section class="coach-bloque">
        <h3><i class="fa-solid fa-bolt" aria-hidden="true"></i> Especialidades</h3>
        <ul class="coach-especialidades">${especialidadesHTML}</ul>
      </section>

      <section class="coach-bloque">
        <h3><i class="fa-solid fa-chart-simple" aria-hidden="true"></i> Trayectoria</h3>
        <div class="coach-stats">
          <div class="coach-stat">
            <strong>${coach.stats.experiencia}</strong>
            <span>Experiencia</span>
          </div>
          <div class="coach-stat">
            <strong>${coach.stats.alumnos}</strong>
            <span>Alumnos</span>
          </div>
          <div class="coach-stat">
            <strong>${coach.stats.eventos}</strong>
            <span>Eventos</span>
          </div>
        </div>
      </section>

    </div>

    <div class="coach-cta">
      <a href="https://wa.me/5359638868?text=${mensaje}"
         class="btn btn-primary btn-lg"
         target="_blank" rel="noopener">
        <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
        Contactar a ${primerNombre}
      </a>
    </div>
  `;
}

/* ---------- Plantilla de error ---------- */

function renderError() {
  return `
    <div class="coach-estado">
      <i class="fa-solid fa-user-slash" aria-hidden="true"></i>
      <h2>Entrenador no encontrado</h2>
      <p>El perfil que buscas no existe o fue movido.</p>
      <a href="index.html#entrenadores" class="btn btn-primary">
        <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
        Volver al equipo
      </a>
    </div>
  `;
}
