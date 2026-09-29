/* =========================================================
   COACH.JS
   Datos + lógica de la página individual del entrenador.
   Añadir un entrenador = añadir un objeto a COACHES.
   ========================================================= */

const COACHES = {
  1: {
    nombre: 'Ricardo Suárez',
    rol: 'Entrenador de Calistenia',
    ubicacion: 'La Habana',
    bio: 'Más de 8 años entrenando calistenia en las calles de La Habana. Especialista en progresiones de fuerza y técnica de barras. Fundador del grupo de entrenamiento del Parque Almendares.',
    especialidades: ['Dominadas', 'Muscle Up', 'Fuerza básica', 'Front Lever'],
    stats: {
      experiencia: '8 años',
      alumnos: '120+',
      eventos: '25'
    }
  },

  2: {
    nombre: 'Laura Martínez',
    rol: 'Entrenadora de Calistenia',
    ubicacion: 'Villa Clara',
    bio: 'Entrenadora certificada y competidora nacional. Enfocada en calistenia femenina, movilidad y acondicionamiento general. Lidera el grupo de entrenamiento del Parque Vidal.',
    especialidades: ['Movilidad', 'Calistenia femenina', 'Handstand', 'Core'],
    stats: {
      experiencia: '5 años',
      alumnos: '80+',
      eventos: '15'
    }
  },

  3: {
    nombre: 'Daniel Rojas',
    rol: 'Entrenador de Streetworkout',
    ubicacion: 'Santiago de Cuba',
    bio: 'Atleta y entrenador de streetworkout. Especializado en freestyle, trucos y dinámicos. Representante de la asociación en la región oriental.',
    especialidades: ['Freestyle', 'Dinámicos', 'Bar Muscle Up', 'Trucos'],
    stats: {
      experiencia: '6 años',
      alumnos: '95+',
      eventos: '20'
    }
  },

  4: {
    nombre: 'Yusimi Castillo',
    rol: 'Entrenadora de Calistenia',
    ubicacion: 'Camagüey',
    bio: 'Entrenadora enfocada en iniciación y prevención de lesiones. Trabaja con grupos mixtos de todos los niveles y organiza clínicas de técnica básica.',
    especialidades: ['Iniciación', 'Técnica básica', 'Prevención de lesiones', 'Flexibilidad'],
    stats: {
      experiencia: '4 años',
      alumnos: '60+',
      eventos: '12'
    }
  }
};

/* ---------- Lógica de render ---------- */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('coach-content');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const coach = id && COACHES[id];

  if (!coach) {
    container.innerHTML = renderError();
    return;
  }

  // Actualizamos el título de la pestaña
  document.title = `${coach.nombre} · Calistenia en Cuba`;

  container.innerHTML = renderCoach(coach);
});

/* ---------- Plantilla del coach ---------- */

function renderCoach(coach) {
  const inicial = coach.nombre.trim().charAt(0).toUpperCase();

  const especialidadesHTML = coach.especialidades
    .map(e => `<li class="tag">${e}</li>`)
    .join('');

  const mensaje = encodeURIComponent(
    `Hola ${coach.nombre.split(' ')[0]}, quiero información sobre tus entrenamientos.`
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
        Contactar a ${coach.nombre.split(' ')[0]}
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
