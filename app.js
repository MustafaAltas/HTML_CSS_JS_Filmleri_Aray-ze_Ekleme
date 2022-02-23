const formSubmit = document.getElementById("form");
const filmİsim = document.getElementById("film");
const yönetmenİsim = document.getElementById("yönetmen");
const linkİsim = document.getElementById("url");
const tableList = document.querySelector(".liste");
const kompleSilme = document.getElementById("komplesilme");
const tBody = document.getElementById("tbody");

//film constructor
function Film(başlık, yönetmen, link) {
  this.başlık = başlık;
  this.yönetmen = yönetmen;
  this.link = link;
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function UI() {

}

UI.prototype.yeniFilmEkleme = function (yeniFilm) {
  const tbodyEkleme = document.getElementById("tbody");

  tbodyEkleme.innerHTML += `          
  <tr class="tbody-tr">
    <td>
      <img src="${yeniFilm.link}" alt="" width="100%" />
    </td>
    <td class="content1">${yeniFilm.başlık}</td>
    <td class="content1">${yeniFilm.yönetmen}</td>
    <td class="content1"><button id = "kaldır">Kaldır</button></td>
  </tr>`
};

UI.prototype.girdileriTemizleme = function(e1,e2,e3) {
  e1.value = "";
  e2.value = "";
  e3.value = "";
};

UI.prototype.bilgilendirmeMesajı = function(mesaj,tür) {
  const div = document.createElement("div");

  div.className = `alert alert-${tür}`;
  div.textContent = mesaj;
  div.setAttribute("role","alert");

  formSubmit.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 700);
}
UI.prototype.filmiSilmeİşlemi = function(e) {
  e.parentElement.parentElement.remove();
};

UI.prototype.filmleriKompleSil = function() {
  while(tBody.firstElementChild !== null) {
    tBody.firstElementChild.remove();
  }
}

const ui = new UI();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// aşağıda tümEventler fonksiyonu ile tüm eventler içine yazıldı.
tümEventler();

function tümEventler() {
  formSubmit.addEventListener("submit", filmEkleme);
  tableList.addEventListener("click",filmSİl);
  kompleSilme.addEventListener("click",kompleFilmSil)

};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function filmEkleme(e) {
  const başlık = filmİsim.value;
  const yönetmen = yönetmenİsim.value;
  const link = linkİsim.value;
  

  
  if (başlık === "" || yönetmen === "" || link === "") {
    ui.bilgilendirmeMesajı("Lütfen Eksik bilgi bırakmayınız...","danger")
  } else {
    const yeniFilm = new Film(başlık, yönetmen, link);
    ui.yeniFilmEkleme(yeniFilm); //arayüze yeni film ekleme
    ui.bilgilendirmeMesajı("Film başarıyla eklendi...","success")

  }

  ui.girdileriTemizleme(filmİsim,yönetmenİsim,linkİsim);
  e.preventDefault();
};


//eklenen filmi silme işlemini burada gerçekleştiriyoruz.
function filmSİl(e) {
  if (e.target.id === "kaldır") {
    ui.filmiSilmeİşlemi(e.target)
  }
}

function kompleFilmSil() {
  ui.filmleriKompleSil();
}
