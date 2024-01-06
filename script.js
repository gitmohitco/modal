const modal = document.getElementById("myModal");
const signup = document.getElementById("signup");
const span = document.getElementsByClassName("close");
const changeee = document.getElementById("warp-body");
const theme = document.getElementById("theme");
function popp(){
    modal.style.display = "block";
}
span[0].onclick = function() {
    modal.style.display = "none";
}
function changee(){
    document.body.classList.toggle("dark-mode");
}