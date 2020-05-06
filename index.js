function fetchBooks() {
  return fetch('"https://www.anapioficeandfire.com/api/characters/823"')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
  }
  


function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// function renderBookFive(json) {
//   const main = document.querySelector('main')

// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
