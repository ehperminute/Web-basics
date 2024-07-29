submitElement = document.getElementById("submit");
resultElement = document.querySelector(".result");
username = document.getElementById("name");
lastname = document.getElementById("lastname");
submitElement.addEventListener("click", 
    function() {
        if (username.validity.valid && lastname.validity.valid){
            resultElement.innerHTML = `Здравствуйте, ${username.validity.valid} ${lastname.value}`;
            resultElement.style.textTransform = "capitalize";
        }
    });
