// Input & Form aus dem DOM lesen, um sie in JS zu benutzen
const form = document.getElementById('customerForm');
const name = document.getElementById('nameInput');
const place = document.getElementById('placeInput');
const street = document.getElementById('streetInput');
const postalNumber = document.getElementById('postalInput');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const newCustomer = {
    name: name.value,
    address: `${street.value}, ${postalNumber.value} ${place.value}`
  };

  addNewCustomer(newCustomer);
  window.location.href = 'customers.html';
});
