document.getElementById('recordatorioForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const fecha = document.getElementById('fecha').value;
    
    const recordatorio = {
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha
    };

    let recordatorios = JSON.parse(localStorage.getItem('recordatorios')) || [];
    recordatorios.push(recordatorio);
    localStorage.setItem('recordatorios', JSON.stringify(recordatorios));
    document.getElementById('recordatorioForm').reset();
    mostrarRecordatorios();
});

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
