let moviesList = [{"name":"De Volta para o Futuro",
  "image":"https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg",
  "description":"O adolescente Marty McFly é transportado para 1955 quando uma experiência do excêntrico cientista Doc Brown dá errado. Ele viaja pelo tempo em um carro modificado e acaba conhecendo seus pais ainda jovens."},
  {
  "name":"Pulp Fiction: Tempo de Violência",
  "image":"https://upload.wikimedia.org/wikipedia/pt/8/82/Pulp_Fiction_cover.jpg",
  "description":"Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la, um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle."
},
{
  "name":"O Irlandês",
  "image":"https://upload.wikimedia.org/wikipedia/pt/d/da/The_Irishman_p%C3%B4ster.png",
  "description":"Na década de 1950, o caminhoneiro Frank Sheeran se envolve com Russell Bufalino e sua família criminosa. Enquanto Sheeran sobe na hierarquia para se tornar um assassino, ele também trabalha para Jimmy Hoffa, um homem poderoso do submundo.",
},
{
  "name":"El Camino: A Breaking Bad Film",
  "image":"https://upload.wikimedia.org/wikipedia/pt/4/48/El_Camino_p%C3%B4ster.png",
  "description":"Assombrado pelo passado, o fugitivo Jesse Pinkman tenta encontrar um lugar seguro para viver.",
},
];

let currentCardPosition = null;
let currentCardDeletePosition = null;

function sliceString(str, limite) {
  if (str.length > limite) {
    return str.substring(0, limite) + "...";
  }
  return str;
}

function renderCard () {
  moviesList.map((card, position) => {
    let movies = document.querySelector("#cards");
    let description = sliceString(card.description, 100)
    movies.innerHTML += `
      <div class="col-md-3 cards">
        <div class="card">
          <img src="${card.image}"  class="card-img-top card-image" alt="...">
          <div class="card-body">
            <p class="card-title">${card.name}</p>
            <p class="card-text">${description}</p>
          </div>
          <div>
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
  clearValueTitle.value = moviesList[position].name;
  let clearValueObs = document.querySelector('#editObs');
  clearValueObs.value = moviesList[position].description;

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
  
  
  let newCard = {'name': title,
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