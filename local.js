function store() { //stores items in the localStorage
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;

    window.localStorage.setItem("FName",fname);
    window.localStorage.setItem("LName",lname);
    window.localStorage.setItem("Email",email);
    window.localStorage.setItem("password",pwd);
}
function myFunction() {
        localStorage.clear();
        confirm("Are you sure!");
        alert("deleted successfully");
}
function display() {
    document.getElementById("fn").innerHTML = localStorage.getItem("FName");
    document.getElementById("ln").innerHTML = localStorage.getItem("LName");
    document.getElementById("ed").innerHTML = localStorage.getItem("Email");
    document.getElementById("pd").innerHTML = localStorage.getItem("password");
}