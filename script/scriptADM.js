
// VALIDAÇÕES DA PÁGINA ( ADM )
// ======================================================
function validarAdicionarFilme() { 
    var imagem_apresentacao = document.getElementById("imagem_apresentacao").files;
    var nome_filme = document.getElementById("nome_filme").value;
    var sinopse_filme = document.getElementById("sinopse_filme").value;
    var tags_filme = document.getElementById("tags_filme").value;
    var link_filme = document.getElementById("link_filme").value;
    var genero_filme = document.getElementById("genero_filme").value;
    var elenco_filme = document.getElementById("elenco_filme").value;
    var diretor_filme = document.getElementById("diretor_filme").value;
    var erro = false;
    
    if(nome_filme == "") {
        erro = true;
        alert("O nome do filme não foi preenchido");
    }
    if(imagem_apresentacao.length == 0) {
        erro = true;
        alert("A imagem de apresentação do filme não foi adicionada");
    }
    if(sinopse_filme == "") {
        erro = true;
        alert("A sinopse do filme não foi adicionada");
    }
    if(tags_filme == "") {
        erro = true;
        alert("As tags do filme não foram preenchidas");
    }
    if(link_filme == "") {
        erro = true;
        alert("O link do filme não foi preenchido");
    }
    if(genero_filme == "") {
        erro = true;
        alert("O gênero do filme não foi preenchido");
    }
    if(elenco_filme == "") {
        erro = true;
        alert("O elenco do filme não foi preenchido");
    }
    if(diretor_filme == "") {
        erro = true;
        alert("O diretor do filme não foi preenchido");
    }

    if(erro == false) {
        alert("Filme adicionado!");
    }
}


// ======================================================

function validarEditarCatalogo() {
    var tumb = document.getElementById("tumb").files;
    var nome = document.getElementById("nome").value;
    var sinopse = document.getElementById("sinopse").value;
    var tags = document.getElementById("tags").value;
    var link = document.getElementById("link").value;
    var genero = document.getElementById("genero").value;
    var elenco = document.getElementById("elenco").value;
    var diretor = document.getElementById("diretor").value;
    var erro = false;
    
    if(nome == "") {
        erro = true;
        alert("O nome do filme não foi preenchido");
    }
    if(tumb.length == 0) {
        erro = true;
        alert("A imagem de apresentação do filme não foi adicionada");
    }
    if(sinopse == "") {
        erro = true;
        alert("A sinopse do filme não foi adicionada");
    }
    if(tags == "") {
        erro = true;
        alert("As tags do filme não foram preenchidas");
    }
    if(link == "") {
        erro = true;
        alert("O link do filme não foi preenchido");
    }
    if(genero == "") {
        erro = true;
        alert("O gênero do filme não foi preenchido");
    }
    if(elenco == "") {
        erro = true;
        alert("O elenco do filme não foi preenchido");
    }
    if(diretor == "") {
        erro = true;
        alert("O diretor do filme não foi preenchido");
    }

    if(erro == false) {
        alert("Filme editado com sucesso!");
    }
}


// ======================================================

function validarEditarUsuario(){

    let nome = document.getElementById('nomeUsuario').value;
    let email = document.getElementById('email').value;
    let matricula = document.getElementById('matricula').value;
    let dataNascimento = document.getElementById('data').value;
    let variavelDeControle = true;

    if( nome == "" ){
        alert("Campo nome não preenchido.");
        variavelDeControle = false;
    }
    if( email == "" ){
        alert("Campo e-mail não preenchido.");
        variavelDeControle = false;
    }
    if( matricula == "" ){
        alert("Campo de matrícula não preenchido.");
        variavelDeControle = false;
    }
    if( dataNascimento == "" ){
        alert("Campo de data de nascimento não preenchido.");
        variavelDeControle = false;
    }

    if(!variavelDeControle){
        alert("Não foi possível editar usuário\nConfira os campos digitados.")
    }
}