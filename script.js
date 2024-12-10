// Example of adding interactivity
function showMessage() {
    document.getElementById("message").innerText = "Hello, welcome to my big website!";
}

// Form handling example
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
});