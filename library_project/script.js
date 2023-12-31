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
    displayBooks();

    // Clear the form fields after submitting
    bookTitleInput.value = '';
    authorInput.value = '';
    numPagesInput.value = '';
    
}

// create myLibrary constant to store added books

const myLibrary = [];

function displayBooks(){

    const tableBody = document.querySelector('table tbody');

    tableBody.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const row = tableBody.insertRow();

        const titleCell = row.insertCell(0);
        const authorCell = row.insertCell(1);
        const pagesCell = row.insertCell(2);
        const removeCell = row.insertCell(3);

        titleCell.textContent = book.book;
        authorCell.textContent = book.author;
        pagesCell.textContent = book.pages;

        const removeButton = document.createElement('button')
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeBook(index));
        removeCell.appendChild(removeButton);        
    })
}


// function to remove a book from the library
function removeBook(index) {
    myLibrary.splice(index, 1); // Remove the book from the array
    displayBooks(); // Update the table to reflect the changes
}

