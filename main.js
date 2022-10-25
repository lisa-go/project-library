
let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype = Object.create(Book.prototype);

Book.prototype.addToLibrary = function() {
    
    myLibrary.push([this.title, this.author]);
}

function newBook() {
    title = prompt("Book Title?");
    author = prompt("Author?");

    const newBook = new Book(title, author);
    newBook.addToLibrary();

    console.log (myLibrary);
}



