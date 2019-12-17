function getDeliveryNotes() {
  return JSON.parse(localStorage.getItem('devliveryNotesArray'));
}

function addNewDeliveryNote(newDeliveryNote) {
  let deliveryNotes = getDeliveryNotes();
  let newDeliveryNotes = [...deliveryNotes, newDeliveryNote];
  localStorage.setItem('devliveryNotesArray', JSON.stringify(newDeliveryNotes));
}

function getCustomers() {
  return JSON.parse(localStorage.getItem('customersArray'));
}

function addNewCustomer(newCustomer) {
  let customers = getCustomers();
  let newCustomers = [...customers, newCustomer];
  localStorage.setItem('customersArray', JSON.stringify(newCustomers));
}

function getArticles() {
  return JSON.parse(localStorage.getItem('articlesArray'));
}

function addNewArticle(newArticle) {
  let articles = getArticles();
  let newArticles = [...articles, newArticle];
  localStorage.setItem('articleArray', JSON.stringify(newArticles));
}
