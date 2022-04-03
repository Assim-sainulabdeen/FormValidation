let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let fname = id("fname"),
    email = id("email"),
    password = id("password"),
    form= id("form"),

    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    engine(fname, 0, "Name  cannot be blank");
    engine(lname, 1, "Last name cannot be blank")
    engine(email, 2, "Email cannot be blank");
    engine(mobile, 3, "Mobile number cannot be blank")
    engine(password, 11, "Password cannot be blank");
});

let engine = (id, serial, message) => {

    if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";
      
    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
    } else {
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      
      // icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
}