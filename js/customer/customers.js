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
    tablerow += `<i class="fas fa-lg fa-print"></i>`;
    tablerow += ` </td>`;
    tablerow += `</tr>`;

    // Die neue Tabellenzeile hinzufügen
    $(tablerow).appendTo(tablebody);
  }
});
