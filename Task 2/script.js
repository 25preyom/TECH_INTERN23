

javascript
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Code to handle form submission, e.g., send data to a server for processing
    // You can use JavaScript to implement the desired functionality for handling feedback form submission
    alert("Thank you for your feedback!");
    // Reset form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("feedback").value = "";
});

