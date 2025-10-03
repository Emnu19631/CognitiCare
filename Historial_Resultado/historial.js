const ctx = document.getElementById('lineChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6", "Semana 7", "Semana 8"], 
    datasets: [{
      label: "Progreso",
      data: [1, 3, 2, 5, 3, 1, 6, 4],
      borderColor: "violet",
      backgroundColor: "rgba(238,130,238,0.2)",
      tension: 0.3,
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: "violet"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#333",
          font: { size: 14 }
        }
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Semanas",
          font: { size: 14 }
        },
        grid: {
          color: "#ddd"
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Resultados",
          font: { size: 14 }
        },
        ticks: {
          stepSize: 1
        },
        grid: {
          color: "#ddd"
        }
      }
    }
  }
});
