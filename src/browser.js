const api_key = 'GET-YOUR-KEY';
const form = document.getElementById('search');
const container = document.getElementById('albums-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.getElementById('artist').value;

  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${input}&api_key=${api_key}&format=json&limit=5`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      container.innerHTML = "";

      data.topalbums.album.forEach((result) => {
        const album = populateAlbum(result);
        container.insertAdjacentHTML('beforeend', album);
      })
    })
});

const populateAlbum = (result) => {
  return `<div class="row m-t-1">
      <div class="col-xs-12">
        <img src="${result.image[2]['#text']}" class='pull-left m-r-1'>
        <h2>${result.name}</h2>
        <p>${result.artist.name}</p>
      </div>
    </div>`
};