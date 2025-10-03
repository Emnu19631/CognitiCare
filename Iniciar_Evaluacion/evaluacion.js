let answers = {};

function saveAnswer(question, answer) {
  const box = document.querySelector(`.question-box[data-question="${question}"]`);
  const buttons = box.querySelectorAll("button");


  buttons.forEach(btn => btn.classList.remove("selected"));


  const clickedBtn = [...buttons].find(b => b.innerText === answer);
  clickedBtn.classList.add("selected");

  answers[question] = answer;

  box.classList.add("answered");
}

function showResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.style.display = "block"; // ✅ ahora sí se muestra al dar click
  resultsDiv.innerHTML = "<h3>Resultados de la evaluación</h3>";

  if (Object.keys(answers).length === 0) {
    resultsDiv.innerHTML += "<p>No seleccionaste ninguna respuesta.</p>";
    return;
  }

  let score = 0;

  let tableHTML = `
    <table style="width:100%; border-collapse:collapse; margin-top:10px;">
      <thead>
        <tr style="background:#2979ff; color:#fff;">
          <th style="padding:8px; text-align:left;">Pregunta</th>
          <th style="padding:8px; text-align:left;">Tu respuesta</th>
          <th style="padding:8px; text-align:left;">Correcta</th>
        </tr>
      </thead>
      <tbody>
  `;

  for (const [q, a] of Object.entries(answers)) {
    const box = document.querySelector(`.question-box[data-question="${q}"]`);
    const correct = box.getAttribute("data-correct");

    if (a === correct) score++;

    tableHTML += `
      <tr style="border-bottom:1px solid #ddd;">
        <td style="padding:8px;">${q}</td>
        <td style="padding:8px; color:${a === correct ? "green" : "red"};">${a}</td>
        <td style="padding:8px;">${correct}</td>
      </tr>
    `;
  }

  tableHTML += `</tbody></table>`;

  resultsDiv.innerHTML += tableHTML;

  resultsDiv.innerHTML += `
    <div style="margin-top:20px; padding:10px; background:#3E7775; color:#fff; border-radius:8px; text-align:center;">
      <strong>Puntaje final: ${score} / 10</strong>
    </div>
  `;
}
