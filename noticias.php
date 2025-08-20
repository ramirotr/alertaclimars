<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notícias - Alerta Clima RS</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
</head>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
<style>
.noticias-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  padding: 24px 0;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
}
.noticia-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 18px 16px;
  transition: transform 0.2s;
  margin-bottom: 16px;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  text-align: left;
}
.noticia-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.13);
}
.noticia-card img {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
}
.noticia-card a {
  color: #1a73e8;
  font-size: 1.15em;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 8px;
  display: block;
  text-align: left;
  line-height: 1.2;
}
.noticia-card a:hover {
  text-decoration: underline;
}
.noticia-card small {
  color: #888;
  margin-bottom: 10px;
  display: block;
  font-size: 0.95em;
  text-align: left;
}
.noticia-card p {
  color: #333;
  font-size: 1em;
  text-align: left;
  margin: 0;
  line-height: 1.5;
}
@media (max-width: 700px) {
  .noticias-cards {
    flex-direction: column;
    align-items: center;
  }
  .noticia-card {
    width: 95%;
  }
}
</style>

<body>
  
<div class="config-menu">
    <button id="config-btn">⚙️</button>
    <div class="config-panel" id="config-panel">
      <label>
        <input type="checkbox" id="toggle-dark-mode">
        Modo Escuro
      </label>
      <label>
        <input type="checkbox" id="toggle-font">
        Texto Maior
      </label>
      <label>
        <input type="checkbox" id="toggle-contrast">
        Alto Contraste
      </label>
    </div>
  </div>
  
  <header>
    <div class="header-container">
      <div class="logo">
        <img src="assets/CLIMA__1_-removebg-preview (1).png" alt="Logo Alerta Clima RS">
      </div>
      <nav>
        <ul class="menu">
          <li><a href="index.html">Início</a></li>
          <li><a href="previsao.html">Previsão</a></li>
          <li><a href="guaiba.html">Guaíba</a></li>
          <li><a href="noticias.html" class="active">Notícias</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section class="news-section">
      <h1>Notícias Recentes</h1>
      <p class="subtext">Se informe diariamente! Aqui você encontra algumas das principais notícias de hoje.</p>
      <div id="news-container" class="news-grid"></div>
    </section>
  </main>

  <?php

$apiKey = "9c1b921e6e42fd23de3b6756baa31064";
$url = "https://gnews.io/api/v4/top-headlines?lang=pt&country=br&max=5&apikey=$apiKey";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
if (curl_errno($ch)) {
    echo "<p>Erro ao conectar à API: " . curl_error($ch) . "</p>";
    curl_close($ch);
    exit;
}
curl_close($ch);
$data = json_decode($response, true);
echo "<div class='noticias-cards'>";
if (isset($data['errors'])) {
    echo "<p>Erro da API: " . htmlspecialchars(json_encode($data['errors'])) . "</p>";
} elseif (!empty($data['articles'])) {
    foreach ($data['articles'] as $article) {
        echo "<div class='noticia-card'>";
        if (!empty($article['image'])) {
            echo "<img src='" . htmlspecialchars($article['image']) . "' alt='Imagem da notícia'>";
        }
        echo "<a href='" . htmlspecialchars($article['url']) . "' target='_blank'>" . htmlspecialchars($article['title']) . "</a>";
        echo "<small>" . htmlspecialchars(date('d/m/Y H:i', strtotime($article['publishedAt']))) . "</small>";
        echo "<p>" . htmlspecialchars($article['description']) . "</p>";
        echo "</div>";
    }
} else {
    echo "<p>Não foi possível carregar as notícias ou não há notícias disponíveis.</p>";
}
echo "</div>";
?>

  <section class="cards container">
    <div class="card">
      <h2>🌤️ Previsão do Tempo 🌤️</h2>
      <p>Confira a temperatura, vento e umidade atual da sua cidade.</p>
      <a class="btn" href="previsao.html">Ver mais</a>
    </div>
    <div class="card">
      <h2>🌊 Nível do Guaíba 🌊</h2>
      <p>Veja um gráfico com a média de altitude do rio Guaíba atualizado mensalmente.</p>
      <a class="btn" href="guaiba.html">Ver mais</a>
    </div>
  </section>

  <footer>
    <p>Projeto Técnico - Alerta Clima RS 2025 | Desenvolvido por <a class="githublink" href="https://github.com/pruvinelli123" target="_blank">Pedro Pruvinelli</a> , <a class="githublink" href="https://github.com/ramirotr" target="_blank">Ramiro Rockenbach</a> , <a class="githublink" href="https://github.com/rodrigin" target="_blank">Rodrigo Leonardis</a> e <a class="githublink" href="https://github.com/Plump07" target="_blank">Raphael Plump</a></p>
  </footer>

  
  <script src="js/script.js"></script>
  <script src="noticias.html"></script>
</body>
</html>
