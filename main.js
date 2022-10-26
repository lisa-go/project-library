const libContainer = document.querySelector("#library-container");
const formContainer = document.querySelector(".form-container");
const formBg = document.querySelector(".form-background");

let myLibrary = [["naruto", "sensei", "500", "Unread"]];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

Book.prototype = Object.create(Book.prototype);

Book.prototype.addToLibrary = function() {
    myLibrary.push([this.title, this.author, this.pages, this.readStatus]);
}

    /* prompting user for new book info */
function newBook() {
    title = document.querySelector("#book_title").value;
    author = document.querySelector("#author_name").value;
    pages = document.querySelector("#book_pages").value;
    readStatus = document.querySelector('input[name="book_status"]:checked').value;

    const newBook = new Book(title, author, pages, readStatus);
    newBook.addToLibrary();

    addDisplay();
}


/* creating new divs for each library item */
function addDisplay() {
    const bookDisplay = document.createElement("bookDisplay");
    bookDisplay.classList.add("bookDisplay" + myLibrary.length);
    const readDisplay = document.createElement("readDisplay");
    readDisplay.classList.add("readDisplay" + myLibrary.length);
    const btnDisplay = document.createElement("btnDisplay");
    btnDisplay.classList.add("btnDisplay" + myLibrary.length);

    theBook = myLibrary.slice(-1);

    bookDisplay.innerHTML = 
    "Title: " + theBook[0][0] + "<br>" + 
    "Author: " + theBook[0][1] + "<br>" + 
    "Pages: " + theBook[0][2] + "<br>";
    
    readDisplay.textContent =
    "Read Status: " + theBook[0][3];
    
    btnDisplay.innerHTML =
    "<button onclick='changeRead(" +
    myLibrary.length 
    + ")'></button>" +
    "<button onclick='deleteBook(" +
    myLibrary.length 
    + ")'></button>";

    libContainer.appendChild(bookDisplay);
    bookDisplay.appendChild(readDisplay);
    bookDisplay.appendChild(btnDisplay);
    
    formContainer.style.display = "none";
    formBg.style.display = "none";
}

/* function to open form */
function openForm() {
    formContainer.style.display = "flex";
    formBg.style.display = "flex";
    console.log (myLibrary);
}

/* function to clear library */
function clearLibrary() {
    myLibrary = [];
    let element = document.getElementById("library-container");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}

/* function to delete selected card */
function deleteBook(num) {
    className = ".bookDisplay" + num;
    let ele = document.querySelector(className);
    ele.remove();
}

/* function to change read status */
function changeRead(num) {
    className = ".readDisplay" + num;
    let ele = document.querySelector(className);
    ele.textContent = "Read Status: Read";
}

addDisplay();