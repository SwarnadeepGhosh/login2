
function validateLogin() {
    var u = document.forms["myForm"]["userId"].value;
    var p = document.forms["myForm"]["password"].value;
    if (u == "" || p == "") {
        alert("User ID or Password must not be EMPTY");
        return false;
    }
    else if (u == "admin123" || p == "adminpassword") {
        alert("Login SUCCESSFUL");
        return false;
    }

    else {
        alert("Please enter CORRECT credentials");
        return false;
    }
}

function validateUserId() {
    var u = document.getElementById("userId").value;
    var pattern = /^[a-zA-Z0-9\-]+$/;

    //alert(u);    
    //var pattern = "[a-zA-Z0-9]+";
    if (u == "") {
        //console.log("please enter userid")
        document.getElementById("value1").style.display = "block";
        document.getElementById("user").style.display = "none";
    }

    else if (u.match(pattern)) {
        //console.log("matched")
        document.getElementById("user").style.display = "none";
        document.getElementById("value1").style.display = "none";
    }
    else {
        document.getElementById("user").style.display = "block";
        document.getElementById("value1").style.display = "none";
        //console.log("not matched")
    }
}

function validatePassword() {
    var p = document.getElementById("password").value;

    //alert(p);  
    if (p == "") {
        //console.log("please enter password")
        document.getElementById("value2").style.display = "block";
        document.getElementById("pass").style.display = "none";
    }
    else if (p.length < 8) {
        //console.log("password less than 8")
        document.getElementById("pass").style.display = "block";
        document.getElementById("value2").style.display = "none";
    }
    else {
        document.getElementById("pass").style.display = "none";
        document.getElementById("value2").style.display = "none";
        //console.log("password is ok")
    }

}

function confirmPassword() {
    var p1 = document.getElementById("password").value;
    var p2 = document.getElementById("confirm").value;
    if (p1 != p2) {
        document.getElementById("confirmPassword").style.display = "block";
    }
    else {
        document.getElementById("confirmPassword").style.display = "none";
    }
}

var users = [];

function result(event) {
    event.preventDefault();

    var user = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        company: document.getElementById('company').value,
        gender: '',
        phone: document.getElementById('phone').value,
        userId: document.getElementById('userId').value,
        password: document.getElementById('password').value
    }
    //gender: document.getElementsByClassName("form-check-label").value,
    
    if(document.getElementById('male').checked){
        user.gender = document.getElementById('male').value;
    }
    else if(document.getElementById('female').checked){
        user.gender = document.getElementById('female').value;
    }
    else if(document.getElementById('notToSay').checked){
        user.gender = document.getElementById('notToSay').value;
    }


    users.push(user);
    document.getElementById("input_values").innerHTML = JSON.stringify(users);
    console.log(users)
    //alert(users);

}
