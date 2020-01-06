// Objecte aus dem DOM in Variablen speichern
const form = document.getElementById('recipeForm');
const dateInput = document.getElementById('dateInput');

let articleCount = 0;

window.addEventListener('load', () => {
  const customers = getCustomers();
  const articles = getArticles();

  for (const customer of customers) {
    $('#customerInput').append(`<option>${customer.name}</option>`);
  }

  articleCount = articles.length;

  for (const [index, article] of articles.entries()) {
    let tablerow = '<tr>';
    tablerow += `<td>${article.name}</td>`;
    tablerow += `<td><input class="text-center" id="articleInput${index}" type="number" placeholder="0"/></td>`;
    tablerow += '</tr>';
    $('#articlesTableBody').append(tablerow);
  }
});

form.addEventListener('submit', function(e) {
  // Form lädt nicht automatisch neu
  e.preventDefault();

  let newDeliveryNote = {
    payed: false,
    date: dateInput.value,
    customer: customerInput.value,
    articles: []
  };

  for (let i = 0; i < articleCount; i++) {
    if ($(`#articleInput${i}`).val() > 0) {
      newDeliveryNote.articles.push({
        name: 'Bagger',
        quantity: $(`#articleInput${i}`).val()
      });
    }
  }
  addNewDeliveryNote(newDeliveryNote);
  window.location.href = 'deliveryNotes.html';
});
