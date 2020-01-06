// Objecte aus dem DOM in Variablen speichern
const form = document.getElementById('recipeForm');
const dateInput = document.getElementById('dateInput');
const articleInput1 = document.getElementById('articleInput1');
const articleInput2 = document.getElementById('articleInput2');
const articleInput3 = document.getElementById('articleInput3');
const articleInput4 = document.getElementById('articleInput4');

// Für den externen DateInput
$('#dateInput').datepicker({
  uiLibrary: 'bootstrap4'
});

form.addEventListener('submit', function(e) {
  // Form lädt nicht automatisch neu
  e.preventDefault();

  // Hole und Speichere die nächste ID aus dem Localstorage
  const newId = JSON.parse(localStorage.getItem('recipeIdCount')) + 1;
  localStorage.setItem('recipeIdCount', newId);

  let newRecipe = {
    recipeId: newId,
    payed: false,
    date: dateInput.value,
    customer: customerInput.value,
    articles: []
  };

  console.log(articleInput1.value);

  if (articleInput1.value > 0) {
    newRecipe.articles.push({
      name: 'Bagger',
      quantity: articleInput1.value
    });
  }
  if (articleInput2.value > 0) {
    newRecipe.articles.push({
      name: 'LKW',
      quantity: articleInput2.value
    });
  }
  if (articleInput3.value > 0) {
    newRecipe.articles.push({
      name: 'Schotter',
      quantity: articleInput3.value
    });
  }
  if (articleInput4.value > 0) {
    newRecipe.articles.push({
      name: 'Bohrmaschiene',
      quantity: articleInput4.value
    });
  }

  let recipes = JSON.parse(localStorage.getItem('recipeArray'));
  let newRecipes = [...recipes, newRecipe];
  localStorage.setItem('recipeArray', JSON.stringify(newRecipes));
  window.location.href = 'index.html';
});
