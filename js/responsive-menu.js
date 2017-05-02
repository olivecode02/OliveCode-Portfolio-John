function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-menu") {
        x.className += "responsive";
    } else {
        x.className = "main-menu";
    }
}