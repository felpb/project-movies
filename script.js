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

moviesList.map((retorno) => {
  let movies = document.querySelector("#cards");
  movies.innerHTML += `
    <div class="col-md-4">
      <div class="card m-2">
        <img src="${retorno.image}"  class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${retorno.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  `;
});
