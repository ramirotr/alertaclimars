const apiKey = 'ee7b2e3d00c5423bb5d3c0bdf99467ce'; 
const url = `https://newsapi.org/v2/everything?q=terremoto OR tsunami OR furacão OR ciclone OR tornado OR erupção vulcânica OR deslizamento OR enchente OR seca OR incêndio florestal OR clima OR temperatura OR precipitação OR umidade OR frente fria OR frente quente OR El Niño OR La Niña OR mudanças climáticas OR aquecimento global OR Amazônia OR Pantanal OR Cerrado OR Mata Atlântica OR Caatinga OR Pampa OR floresta tropical OR savana OR manguezal OR recife de coral OR água OR rios OR aquífero OR solo OR minerais OR petróleo OR gás natural OR biodiversidade OR fauna OR flora OR deriva continental OR placas tectônicas OR erosão OR sedimentação OR intemperismo OR formação de montanhas OR vulcanismo OR desenvolvimento sustentável OR conservação ambiental OR preservação OR reflorestamento OR desmatamento OR reciclagem OR energia renovável OR COP30 OR acordo de Paris OR políticas ambientais OR legislação ambiental OR desastres ambientais recentes&language=pt&sortBy=publishedAt&apiKey=${apiKey}`;


async function carregarNoticias() {
  const container = document.getElementById('noticias-container');
  container.innerHTML = "<p>Carregando notícias...</p>";

  try {
    const resposta = await fetch(`https://newsapi.org/v2/everything?q=clima OR tempo OR enchente&language=pt&sortBy=publishedAt&pageSize=9&apiKey=${apiKey}`);
    const dados = await resposta.json();

    if (dados.status !== "ok") {
      throw new Error(dados.message || "Erro desconhecido na API.");
    }

    container.innerHTML = '';

    dados.articles.forEach(noticia => {
      const card = document.createElement('div');
      card.classList.add('noticia-card');

      card.innerHTML = `
        <img src="${noticia.urlToImage || 'https://via.placeholder.com/150'}" alt="Imagem da notícia">
        <div class="conteudo-noticia">
          <h3>${noticia.title}</h3>
          <p>${noticia.description || 'Sem descrição disponível.'}</p>
          <a href="${noticia.url}" target="_blank">Ler mais</a>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (erro) {
    container.innerHTML = `<p>Erro ao carregar notícias.<br>${erro.message}</p>`;
  }
}

window.onload = carregarNoticias;
