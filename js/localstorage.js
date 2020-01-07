/**
 *
 * Setup sollte der LocalStorage leer sein
 *
 */

const customerArray = [
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

const deliveryNoteArray = [
  {
    deliveryNoteId: 1,
    payed: true,
    date: '15.10.2019',
    customer: 'Thomas',
    customerId: 1,
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
    deliveryNoteId: 2,
    payed: true,
    date: '12.10.2019',
    customer: 'Hannes',
    customerId: 3,
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
    deliveryNoteId: 3,
    payed: false,
    date: '10.10.2019',
    customer: 'Thomas',
    customerId: 1,
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

const articleArray = [
  {
    articleId: 1,
    name: 'Bagger',
    price: 50,
    pricePerWeek: 200,
    pricePerMonth: 500
  },
  {
    articleId: 2,
    name: 'Bohrer',
    price: 30,
    pricePerWeek: 140,
    pricePerMonth: 620
  },
  {
    articleId: 3,
    name: 'Kran',
    price: 200,
    pricePerWeek: 1200,
    pricePerMonth: 2500
  }
];

window.addEventListener('load', () => {
  if (
    getDeliveryNotes() === null ||
    getCustomers() === null ||
    getArticles() === null
  ) {
    localStorage.setItem('deliveryNoteIdCount', 3);
    localStorage.setItem(
      'deliveryNotesArray',
      JSON.stringify(deliveryNoteArray)
    );
    localStorage.setItem('customerIdCount', 3);
    localStorage.setItem('customersArray', JSON.stringify(customerArray));
    localStorage.setItem('articleIdCount', 3);
    localStorage.setItem('articlesArray', JSON.stringify(articleArray));
  }
});

/**
 * Naming im LocalStorage
 *
 * Lieferscheine  -   deliveryNotesArray & deliveryNoteIdCount
 * Kunden         -   customersArray & customerIdCount
 * Stammdaten     -   articlesArray & articleIdCount
 *
 */

// Lieferscheine

function getDeliveryNotes() {
  return JSON.parse(localStorage.getItem('deliveryNotesArray'));
}

function getNextDeliveryNoteId() {
  const nextId = JSON.parse(localStorage.getItem('deliveryNoteIdCount')) + 1;
  localStorage.setItem('deliveryNoteIdCount', JSON.stringify(nextId));
  return nextId;
}

function addNewDeliveryNote(newDeliveryNote) {
  newDeliveryNote['deliveryNoteId'] = getNextDeliveryNoteId();
  const deliveryNotes = getDeliveryNotes();
  const newDeliveryNotes = [...deliveryNotes, newDeliveryNote];
  localStorage.setItem('deliveryNotesArray', JSON.stringify(newDeliveryNotes));
}

function removeDeliveryNote(e) {
  const deliveryNotes = getDeliveryNotes();

  localStorage.setItem(
    'deliveryNotesArray',
    JSON.stringify(
      deliveryNotes.filter(deliveryNote => deliveryNote.deliveryNoteId != e.id)
    )
  );

  $(`#row${e.id}`).remove();
}

// Kunden

function getCustomers() {
  return JSON.parse(localStorage.getItem('customersArray'));
}

function getNextCustomerId() {
  const nextId = JSON.parse(localStorage.getItem('customerIdCount')) + 1;
  localStorage.setItem('customerIdCount', JSON.stringify(nextId));
  return nextId;
}

function addNewCustomer(newCustomer) {
  newCustomer['customerId'] = getNextCustomerId();
  const customers = getCustomers();
  const newCustomers = [...customers, newCustomer];
  localStorage.setItem('customersArray', JSON.stringify(newCustomers));
}

function removeCustomer(e) {
  const customers = getCustomers();

  localStorage.setItem(
    'customersArray',
    JSON.stringify(customers.filter(customer => customer.customerId != e.id))
  );

  $(`#row${e.id}`).remove();
}

// Stammdaten

function getArticles() {
  return JSON.parse(localStorage.getItem('articlesArray'));
}

function getNextArticleId() {
  const nextId = JSON.parse(localStorage.getItem('articleIdCount')) + 1;
  localStorage.setItem('articleIdCount', JSON.stringify(nextId));
  return nextId;
}

function addNewArticle(newArticle) {
  newArticle['articleId'] = getNextArticleId();
  const articles = getArticles();
  const newArticles = [...articles, newArticle];
  localStorage.setItem('articlesArray', JSON.stringify(newArticles));
}

function removeArticle(e) {
  const articles = getArticles();

  localStorage.setItem(
    'articlesArray',
    JSON.stringify(articles.filter(article => article.articleId != e.id))
  );

  $(`#row${e.id}`).remove();
}

// Printing

function getCustomer(customerId) {
  return getCustomers().filter(customer => customer.customerId == customerId);
}

function getAllOpenDeliveryNotesFromCustomer(customerId) {
  return getDeliveryNotes().filter(
    deliveryNote =>
      deliveryNote.customerId == customerId && deliveryNote.payed == false
  );
}
