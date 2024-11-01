// function myFunction(){
//     document.getElementById("demo").innerHTML = "Hello Putha";
    
// }

// function myFunc2(){
//     document.getElementById("demo").innerHTML = "Same as before";
// }

// function myFunc3(){
//     document.getElementById("demo").innerHTML = "A Paragraph!";
// }

document.addEventListener("DOMContentLoaded", function() {
    const themeCheckbox = document.querySelector(".theme-checkbox");

    themeCheckbox.addEventListener("change", function() {
        document.body.classList.toggle("dark-mode", themeCheckbox.checked);
    });
});



function mySubmit(){
    window.alert("Submitted Successfully!");
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
}