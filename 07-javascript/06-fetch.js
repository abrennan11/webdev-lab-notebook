const url = "https://anapioficeandfire.com/api/books/";
const loader = document.getElementById("loading");
const container = document.getElementById("books");
const app = document.querySelector("#books");
loader.style.display = "center";
const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((books) => {
      loader.style.display = "none"; // hide loading symbol
      books.forEach((book) => {
        const div = document.createElement("div");
        div.innerHTML =
          "<h3>" +
          book.name +
          "</h3> <p> by " +
          book.authors[0] +
          " </p> <p>" +
          book.released.slice(0, 4) +
          "</p> <p>" +
          book.numberOfPages +
          " pages</p>";
        container.appendChild(div);
      });
    })
    .catch((error) => console.error("Error fetching book data:", error));
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
};

fetchData(url);
