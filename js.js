async function post() {
  let postagem = document.querySelector("#resul");
  let response = await fetch("https://rickandmortyapi.com/api/character/");
  let json = await response.json();

  console.log(json.results);

  if (json.results.length > 0) {
    postagem.innerHTML = "";
    for (let i in json.results) {
      let postsHTML =
     "<div id='img-block'><img id='img' src='https://rickandmortyapi.com/api/character/avatar/"+json.results[i].id+".jpeg'>"+
        "<div id='bloco-cont'>" +
        json.results[i].name +
        "</div></div>";
      postagem.innerHTML = postagem.innerHTML + postsHTML;
    }
  } else {
    console.error;
    alert("Algo deu errado!:/");
    postagem.innerHTML = "ERRO!";
  }
}
post();

function search() {
  console.log("pesquisou");
}
