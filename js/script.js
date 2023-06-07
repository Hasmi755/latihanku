function submitForm(event) {
    event.preventDefault(); 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    document.getElementById("result-name").textContent = name;
    document.getElementById("result-email").textContent = email;
    document.getElementById("result-message").textContent = message;

    document.getElementById("result").style.display = "block";
}