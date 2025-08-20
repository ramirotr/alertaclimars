async function buscarPrevisao() {
    const cidade = document.getElementById("city").value;
    const resultado = document.getElementById("resultadoPrevisao");
    const apiKey = "51efff6ad8e1410550e7181f0aa68879";
   
    if (!cidade) {
      resultado.innerHTML = "<p>Digite uma cidade para buscar a previsão.</p>";
      return;
    }
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`;
   
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Cidade não encontrada.");
      }
   
      const data = await response.json();
   
      const descricao = data.weather[0].description;
      const temperatura = data.main.temp;
      const umidade = data.main.humidity;
      const vento = data.wind.speed;
      const icone = data.weather[0].icon;
      const nomeCidade = data.name;
   
      resultado.innerHTML = `
        <h3>${nomeCidade}</h3>
        <img src="https://openweathermap.org/img/wn/${icone}@2x.png" alt="Ícone do clima">
        <p><strong>Clima:</strong> ${descricao}</p>
        <p><strong>Temperatura:</strong> ${temperatura} °C</p>
        <p><strong>Umidade:</strong> ${umidade}%</p>
        <p><strong>Vento:</strong> ${vento} m/s</p>
      `;
    } catch (erro) {
      resultado.innerHTML = `<p>Erro: ${erro.message}</p>`;
    }
  }