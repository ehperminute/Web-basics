submitElement = document.getElementById("submit");
resultElement = document.querySelector(".result");
checkboxes = document.getElementsByName("order")
form = document.getElementById("orderform");
submitElement.addEventListener("click", 
    function() {
        let total = 0;
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                console.log(checkbox.value)
                total += parseInt(checkbox.value);
            }
        }
        console.log(total)
        resultElement.textContent = `${total}`;
    });
