window.addEventListener('load', () => {
  const articles = getArticles();

  // Variable tablebody = dem DOM Objekt mit der ID tablebody
  const tablebody = $('#tablebody');

  for (let article of articles) {
    let tablerow = `<tr id="row${article.articleId}" >`;
    tablerow += `<th>${article.articleId}</th>`;
    tablerow += `<td>${article.name}</td>`;
    tablerow += `<td>${article.price}</td>`;
    tablerow += `<td>${article.pricePerWeek}</td>`;
    tablerow += `<td>${article.pricePerMonth}</td>`;
    tablerow += `<td>`;
    tablerow += `<i id="${article.articleId}" class="fas fa-lg fa-trash-alt" style="color: #dc3545" onclick="removeArticle(this)"></i>`;
    tablerow += ` </td>`;
    tablerow += `</tr>`;

    // Die neue Tabellenzeile hinzufügen
    $(tablerow).appendTo(tablebody);
  }
});
