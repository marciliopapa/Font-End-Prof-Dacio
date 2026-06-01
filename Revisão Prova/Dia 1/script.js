function mostrarTabelaDeJogos() {
    var areaImagem = document.getElementById("areaImagem");

    areaImagem.innerHTML = "";

    var imagem = document.createElement("img");
    imagem.src = "Tabela_jogos.png";
    imagem.alt = "Imagem da tabela de jogos da Copa do Mundo";

    areaImagem.appendChild(imagem);
}

document.getElementById("btnTabela").addEventListener("click", mostrarTabelaDeJogos);

function revelar() {
    var imagem = document.getElementById("imagemJogador");
    var nome = document.getElementById("nome");
    var nascimento = document.getElementById("nascimento");
    var altura = document.getElementById("altura");
    var posicao = document.getElementById("posicao");
    var rank = document.getElementById("rank");

    imagem.src = "neymar.png";
    imagem.alt = "Foto de Vinícius Júnior";

    nome.textContent = "Neymar da Silva Santos Júnior";
    nascimento.textContent = "05/02/1992 (34 anos)";
    altura.textContent = "1,75 m";
    posicao.textContent = "Horizaontal / Ponta-cabeça";
    rank.textContent = "0,0";

    imagem.classList.remove("placeholder");
    nome.classList.remove("placeholder");
    nascimento.classList.remove("placeholder");
    altura.classList.remove("placeholder");
    posicao.classList.remove("placeholder");
    rank.classList.remove("placeholder");

    imagem.classList.add("card-img-top");
    nome.classList.add("card-text");
    nascimento.classList.add("card-text");
    altura.classList.add("card-text");
    posicao.classList.add("card-text");
    rank.classList.add("card-text");
}
