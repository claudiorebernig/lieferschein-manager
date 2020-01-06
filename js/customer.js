window.addEventListener('load', start);

/* FÜR SETUP */

let customerArray = [
  {
    customerId: 1,
    name: 'Thomas',
    address: 'Hochstädtplatz 1, 1030 Wien'
  },
  {
    customerId: 2,
    name: 'Freddy',
    address: 'Märzstraße 30, 1050 Wien'
  },
  {
    customerId: 3,
    name: 'Hannes',
    address: 'Karlsplatz 2, 1010 Wien'
  }
];

function start() {
  /* FÜR SETUP */

  // Speichern der jetztigen höchstne ID, um beim nächsten Customer diese +1 zu speichern
  localStorage.setItem('customerIdCount', 3);

  // Speichern von unserer Kunden Liste
  // JSON.stringify macht aus der Kundenliste einen langen String, da localStorage nur Strings speichern kann
  localStorage.setItem('customerArray', JSON.stringify(customerArray));

  let customers = JSON.parse(localStorage.getItem('customerArray'));

  // Variable tablebody = dem DOM Objekt mit der ID tablebody
  const tablebody = $('#tablebody');

  for (let customer of customers) {
    let tablerow = `<tr id="row${customer.customerId}" >`;
    tablerow += `<th>${customer.customerId}</th>`;
    tablerow += `<td>${customer.name}</td>`;
    tablerow += `<td>${customer.address}</td>`;
    tablerow += `<td>`;
    tablerow += `<i class="fas fa-lg fa-info-circle" style="color: #007bff;"></i>`;
    tablerow += `<i id="${customer.customerId}" class="fas fa-lg fa-trash-alt" style="color: #dc3545" onclick="removeCustomer(this)"></i>`;
    tablerow += `<i class="fas fa-lg fa-print"></i>`;
    tablerow += ` </td>`;
    tablerow += `</tr>`;

    // Die neue Tabellenzeile hinzufügen
    $(tablerow).appendTo(tablebody);
  }
}

function removeCustomer(e) {
  let customers = JSON.parse(localStorage.getItem('customerArray'));

  localStorage.setItem(
    'customerArray',
    JSON.stringify(customers.filter(customer => customer.customerId != e.id))
  );

  $(`#row${e.id}`).remove();
}
