const container = document.getElementById('coachContainer');

// Leer el id de la URL: coach.html?id=1
const params = new URLSearchParams(window.location.search);
const coachId = parseInt(params.get('id'), 10);

// Buscar el entrenador
const coach = coaches.find(c => c.id === coachId);

if (!coach) {
  container.innerHTML = `
    <p class="error">Entrenador no encontrado. 
      <a href="index.html">Volver al listado</a>
    </p>
  `;
} else {
  const waLink = `https://wa.me/${coach.whatsapp}?text=${encodeURIComponent(
    `Hola ${coach.name}, quiero información sobre tus entrenamientos.`
  )}`;

  container.innerHTML = `
    <div class="coach-page">
      <img src="${coach.img}" alt="${coach.name}">
      <h1>${coach.name}</h1>
      <p class="coach-role">${coach.role}</p>
      <p class="coach-bio">${coach.bio}</p>

      <div class="coach-info">
        <p><strong>Especialidad:</strong> ${coach.specialty}</p>
        <p><strong>Experiencia:</strong> ${coach.experience}</p>
      </div>

      <a class="btn-whatsapp" href="${waLink}" target="_blank" rel="noopener noreferrer">
        Contactar por WhatsApp
      </a>
      <br>
      <a class="btn-back" href="index.html">← Volver al listado</a>
    </div>
  `;
}
