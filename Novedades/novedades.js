const feedUrl = 'http://feeds.twit.tv/brickhouse.xml';  

fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
  .then(response => response.json())
  .then(data => {
    const noticiasList = document.getElementById('noticias-list');
    noticiasList.innerHTML = '';  

    data.items.forEach(item => {
      const li = document.createElement('li');
      
      li.innerHTML = `
        <div class="noticia-item">
            <strong>${item.title}</strong>
            <p>${item.description}</p>
            <a href="${item.link}" target="_blank">Leer más</a>
        </div>
      `;
      
      noticiasList.appendChild(li);
    });
  })
  .catch(error => console.error('Error al cargar el feed RSS:', error));
