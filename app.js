const PHOTO_COUNT = 4;

const grid = document.getElementById('photo-grid');

for (let i = 1; i <= PHOTO_COUNT; i++) {
  const figure = document.createElement('figure');
  figure.className = 'photo';

  const number = document.createElement('span');
  number.className = 'photo-number';
  number.textContent = String(i);

  const img = document.createElement('img');
  img.src = `photos/${i}.jpg`;
  img.alt = `Photo ${i}`;
  img.loading = 'lazy';

  figure.appendChild(number);
  figure.appendChild(img);
  grid.appendChild(figure);
}
