const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("NovoLogin")
const campoNovaSenha = document.getElementById("NovaSenha")
const campoRepSenha = document.getElementById("RepSenha")


function cadastro(){
    if(campoNovaSenha.value == campoRepSenha.value){
        let usuario = {
            login : campoNovoLogin.value,
            senha : campoNovaSenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if(bancoDeDados == null){
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
    }
    else{
    alert("Houve um erro em Registrar o usuário!");
    }
}

function login(){
    let mensagem = "Usuários ou senha incorreta!";
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
            window.location.href = "./home/home.html"
                break;
            }
        }  
    } 
    alert(mensagem);   
 
}