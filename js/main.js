window.addEventListener('load', start);

let recipeArray = [
  {
    recipeId: 1,
    payed: true,
    date: '15.10.2019',
    customer: 'Thomas',
    articles: [
      {
        name: 'Bagger',
        quantity: 1
      },
      {
        name: 'Schotter',
        quantity: 1
      }
    ]
  },
  {
    recipeId: 2,
    payed: true,
    date: '12.10.2019',
    customer: 'Hannes',
    articles: [
      {
        name: 'Schotter',
        quantity: 1
      },
      {
        name: 'LKW',
        quantity: 2
      }
    ]
  },
  {
    recipeId: 3,
    payed: false,
    date: '10.10.2019',
    customer: 'Thomas',
    articles: [
      {
        name: 'LKW',
        quantity: 1
      },
      {
        name: 'Bohrmaschine',
        quantity: 1
      }
    ]
  }
];

function start() {
  /* SETUP */

  // localStorage.setItem('recipeIdCount', 3);
  // localStorage.setItem('recipeArray', JSON.stringify(recipeArray));

  const recipes = JSON.parse(localStorage.getItem('recipeArray'));
  const tablebody = $('#tablebody');

  for (let recipe of recipes) {
    let tablerow = `<tr>`;
    tablerow += `<th scope="row">${recipe.recipeId}</th>`;
    tablerow += `<td>${
      recipe.payed
        ? '<i class="fas fa-lg fa-check">'
        : '<i class="fas fa-lg fa-times">'
    }</i></td>`;
    tablerow += `<td>${recipe.customer}</td>`;
    tablerow += `<td>${recipe.date}</td>`;
    tablerow += `<td>`;

    for (article of recipe.articles) {
      tablerow += `  ${article.quantity}x ${article.name}  `;
    }
    tablerow += `</td>`;
    tablerow += `<td>`;
    tablerow += `<i class="fas fa-lg fa-info-circle" style="color: #007bff;"></i>`;
    tablerow += `<i class="fas fa-lg fa-trash-alt" style="color: #dc3545"></i>`;
    tablerow += ` </td>`;
    tablerow += ` </tr>`;

    $(tablerow).appendTo(tablebody);
  }
}

// Filter von Bootstrap bei Eingabe in das Suchfeld
$(document).ready(function() {
  $('#customerInput').on('keyup', function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $('#tablebody tr').filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});
