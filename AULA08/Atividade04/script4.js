
// Função chamada ao clicar no botão
function clonatexto() {
    alert(document.getElementById("a"));
}

// Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
});








<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Exibir Nome</title>
</head>
<body>
    <h1>Digite seu nome</h1>
    <input type="text" id="campoNome" placeholder="Digite seu nome">
    <button id="botaoExibir">Exibir Nome</button>

    <script>
        document.getElementById("botaoExibir").addEventListener("click", function() {
            const nome = document.getElementById("campoNome").value;
            alert("Nome digitado: " + nome);
        });
    </script>
</body>
</html>