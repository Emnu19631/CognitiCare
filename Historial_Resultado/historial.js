const ctx = document.getElementById('lineChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["", "", "", "", "", "", ""], // puntos vacíos
    datasets: [{
      label: "Progreso",
      data: [1, 3, 2, 5, 3, 1, 6, 4], // datos del gráfico
      borderColor: "violet",
      backgroundColor: "transparent",
      tension: 0, // líneas rectas
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: "violet"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  }
});
