const chaveAPI = "3b31d6b27baaf58a40c4584ccbe12547";
// Busca clima pela cidade
function buscarPrevisaoDoTempo(cidade) {
  if (!cidade) {
    document.getElementById("previsao").innerText = "Digite o nome de uma cidade.";
    return;
  }
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&lang=pt_br&appid=${chaveAPI}`;
 
  fetch(url)
    .then(res => res.json())
    .then(dados => {
      if (dados.cod !== 200) {
        document.getElementById("previsao").innerText = "Cidade não encontrada.";
        return;
      }
 
      document.getElementById("previsao").innerHTML = `
        <h2 id="cidades-nome">${dados.name} - ${dados.weather[0].description}</h2>
        <p>🌡️ Temperatura: ${dados.main.temp} °C</p>
        <p>💨 Vento: ${dados.wind.speed} m/s</p>
        <p>💧 Umidade: ${dados.main.humidity}%</p>
      `;
    })
    .catch(err => {
      console.error("Erro:", err);
      document.getElementById("previsao").innerText = "Erro ao buscar clima.";
    });
}
 
 
fetch("http://www.geoplugin.net/json.gp")
  .then(res => res.json())
  .then(data => {
    const cidade = data.geoplugin_city;
    if (cidade) {
      document.getElementById("cidade").value = cidade;
      buscarPrevisaoDoTempo(cidade);
    } else {
      document.getElementById("previsao").innerText = "Não foi possível detectar sua cidade automaticamente.";
    }
  })
.catch(err => {
    console.error("Erro ao obter localização:", err);
    document.getElementById("previsao").innerText = "Erro ao obter localização.";
  });
 