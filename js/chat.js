let element1=document.querySelector("#se_connecter");
element1.addEventListener('submit', login);
let element2=document.querySelector("#deconnecter");
element2.addEventListener('click', logout);

function login(event){
    event.preventDefault();
    changement("#chat");
    changement("#authentication");
}

function logout(){
    let res = confirm('Are you sure ?');
    if (res == true) {
        changement("#authentication");
        changement("#chat");
    }
}