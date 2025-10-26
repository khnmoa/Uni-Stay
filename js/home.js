
document.querySelectorAll('.fa-heart').forEach(icon => {
    icon.addEventListener('click', () => {
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