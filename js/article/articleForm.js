// Input & Form aus dem DOM lesen, um sie in JS zu benutzen
const form = document.getElementById('articleForm');
const name = document.getElementById('nameInput');
const price = document.getElementById('priceInput');
const pricePerWeek = document.getElementById('pricePerWeekInput');
const pricePerMonth = document.getElementById('pricePerMonthInput');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  console.log('Here');

  const newArticle = {
    name: name.value,
    price: price.value,
    pricePerWeek: pricePerWeek.value,
    pricePerMonth: pricePerMonth.value
  };

  addNewArticle(newArticle);
  window.location.href = 'articles.html';
});
