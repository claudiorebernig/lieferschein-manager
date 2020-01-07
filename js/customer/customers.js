window.addEventListener('load', () => {
  const customers = getCustomers();

  // Variable tablebody = dem DOM Objekt mit der ID tablebody
  const tablebody = $('#tablebody');

  for (let customer of customers) {
    let tablerow = `<tr id="row${customer.customerId}" >`;
    tablerow += `<th>${customer.customerId}</th>`;
    tablerow += `<td>${customer.name}</td>`;
    tablerow += `<td>${customer.address}</td>`;
    tablerow += `<td>`;
    tablerow += `<i id="${customer.customerId}" class="fas fa-lg fa-trash-alt" style="color: #dc3545" onclick="removeCustomer(this)"></i>`;
    tablerow += `<i class="fas fa-lg fa-print" id="${customer.customerId}" onclick="printRecipe(this)"></i>`;
    tablerow += ` </td>`;
    tablerow += `</tr>`;

    // Die neue Tabellenzeile hinzufügen
    $(tablerow).appendTo(tablebody);
  }
});

function printRecipe(e) {
  // Default export is a4 paper, portrait, using milimeters for units
  var doc = new jsPDF();
  const customer = getCustomer(e.id)[0];
  const deliveryNotes = getAllOpenDeliveryNotesFromCustomer();

  doc.text('Rechnung', 10, 10);
  doc.text('Name des Kunden:', 10, 30);
  doc.text(customer.name, 100, 30);
  doc.text('Adresse des Kunden:', 10, 40);
  doc.text(customer.address, 100, 40);
  doc.text('Lieferscheine:', 10, 100);
  for (let [index, deliveryNote] of deliveryNotes.entries()) {
    doc.text('Nummer:', 10, 120 + index * 10);
    doc.text('Datum:', 50, 120 + index * 10);
    doc.text('Artikel:', 100, 120 + index * 10);
    doc.text('' + deliveryNote.deliveryNoteId, 10, 140 + index * 10);
    doc.text(deliveryNote.date, 50, 140 + index * 10);
    for (let [i, article] of deliveryNote.articles.entries()) {
      doc.text('' + article.quantity + 'x', 100, 140 + index * 10 + i * 10);
      doc.text(article.name, 110, 140 + index * 10 + i * 10);
    }
  }

  doc.save(`${customer.name + new Date().toString()}.pdf`);
}
