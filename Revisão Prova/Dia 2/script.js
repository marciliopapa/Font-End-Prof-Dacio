function proximo() {
    //var conteudo = document.getElementById("conteudo");
    var cardSel = document.getElementsByClassName("card-grupo");


    conteudo.innerHTML = `
        <div id="grupoD" class="card-grupo">
            <h2>Grupo D</h2>

            <h3>Seleções</h3>
            <ul>
                <li>Estados Unidos</li>
                <li>Paraguai</li>
                <li>Austrália</li>
                <li>Turquia</li>
            </ul>

            <details>
                <summary>Saiba Mais</summary>
                <p>
                    Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta
                    frequentemente seleções sul-americanas em torneios.
                </p>
            </details>
        </div>

        <div id="grupoE" class="card-grupo">
            <h2>Grupo E</h2>

            <h3>Seleções</h3>
            <ul>
                <li>Alemanha</li>
                <li>Equador</li>
                <li>Costa do Marfim</li>
                <li>Curaçao</li>
            </ul>

            <details>
                <summary>Saiba Mais</summary>
                <p>
                    Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm
                    estilos físicos semelhantes.
                </p>
            </details>
        </div>

        <div id="grupoF" class="card-grupo">
            <h2>Grupo F</h2>

            <h3>Seleções</h3>
            <ul>
                <li>Holanda</li>
                <li>Japão</li>
                <li>Tunísia</li>
                <li>Suécia</li>
            </ul>

            <details>
                <summary>Saiba Mais</summary>
                <p>
                    Holanda e Japão são seleções muito organizadas. Tunísia e Suécia podem
                    dificultar os jogos com forte marcação.
                </p>
            </details>
        </div>
    `;
}

function add() {
    var areaCards = document.getElementById("areaCards");

    var novoCard = document.createElement("div");
    novoCard.classList.add("card");
    novoCard.style.width = "18rem";

    novoCard.innerHTML = `
        <img src="vinijr.png" class="card-img-top" alt="Virgínio Júnior">

        <div class="card-body">
            <h5 class="card-title">
                Vinícius José Paixão de Oliveira Júnior
                <span class="badge text-bg-success">8,8</span>
            </h5>

            <p class="card-text">
                <strong>Data de Nascimento:</strong> 12/07/2000 (25 anos)<br>
                <strong>Altura:</strong> 1,76 m<br>
                <strong>Posição:</strong> Ataque do Tigrinho
            </p>
        </div>
    `;

    areaCards.appendChild(novoCard);
}
