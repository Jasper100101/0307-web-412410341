const cardLink = document.getElementById('cardLink');
  const blogLink = document.getElementById('blogLink');
  const cardSection = document.getElementById('cardSection');
  const blogSection = document.getElementById('blogSection');

  cardLink.addEventListener('click', (e) => {
    e.preventDefault();
    cardSection.style.display = 'grid';
    blogSection.style.display = 'none';
  });

  blogLink.addEventListener('click', (e) => {
    e.preventDefault();
    cardSection.style.display = 'none';
    blogSection.style.display = 'grid';
  });