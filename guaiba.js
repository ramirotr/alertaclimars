async function carregarDados() {
  try {
    const resposta = await fetch("https://alerta-clima-rs.vercel.app/api/nivel");
    const dados = await resposta.json();

    if (!Array.isArray(dados) || dados.length === 0) {
      document.getElementById("erro").textContent = "Nenhum dado recebido.";
      return;
    }

    const labels = dados.map(d => d.DataHora);
    const niveis = dados.map(d => parseFloat(d.Nivel.replace(",", ".")));

    const ctx = document.getElementById("grafico").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [{
          label: "Nível (cm)",
          data: niveis,
          borderColor: "blue",
          backgroundColor: "lightblue",
          tension: 0.3,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

  } catch (erro) {
    document.getElementById("erro").textContent = "Erro ao carregar os dados.";
    console.error("Erro ao carregar o gráfico:", erro);
  }
}

carregarDados();
