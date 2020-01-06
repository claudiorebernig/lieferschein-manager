window.addEventListener('load', () => {
  const deliveryNotes = getDeliveryNotes();
  console.log(deliveryNotes);
  const tablebody = $('#tablebody');

  for (let deliveryNote of deliveryNotes) {
    let tablerow = `<tr>`;
    tablerow += `<th scope="row">${deliveryNote.deliveryNoteId}</th>`;
    tablerow += `<td>${
      deliveryNote.payed
        ? '<i class="fas fa-lg fa-check">'
        : '<i class="fas fa-lg fa-times">'
    }</i></td>`;
    tablerow += `<td>${deliveryNote.customer}</td>`;
    tablerow += `<td>${deliveryNote.date}</td>`;
    tablerow += `<td>`;

    for (article of deliveryNote.articles) {
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
});

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
