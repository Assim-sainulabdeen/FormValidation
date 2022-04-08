let regex = /^[a-zA-Z]*$/;
let emailRegexp=/^[a-z0-9àâçéèêëîïôûùüÿñæœ .-]*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let mobileRegexp = /^\d{10}$/;
let passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
let form = document.getElementById("form");

let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let country = document.querySelector("#country");
let gender = document.querySelector("#male ");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let dob = document.querySelector("#dateofbirth");
let address = document.querySelector("#address");
let photo = document.querySelector("#file");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    validateName();
    validateLastName();
    validateCountry();
    validateGender();
    validateEmail();
    validateMobileNumber();
    validateDob();
    validateAddress();
    validateFile();
    validatePassword();
    confirmPass();
    
});

function validateName(){

    let a = fname.parentElement.querySelector(".error");
    let failureIcon= fname.parentElement.querySelector(".failure-icon");

    if (fname.value.trim() === ""){
        return (a.innerText= "*Name cannot be empty.", failureIcon.classList.add("common"));    
    }else if(fname.value.trim().length < 3){
        return(a.innerText = "Name must contain atleast 3 characters", failureIcon.classList.add("common"));
    }else if (fname.value.trim().length > 50){
        return (a.innerText = "Name can be a maximum of 50 characters", failureIcon.classList.add("common"));
    }else if (!fname.value.match(regex)) {
        return (a.innerText = "Name can only contain letters", failureIcon.classList.add("common"));
    }else{
        (a.innerText = "", failureIcon.classList.add("failure"));
    }
}

function validateLastName(){
    let b= lname.parentElement.querySelector(".error");
    let failureIcon= lname.parentElement.querySelector(".failure-icon");

    if (lname.value.trim() === ""){
        return (b.innerText= "Last name cannot be empty.", failureIcon.classList.add("common"));    
    }else if (lname.value.trim().length > 50){
        return (b.innerText = "Last Name can be a maximum of 50 characters", failureIcon.classList.add("common"));
    }else if (!lname.value.match(regex)) {
        return (b.innerText = "Last Name can only contain letters", failureIcon.classList.add("common"));
    }else{
        (b.innerText = "", failureIcon.classList.add("failure"));
    }
}

function validateCountry(){
    let c = country.parentElement.querySelector(".error");
    let failureIcon= country.parentElement.querySelector(".failure-icon");

    if(country.value ==="Select your Country"){
       return (c.innerText="Please Select your country", failureIcon.classList.add("common"));
    }else{
        return (c.innerText="", failureIcon.classList.add("failure"));
    }
}

function validateGender(){

    let d= gender.parentElement.querySelector(".error");
    let failureIcon= gender.parentElement.querySelector(".failure-icon");
    
    if (document.querySelector("#male").checked == false && document.querySelector("#female").checked == false && document.querySelector("#others").checked == false){
        return (d.innerText="Please select your gender", failureIcon.classList.add("failure"));
    }else{
        return d.innerText="";
    }
}


function validateEmail(){

    let e = email.parentElement.querySelector(".error");
    let failureIcon= email.parentElement.querySelector(".failure-icon");

    if (email.value.trim()===""){
        return (e.innerText= "Email field cannot be empty", failureIcon.classList. add("common"));
    }else if (!email.value.trim().match(emailRegexp)){
        return (e.innerText= "Enter a valid email", failureIcon.classList. add("common"))
    }else{
        return (e.innerText= "", failureIcon.classList.add("failure"))
    }
}


function validateMobileNumber(){
    let f = mobile.parentElement.querySelector(".error");
    let failureIcon = mobile.parentElement.querySelector(".failure-icon");

    if(mobile.value.trim()===""){
        return (f.innerText = "Please fill the empty field", failureIcon.classList.add("common"));
    }else if(mobile.value.trim().length != 10){
        return (f.innerText = "Please complete the phone number", failureIcon.classList.add("common"));
    }else if (!mobile.value.trim().match(mobileRegexp)){
        return (f.innerText= "Please use numbers only", failureIcon.classList.add("common"));
    }else{
        return (f.innerText ="", failureIcon.classList.add("failure") )
    }
}


function validateDob(){
    let g = dob.parentElement.querySelector(".error");
    let failureIcon = dob.parentElement.querySelector(".failure-icon");

    if(dob.value.trim() == ""){
        return (g.innerText = "Please fill the empty field", failureIcon.classList.add("common"));
    }else{
        return (g.innerText = "", failureIcon.classList.add("failure"));
    }
}

function validateAddress(){
    let h = address.parentElement.querySelector(".error");
    let failureIcon = address.parentElement.querySelector(".failure-icon");

    if(address.value.trim() == ""){
        return (h.innerText = "Please fill the empty field", failureIcon.classList.add("failure"));
    }else if (address.value.trim(). length < 15 || address.value.trim().length > 200) {
        return (h.innerText = "Address cannot be less than 15 characters and can have a maximum of 200 characters", failureIcon.classList.add("failure"));
    }else{
        return (h.innerText = "", failureIcon.classList.add("failure"));
    }
}

function validateFile(){

    let k = photo.parentElement.querySelector(".error");
    let failureIcon = photo.parentElement.querySelector(".failure-icon");

    if (photo.value === ""){
        return ((k.innerText = "Select a file", failureIcon.classList.add("common")));
    }else{
        let fileName=photo.value.trim();
        let fileExtension=("jpeg","jpg");
        let imageExtension=fileName.lastIndexOf(".");
        let inputFile = fileName.substring(imageExtension + 1);
        let checkFile = fileExtension.includes(inputFile);

        if(! checkFile){
            return (k .innerText="Select a valid file", failureIcon.classList.add("common"));
        }else{
            return (k .innerText="",  failureIcon.classList.add("failure"));
        }
    }

}

function validatePassword(){
    let i = password.parentElement.querySelector(".error");
    let failureIcon = password.parentElement.querySelector(".failure-icon");

    if (password.value.trim() == ""){
        return ((i.innerText = "Enter a Password", failureIcon.classList.add("common")));
    }else if(password.value.match(passwordRegexp)){
        return ((i.innerText = "", failureIcon.classList.add("failure")));
    }else{
        return ((i.innerText = "Enter a strong password", failureIcon.classList.add("common")))
    }
}

function confirmPass(){
    let j = confirmPassword.parentElement.querySelector(".error");
    let failureIcon = confirmPassword.parentElement.querySelector(".failure-icon");

    if ( confirmPassword.value == ""){
        return (j.innerText = "Confirm your password", failureIcon.classList.add("common"));
       
    }else if (confirmPassword.value === password.value){
        return (j.innerText="", failureIcon.classList.add("failure"));
    }
    else{
        return (j.innerText="Passwords do not match", failureIcon.classList.add("common"));
    }
}


