let toggleBtn= document.getElementsByClassName("toggle-button")[0];
let navbarLinks = document.getElementsByClassName("nav-links")[0];
let emailcopy = document.getElementsByClassName("emailcopy")

toggleBtn.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
    toggleBtn.classList.toggle('change')
})
function copyText(){

    navigator.clipboard.writeText("amaalanazi1@gmail.com")

    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}