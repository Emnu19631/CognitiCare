function formatearFecha(fecha) {
    const date = new Date(fecha);
    const opciones = { 
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', 
        hour: '2-digit', minute: '2-digit' 
    };
    return date.toLocaleDateString('es-ES', opciones);
}

function mostrarRecordatorios() {
    const recordatorios = JSON.parse(localStorage.getItem('recordatorios')) || [];
    const tableBody = document.getElementById('recordatorioTableBody');
    tableBody.innerHTML = '';

    recordatorios.forEach(recordatorio => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${recordatorio.titulo}</td>
            <td>${recordatorio.descripcion}</td>
            <td>${formatearFecha(recordatorio.fecha)}</td>
        `;
        tableBody.appendChild(tr);
    });
}

window.onload = mostrarRecordatorios;
