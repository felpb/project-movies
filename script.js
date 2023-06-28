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

function renderCard () {
  moviesList.map((card, position) => {
    let movies = document.querySelector("#cards");
    movies.innerHTML += `
      <div class="col-md-4">
        <div class="card m-2">
          <img src="${card.image}"  class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${card.name}</h5>
            <p class="card-text">${card.description}</p>
            <a href="#" class="btn btn-primary" onclick="openCard(${position})">Abrir</a>
            <a href="#" class="btn btn-primary" onclick="openEditCard(${position})">Editar</a>
            <a href="#" class="btn btn-primary">Deletar</a>
          </div>
        </div>
      </div>
    `;
  });
}

renderCard();

function openCard(position) {
  let selectCard = moviesList[position];
  
  document.querySelector('#titleModal').innerHTML = selectCard.name;
  document.querySelector('#imgModal').src = selectCard.image;
  document.querySelector('#obsModal').innerHTML = selectCard.description;

  new bootstrap.Modal('#openCard').show();
}


function openEditCard(position) {
  currentCardPosition = position;

  let clearValueTitle = document.querySelector('#editTitle');
  clearValueTitle.value = '';
  let clearValueObs = document.querySelector('#editObs');
  clearValueObs.value = '';

  new bootstrap.Modal('#editCard').show();

}

function openCardAfterValidation () {
  new bootstrap.Modal('#editCard').show();
}

function validationValue (value) {

  let validate = value.trim();

  if (validate.length < 3) {
    let modal = document.getElementById("editCard");
    let bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
    new bootstrap.Modal('#myModal').show();
    return false;
  } else {
    return true;
  }
}

function saveEditCard() {

  let editedTitle = document.querySelector('#editTitle').value;
  moviesList[currentCardPosition].name = editedTitle;
  let editedObs = document.querySelector('#editObs').value;
  moviesList[currentCardPosition].description = editedObs;

  if (validationValue(editedTitle) === true && validationValue(editedObs)) {
    
    let movies = document.querySelector('#cards');
    movies.innerHTML = '';

    renderCard();
    let modal = document.getElementById("editCard");
    let bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
  }

}

