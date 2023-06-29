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
{
  "id":2,
  "name":"test3",
  "image":"test3",
  "description":"test3"
},
{
  "id":4,
  "name":"test4",
  "image":"test4",
  "description":"test4"
},
];

let currentCardPosition = null;
let currentCardDeletePosition = null;

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
            <a href="#" class="btn btn-secondary" onclick="openEditCard(${position})">Editar</a>
            <a href="#" class="btn btn-danger" onclick="openDeleteCard(${position})">Deletar</a>
          </div>
        </div>
      </div>
    `;
  });
}

function clearCard () {
  let movies = document.querySelector('#cards');
  movies.innerHTML = '';
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
    new bootstrap.Modal('#modalEditError').show();
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

  if (validationValue(editedTitle) === true && validationValue(editedObs) === true) {
    
    clearCard();
    renderCard();
    let modal = document.getElementById("editCard");
    let bootstrapModal = bootstrap.Modal.getInstance(modal);
    bootstrapModal.hide();
  }

}

function openDeleteCard (position) {
  currentCardDeletePosition = position;
  new bootstrap.Modal('#modalDeleteCard').show();
}

function deleteCard () {
  let indexToRemove = currentCardDeletePosition;

  if (indexToRemove !== -1) {
    moviesList.splice(indexToRemove, 1);
  }
  console.log(moviesList)

  clearCard();
  renderCard();

  let modal = document.getElementById("modalDeleteCard");
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
}

function openAddCard () {

  let clearValueTitle = document.querySelector('#addTitle');
  clearValueTitle.value = '';
  let clearValueObs = document.querySelector('#addObs');
  clearValueObs.value = '';

  new bootstrap.Modal('#addCard').show();
}

function addCard () {
  let title = document.querySelector('#addTitle').value;
  let obs = document.querySelector('#addObs').value;
  let image = document.querySelector('#addImage').value;
  
  
  let newCard = {'id': '',
    'name': title,
    'image': image,
    'description': obs
  };
  
  moviesList.push(newCard);

  clearCard();
  renderCard();
  let modal = document.getElementById("addCard");
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
}