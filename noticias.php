<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notícias - Alerta Clima RS</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="icon" type="image/x-icon" href="assets/realicon_alertaclimars-removebg-preview.png">
</head>
<body>
  
  <div class="config-menu">
    <button id="config-btn">⚙️</button>
    <div class="config-panel" id="config-panel">
      <label><input type="checkbox" id="toggle-dark-mode"> Modo Escuro</label>
      <label><input type="checkbox" id="toggle-font"> Texto Maior</label>
      <label><input type="checkbox" id="toggle-contrast"> Alto Contraste</label>
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
          <li><a href="noticias.php" class="active">Notícias</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section class="news-section">
      <h1>Notícias Climáticas Recentes</h1>
      <p class="subtext">Se informe diariamente! Aqui você encontra algumas das principais notícias de hoje.</p>
      <div id="news-container" class="news-grid">
        <?php
          $apiKey = '257c37918c16af848a945c19250cf92a'; // substitui pela tua
          $url = "https://gnews.io/api/v4/top-headlines?lang=pt&country=br&max=6&apikey=$apiKey";

          $response = file_get_contents($url);
          $data = json_decode($response);

          if ($data && isset($data->articles)) {
              foreach ($data->articles as $noticia) {
                  echo "<div class='noticia'>";
                  echo "<h2>{$noticia->title}</h2>";
                  echo "<p>{$noticia->description}</p>";
                  echo "<a href='{$noticia->url}' target='_blank'>Ler mais</a>";
                  echo "<img src='{$noticia->image}' alt='imagem da notícia' style='max-width:100%; height:auto;'>";
                  echo "</div>";
              }
          } else {
              echo "<p>Não foi possível carregar as notícias.</p>";
          }
        ?>
      </div>
    </section>
  </main>

  <footer>
    Projeto Técnico - Alerta Clima RS 2025 | Desenvolvido por Ramiro Rockenbach, Rodrigo Leonardis, Raphael Plump, Pedro Pruvinelli
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
