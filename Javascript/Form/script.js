// Username Validation empty

const formValidation = document.getElementById("myform");
formValidation.addEventListener("submit", function (event) {
    event.preventDefault() //Prevent form from auto submitting

    let userName = document.querySelector(".userName").value
    // console.log(userName)

    // let loginBtn = document.querySelector(".Login-btn").value

    // console.log(loginBtn)


    if (userName == "") {

        document.getElementById('userError').innerHTML = "Username can't be empty";

    } else if (userName.length < 3) {

        document.getElementById('userError').innerHTML = "Please enter at least 2 characters";

    } else {

        document.getElementById('userError').innerHTML = "";

    }

    // password validation



    let password = document.querySelector("#passWord").value


    if (password == "") {

        document.getElementById('passwdError').innerHTML = "Password can't be empty";
    }

    else if (password.length <= 8) {

        document.getElementById('passwdError').innerHTML = "Please enter at least 8 characters"
        // console.log("middle");
    }

    else {

        document.getElementById('passwdError').innerHTML = ""
        // console.log("good");

    }



})


// Register Page


const formValidation2 = document.getElementById("myform2");

formValidation2.addEventListener("submit", function (event) {

    event.preventDefault() //Prevent form from auto submitting




    //Email validation

    let EmailValidation = document.querySelector('#emailValidation').value;

    // console.log(EmailValidation)

    // console.log(EmailValidation);

    if (EmailValidation.length >= 8 || EmailValidation === (EmailValidation+ "@")) {
        // console.log(EmailValidation+"@");
        document.getElementById("EmailError").innerHTML = "";

    } else {
        // console.log("enter correct");
        document.getElementById("EmailError").innerHTML = "Enter Valid E-mail";
    }




    let passwdRegister = document.querySelector("#register-passwd").value;
    // console.log(passwdRegister)



    // password format

    if (passwdRegister.length <= 8) {

        document.querySelector("#passwdValidation").innerHTML = "Enter Valid Password"
    } else {

        document.querySelector("#passwdValidation").innerHTML = ""
    }



    let cmpasswdRegister = document.querySelector("#register-cm-passwd").value;

    // confirm password

    if (passwdRegister !== cmpasswdRegister) {

        document.getElementById("ConfirmPasswd").innerHTML = "Enter the same Password"

    } else {

        document.getElementById("ConfirmPasswd").innerHTML = ""
    }


    //Check box

    let CheckBox = document.querySelector("#check");
    console.log(CheckBox)


})
