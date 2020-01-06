/**
 * Naming im LocalStorage
 *
 * Lieferscheine  -   deliveryNotesArray
 * Kunden         -   customersArray
 * Stammdaten     -   articlesArray
 *
 */

// Lieferscheine

function getDeliveryNotes() {
  return JSON.parse(localStorage.getItem('devliveryNotesArray'));
}

function addNewDeliveryNote(newDeliveryNote) {
  const deliveryNotes = getDeliveryNotes();
  const newDeliveryNotes = [...deliveryNotes, newDeliveryNote];
  localStorage.setItem('devliveryNotesArray', JSON.stringify(newDeliveryNotes));
}

function removeDeliveryNote(id) {
  const deliveryNotes = getDeliveryNotes();

  localStorage.setItem(
    'devliveryNotesArray',
    JSON.stringify(
      deliveryNotes.filter(deliveryNote => deliveryNote.deliveryNoteId !== id)
    )
  );
}

// Kunden

function getCustomers() {
  return JSON.parse(localStorage.getItem('customersArray'));
}

function addNewCustomer(newCustomer) {
  const customers = getCustomers();
  const newCustomers = [...customers, newCustomer];
  localStorage.setItem('customersArray', JSON.stringify(newCustomers));
}

function removeCustomer(id) {
  const customers = getCustomers();

  localStorage.setItem(
    'customerArray',
    JSON.stringify(customers.filter(customer => customer.customerId != e.id))
  );
}

// Stammdaten

function getArticles() {
  return JSON.parse(localStorage.getItem('articlesArray'));
}

function addNewArticle(newArticle) {
  const articles = getArticles();
  const newArticles = [...articles, newArticle];
  localStorage.setItem('articleArray', JSON.stringify(newArticles));
}

function removeArticle(id) {
  const articles = getArticles();

  localStorage.setItem(
    'articleArray',
    JSON.stringify(articles.filter(article => article.articleId != id))
  );
}
