// create myLibrary constant to store added books

const myLibrary = [];

// this is my constructor formula
function Book(book, author, pages) {
    this.book = book;  
    this.author = author;
    this.pages = pages;
}


//function that adds book to library
function addBookToLibrary(book, author, pages) {
    const newBook = new Book(book, author, pages);
    myLibrary.push(newBook);
}



function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const bookTitleInput = document.querySelector('#bookTitle');
    const authorInput = document.querySelector('#author');
    const numPagesInput = document.querySelector('#numPages');

    const bookTitle = bookTitleInput.value;
    const author = authorInput.value;
    const numPages = numPagesInput.value;

    addBookToLibrary(bookTitle, author, numPages);

    // Clear the form fields after submitting
    bookTitleInput.value = '';
    authorInput.value = '';
    numPagesInput.value = '';

    // Log the updated library to the console
    console.log(myLibrary);
    
}

    // function that loops through array and display each book