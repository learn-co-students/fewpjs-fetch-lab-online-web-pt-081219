const GOT_API = 'https://anapioficeandfire.com/api/books'
let books = [];

fetch(GOT_API)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    books = data;
  })


function fetchBooks() {
  return fetch(GOT_API)
    .then((response) => {
      return response.json();
    })
    .then(renderBooks(books))
};

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks()
})