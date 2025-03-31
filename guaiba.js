const ctx = document.getElementById('graficoGuaiba').getContext('2d');

const dadosSimulados = {
  labels: ['25/03', '26/03', '27/03', '28/03', '29/03', '30/03', '31/03'],
  datasets: [{
    label: 'Nível do Guaíba (m)',
    data: [2.1, 2.3, 2.5, 2.6, 2.8, 3.1, 3.0],
    borderColor: '#007bff',
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
    tension: 0.3,
    fill: true,
    pointRadius: 4,
    pointHoverRadius: 6
  }]
};

const config = {
  type: 'line',
  data: dadosSimulados,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: context => ` ${context.dataset.label}: ${context.raw.toFixed(2)} m`
        }
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Altura (metros)'
        },
        beginAtZero: true,
        min: 0,
        max: 5
      },
      x: {
        title: {
          display: true,
          text: 'Data'
        }
      }
    }
  }
};

new Chart(ctx, config);
