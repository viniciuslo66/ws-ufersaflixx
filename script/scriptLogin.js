
// VALIDAÇÃO DA PÁGINA LOGIN

function login(){
    let email = document.getElementById('email-login').value;
    let senha = document.getElementById('senha-login').value;
    let variavelControle = true;

    if( email == "" ){
        alert('Digite seu e-mail.');
        variavelControle = false;
    }
    if( senha == "" ){
        alert('Digite sua senha.');
        variavelControle = false;
    }

    if(!variavelControle){
        alert('Confira seus dados de login digitados.');
    }
    else{
        window.location='index.html';
    }

}

function validarCadastro() {
    var nome_usuario = document.getElementById("nomeUsuario").value;
    var email_usuario = document.getElementById("email").value;
    var matricula = document.getElementById("matricula").value;
    var data_nascimento = document.getElementById("data").value;
    var senha = document.getElementById("senha").value;

    var erro = false;

    if(nome_usuario == "") {
        erro = true;
    }
    if(email_usuario == "") {
        erro = true;
    }
    if(matricula == "") {
        erro = true;
    }
    if(data_nascimento == "") {
        erro = true;
    }
    if(senha == "") {
        erro = true;
    }
    if(erro) {
        alert("Campos Obrigatórios Não Preenchidos");
    }
}