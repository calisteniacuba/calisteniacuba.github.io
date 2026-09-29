/* =========================================================
   coach.js · Rellena coach.html con los datos del entrenador
   ========================================================= */

const container = document.getElementById("coachContainer");

// Leer el id desde la URL: coach.html?id=1
const params = new URLSearchParams(window.location.search);
const coachId = parseInt(params.get("id"), 10);

// Buscar al entrenador
const coach = coaches.find(c => c.id === coachId);

if (!coach) {
    container.innerHTML = `
        <p class="coach-error">
            Entrenador no encontrado.<br><br>
            <a href="index.html#equipo">← Volver al equipo</a>
        </p>
    `;
} else {
    const waLink = `https://wa.me/${coach.whatsapp}?text=${encodeURIComponent(
        `Hola ${coach.name}, quiero información sobre tus entrenamientos de ${coach.role}.`
    )}`;

    container.innerHTML = `
        <img class="coach-photo" src="${coach.img}" alt="${coach.name}">
        <h1>${coach.name}</h1>
        <p class="coach-role">${coach.role}</p>
        <p class="coach-bio">${coach.bio}</p>

        <div class="coach-info">
            <p><i class="fas fa-dumbbell"></i><strong>Especialidad:</strong> ${coach.specialty}</p>
            <p><i class="fas fa-medal"></i><strong>Experiencia:</strong> ${coach.experience}</p>
            <p><i class="fas fa-map-marker-alt"></i><strong>Ubicación:</strong> ${coach.location}</p>
        </div>

        <a class="btn-coach-whatsapp" href="${waLink}" target="_blank" rel="noopener">
            <i class="fab fa-whatsapp"></i> Contactar por WhatsApp
        </a>

        <br>
        <a class="btn-coach-back" href="index.html#equipo">← Volver al equipo</a>
    `;
}
