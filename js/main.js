const grid = document.getElementById('coachesGrid');

coaches.forEach(coach => {
  const link = document.createElement('a');
  link.className = 'coach-card';
  link.href = `coach.html?id=${coach.id}`;
  link.innerHTML = `
    <img src="${coach.img}" alt="${coach.name}">
    <h3>${coach.name}</h3>
    <p>${coach.role}</p>
  `;
  grid.appendChild(link);
});
