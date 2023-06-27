let moviesList = [{"id":1,
  "name":"test",
  "image":"test",
  "description":"test"},
  {
  "id":2,
  "name":"test2",
  "image":"test2",
  "description":"test2"
},
];

let currentCardPosition = null;

function writeCard () {
  moviesList.map((card, posicao) => {
    let movies = document.querySelector("#cards");
    movies.innerHTML += `
      <div class="col-md-4">
        <div class="card m-2">
          <img src="${card.image}"  class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">${card.description}</p>
            <a href="#" class="btn btn-primary" onclick="openCard(${posicao})">Abrir</a>
            <a href="#" class="btn btn-primary" onclick="openEditCard(${posicao})">Editar</a>
            <a href="#" class="btn btn-primary">Deletar</a>
          </div>
        </div>
      </div>
    `;
  });
}

writeCard();

function openCard(posicao) {
  let selectCard = moviesList[posicao];
  
  document.querySelector('#titleModal').innerHTML = selectCard.name;
  document.querySelector('#imgModal').src = selectCard.image;
  document.querySelector('#obsModal').innerHTML = selectCard.description;

  new bootstrap.Modal('#openCard').show();
}


function openEditCard(posicao) {
  currentCardPosition = posicao;

  new bootstrap.Modal('#editCard').show();

  let movies = document.querySelector('#cards');
  movies.innerHTML = '';

}

function saveEditCard() {

  let editedTitle = document.querySelector('#editTitle').value;
  moviesList[currentCardPosition].name = editedTitle;
  let editedObs = document.querySelector('#editObs').value;
  moviesList[currentCardPosition].description = editedObs;

  writeCard()
  let modal = document.getElementById("editCard");
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
}
