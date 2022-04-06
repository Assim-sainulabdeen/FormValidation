let regex = /^[a-zA-Z ]{2,50}$/;
let form = document.getElementById("form");
let failureIcon= document.querySelector(".failure-icon");

let fname = document.querySelector("#fname");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    validateName();
});
function validateName(){

    if (fname.value.trim() === "" ){
        let a = document.querySelector(".error");
        return [a.innerHTML= "Name cannot be empty", failureIcon.classList.add("common")];
        
    }
}



