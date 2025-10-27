
document.querySelectorAll('.fa-heart').forEach((icon, index) => {
    if (index === 0) return;
    icon.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent click triggering the card link
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('fa-regular');
    });
  });


document.querySelectorAll(".featured-card").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = 'pages/details.html';
    console.log("Card clicked");
  });
});