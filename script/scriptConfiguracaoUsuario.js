
// VALIDAÇÃO CONFIGURAÇÃO DE USUÁRIO

function validarEditarConta(){
    let nome = document.getElementById('nomeUsuario').value;
    let email = document.getElementById('email').value;
    let matricula = document.getElementById('matricula').value;
    let dataNascimento = document.getElementById('data').value;
    let variavelControle = "";

    if( nome != "" ){
        variavelControle += "nome ";
    }

    if( email != "" ){
        variavelControle += " e-mail ";
    }
    if( matricula != "" ){
        variavelControle += " matricula ";
    }
    if( dataNascimento != "" ){
        variavelControle += " data de nascimento ";
    }

    if(variavelControle){
        alert('Esses dados foram alterados: ' + variavelControle);
    }

}

function editarSenha(){
    let novaSenha = document.getElementById('senhaNova').value;
    let confirmarSenha = document.getElementById('confNovaSenha').value;
    let variavelControle = false;

    if ( novaSenha != "" ){
        if ( novaSenha === confirmarSenha ){
            variavelControle = true;
        }
    }

    if(variavelControle){
        alert('Senha alterada.');
    }
}