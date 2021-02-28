function validateForm() {
    var u = document.forms["myForm"]["userId"].value;
    var p = document.forms["myForm"]["password"].value;
    if (u == "" || p == "") {
        alert("User ID and Password must not be EMPTY");
        return false;
    }
    else if (u == "admin123" || p == "adminpassword") {
        alert("Login Successful");
        return false;
    }

    else {
        alert("Please enter correct credentials");
        return false;
    }

}

function validateUserId() {
    var u = document.getElementById("userId").value;
    var pattern = /^[a-zA-Z0-9\-]+$/;

    /*
    //alert(u);    
    //var pattern = "[a-zA-Z0-9]+";
    if(u == ""){
        console.log("please enter userid")
        document.getElementById("user").textContent = "Please enter User Id";
        document.getElementById("user").style.display = "block";
    }
    */
   
    if(u.match(pattern)){
        //console.log("matched")
        document.getElementById("user").style.display = "none";
    }
    else{
        document.getElementById("user").style.display = "block";
        //console.log("not matched")
    }
}

function validatePassword() {
    var p = document.getElementById("password").value;
    
    /*
    //alert(p);  
    if(p == ""){
        console.log("please enter password")
        document.getElementById("pass").textContent = "Please enter password";
        document.getElementById("pass").style.display = "block";
    }
    */ 

    if(p.length < 8){
        console.log("password less than 8")
        document.getElementById("pass").style.display = "block";
    }
    else{
        document.getElementById("pass").style.display = "none";
        console.log("password is ok")
    }

}