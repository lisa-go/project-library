const libContainer = document.querySelector("#library-container");


let myLibrary = [["naruto", "sensei"]];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype = Object.create(Book.prototype);

Book.prototype.addToLibrary = function() {
    
    myLibrary.push([this.title, this.author]);
}

    /* prompting user for new book info */
function newBook() {
    
    title = prompt("Book Title?");
    author = prompt("Author?");

    const newBook = new Book(title, author);
    newBook.addToLibrary();

    
    addDisplay();
    console.log (myLibrary);
}


/* creating new divs for each library item */
function addDisplay() {
    const bookDisplay = document.createElement("div");
    bookDisplay.classList.add("bookDisplay");
    theBook = myLibrary.slice(-1);
    bookDisplay.innerHTML = theBook[0][0] + "<br>" + theBook[0][1] + "<br>";
    libContainer.appendChild(bookDisplay);
}


addDisplay();