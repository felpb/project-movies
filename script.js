let moviesList = [{"id":1,
  "name":"test",
  "image":"test",
  "description":"test"},
  {
  "id":12,
  "name":"test2",
  "image":"test2",
  "description":"test2"
},
];

moviesList.map((card, posicao) => {
  let movies = document.querySelector("#cards");
  movies.innerHTML += `
    <div class="col-md-4">
      <div class="card m-2">
        <img src="${card.image}"  class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary" onclick="openCard(${posicao})">Abrir</a>
          <a href="#" class="btn btn-primary" onclick="editCard(${posicao})">Editar</a>
          <a href="#" class="btn btn-primary">Deletar</a>
        </div>
      </div>
    </div>
  `;
});

function openCard(posicao) {
  let selectCard = moviesList[posicao];
  
  document.querySelector('#titleModal').innerHTML = selectCard.name;
  document.querySelector('#imgModal').src = selectCard.image;
  document.querySelector('#obsModal').innerHTML = selectCard.description;

  new bootstrap.Modal('#openCard').show();
}

function editCard(posicao) {
  let selectCard = moviesList[posicao];

  let teste = document.querySelector('#editTitle')
  new bootstrap.Modal('#editCard').show();
}

function recebe () {
  let teste = document.querySelector('#message-text').value;
  let teste1 = document.querySelector('.editObs');
  let valor = teste.value;
  console.log(teste);
}