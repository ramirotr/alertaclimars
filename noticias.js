window.addEventListener("load", () => {
  const noticiasContainer = document.getElementById("noticias-container");

  async function carregarNoticias() {
    try {
      const resposta = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://g1.globo.com/rss/g1/tempo-e-clima/&api_key=zcizmmfxffzllg0ryghx6rwz7wdubtjjltfJfxp"
      );
      const dados = await resposta.json();

      if (dados.items && dados.items.length > 0) {
        noticiasContainer.innerHTML = dados.items.slice(0, 5).map(item => `
          <div class="noticia">
            <h3>${item.title}</h3>
            <p>${item.pubDate ? new Date(item.pubDate).toLocaleDateString() : ""}</p>
            <a href="${item.link}" target="_blank">Leia mais</a>
          </div>
        `).join('');
      } else {
        noticiasContainer.innerHTML = "<p>Nenhuma notícia encontrada no momento.</p>";
      }
    } catch (error) {
      console.error(error);
      noticiasContainer.innerHTML = "<p>Não foi possível carregar as notícias.</p>";
    }
  }

  carregarNoticias();
});
