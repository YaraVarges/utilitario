function getSenha() {
    var caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var tamanhoSenha = document.getElementById('tamanho').value
    var senha = "";
    console.log(tamanhoSenha);
    
    if (tamanhoSenha == "") {
        alert("INFORME O TAMANHO DA SENHA!");
    } else {
        for (var i = 0; i < tamanhoSenha; i++) {
            var randomNumber = Math.floor(Math.random() * caracteres.length);
            senha += caracteres.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById('senha').value = senha
    }
  }