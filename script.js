document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validation
    if(name == "" || email == "" || password == ""){
        alert("Please fill all fields");
        return;
    }

    // User object
    let user = {
        name: name,
        email: email,
        password: password
    };

    // Get old users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new user
    users.push(user);

    // Save again
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function(){

        if(xhr.status == 201 || xhr.status == 200){

            document.getElementById("message").innerHTML =
            "Registration Successful";

            // Clear form
            document.getElementById("registerForm").reset();

            // Redirect after 2 sec
            setTimeout(() => {
                window.location.href = "users.html";
            }, 2000);
        }
    };

    xhr.send(JSON.stringify(user));

});