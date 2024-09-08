function pesquisar() {

    // Configurações de exibição dos resultados
    let mostrarTipo = true;  // Mostra o tipo do item na pesquisa
    let mostrarRaça = false; // Não mostra a raça do item na pesquisa

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se o campo da pesquisa estivet vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p> Talvez eu precise consultar o mapa estelar... ou pedir ajuda a um hobbit."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada item dos dados da pesquisa
    for (let dado of dados) {

        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        // Se no dado título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            // Cria um novo elemento
            resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        ${dado.tipo ? `<p><strong>Tipo:</strong> ${dado.tipo}</p>` : ''}
        ${dado.raça ? `<p><strong>Raça:</strong> ${dado.raça}</p>` : ''}
        ${dado.material ? `<p><strong>Material:</strong> ${dado.material}</p>` : ''}
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
        }

    }

    if (!resultados) {

        resultados = "<p> O mundo está cheio de mistérios, e este é apenas mais um</p>"
        

    }
   


    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}




