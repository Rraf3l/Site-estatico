let usuario = JSON.parse(localStorage.getItem("logado"));
document.getElementById("titulo").innerHTML = "Bem Vindo ao Grupo, "+usuario.login+"!";

function voltar(){
    window.location.href = "../index.html"
}