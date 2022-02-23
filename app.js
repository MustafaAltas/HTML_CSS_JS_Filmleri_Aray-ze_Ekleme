const formSubmit = document.getElementById("form");
const filmİsim = document.getElementById("film");
const yönetmenİsim = document.getElementById("yönetmen");
const linkİsim = document.getElementById("url");


//film constructor
function Film(başlık, yönetmen, link) {
  this.başlık = başlık;
  this.yönetmen = yönetmen;
  this.link = link;
}

function UI() {

}

UI.prototype.yeniFilmEkleme = function (yeniFilm) {
  const tbodyEkleme = document.getElementById("tbody");

  console.log(yeniFilm.link);
  tbodyEkleme.innerHTML += `          
  <tr class="tbody-tr">
    <td>
      <img src="${yeniFilm.link}" alt="" width="100%" />
    </td>
    <td class="content1">${yeniFilm.başlık}</td>
    <td class="content1">${yeniFilm.yönetmen}</td>
    <td class="content1"><button>Kaldır</button></td>
  </tr>`
};

UI.prototype.girdileriTemizleme = function(e1,e2,e3) {
  e1.value = "";
  e2.value = "";
  e3.value = "";
}

const ui = new UI();

tümEventler();

function tümEventler() {
  formSubmit.addEventListener("submit", filmEkleme);
}

function filmEkleme(e) {
  const başlık = filmİsim.value;
  const yönetmen = yönetmenİsim.value;
  const link = linkİsim.value;
  

  
  if (başlık === "" || yönetmen === "" || link === "") {
    alert("olmaz")
  } else {
    const yeniFilm = new Film(başlık, yönetmen, link);
    console.log(yeniFilm);
    ui.yeniFilmEkleme(yeniFilm); //arayüze yeni film ekleme

  }

  ui.girdileriTemizleme(filmİsim,yönetmenİsim,linkİsim);
  e.preventDefault();
}
