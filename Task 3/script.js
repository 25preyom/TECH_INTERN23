// Scroll to Books section when "View Books" button is clicked
function scrollToBooks() {
    document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
}

// Function to check price of a book and display alert
function checkPrice(bookId, price) {
    alert(`The price of Book ${bookId} is $${price}.`);
}
