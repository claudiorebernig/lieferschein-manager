// Input & Form aus dem DOM lesen, um sie in JS zu benutzen
const form = document.getElementById('customerForm');
const name = document.getElementById('nameInput');
const place = document.getElementById('placeInput');
const street = document.getElementById('streetInput');
const postalNumber = document.getElementById('postalInput');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const newCustomerId = JSON.parse(localStorage.getItem('customerIdCount')) + 1;
  localStorage.setItem('customerIdCount', newCustomerId);

  const newCustomer = {
    customerId: newCustomerId,
    name: name.value,
    address: `${street.value}, ${postalNumber.value} ${place.value}`
  };

  const customers = JSON.parse(localStorage.getItem('customerArray'));
  const newCustomers = [...customers, newCustomer];
  localStorage.setItem('customerArray', JSON.stringify(newCustomers));
  window.location.href = 'customers.html';
});
