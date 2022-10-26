//PROJETO INTRODUÇÃO A WEB
//SÉRIES

const serie1 = {
  nome: "A Maldição",
  imagem:"a-maldicao.jpg",
  ano: 2018,
  temporadas: 2,
  producao: "Não",
  genero: ["Terror", "Drama", "Ficção Supernatural"],
};

const serie2 = {
  nome: "Criminal Minds",
  imagem: "criminal-minds.jpg",
  ano: 2005,
  temporadas: 15,
  producao: "Não",
  genero: ["Drama", "Policial", "Suspense", "Ação"]
}

const serie3 = {
  nome: "The Big Bang Theory",
  imagem: "the-big-bang-theory.jpg",
  ano: 2007,
  temporadas: 12,
  producao: "Não",
  genero: ["Comédia", "Sitcom"],
};

const serie4 = {
  nome: "Game Of Thrones",
  imagem: "got.jpg",
  ano: 2011,
  temporadas: 08,
  producao: "Não",
  genero: ["Fantasia Medieval, Ação, Drama, Ficção"],
};

const serie5 = {
  nome: "Grey's Anatomy",
  imagem: "greys-anatomy.jpg",
  ano: 2005,
  temporadas: 19,
  producao: "Sim",
  genero: ["Drama Médico, Romance, Comédia"],
};

const serie6 = {
  nome: "Prision Break",
  imagem: "prision-break.jpg",
  ano: 2005,
  temporadas: 05,
  producao: "Não",
  genero: ["Ação, Drama, Suspense, Ficção Policial"],
};

//Meédia das temporadas
const media = (serie1.temporadas + serie2.temporadas + serie3.temporadas + serie4.temporadas + serie5.temporadas + serie6.temporadas) / 6;
console.log("A média de temporadas é:", media)


//Nome maiusculo 
serie1.nome = serie1.nome.toLocaleUpperCase()
serie2.nome = serie2.nome.toLocaleUpperCase()
serie3.nome = serie3.nome.toLocaleUpperCase()
serie4.nome = serie4.nome.toLocaleUpperCase()
serie5.nome = serie5.nome.toLocaleUpperCase()
serie6.nome = serie6.nome.toLocaleUpperCase()


//---------------------------------------------
//Inserir objetos anteriores dentro de um array

todasAsSeries = [];
todasAsSeries.push(serie1, serie2, serie3, serie4, serie5, serie6);

//Informação booleana
// if ((todasAsSeries.producao) === true) {
//   console.log();
// } else {
//   console.log("Há séries em produção");
// }


// ----------------------------------------------
// Colocar todas em string, e imprimir relatório utilizando laço

function todasStrings (series){
  for (i in series){
    console.log(`${i}: ${series[i]}\n`)
  }
  console.log('------------------------------')
}

todasStrings(serie1)
todasStrings(serie2)
todasStrings(serie3)
todasStrings(serie4)
todasStrings(serie5)
todasStrings(serie6)


//Function que busca a série

// function encontraSerie (array, string){
// const buscaSerie = array.filter((elemento) => {
//     if(elemento.nome === string){
//         return elemento
//  }
// })
//  if(buscaSerie.length === 0){
//     alert("Série não encontrada")
// }else{
//     console.log(buscaSerie);
// }
// }

// encontraSerie(todasAsSeries, "The Big Bang Theory")

//----------------------------------------------

//Função para buscar um objeto 

// function encontraSerie (array, string){
//   const buscaSerie = array.filter((elemento) => {
//       if(elemento.nome === string){
//           return elemento
//    }
//  })
//    if(buscaSerie.length === 0){
//       alert("Série não encontrada")
//   }else{
//       console.log(buscaSerie);
//   }
// }

// Ex: encontraSerie(todasAsSeries, "The Big Bang Theory")

// ----------------------------------------------

//Semana 6 - part 1


const listaDeSeries = document.querySelector("main")

todasAsSeries.filter(dados => {
  function addSeries () {
    listaDeSeries.innerHTML += `<div class="series">
<div class="series-div">
<img src = ${dados.imagem}>
<h2><b>${dados.nome}</b></h2>
<div class = "text">
<p><b>Gênero:</b> ${dados.genero} </p> 
<p><b>Ano:</b> ${dados.ano} </p>
<p><b>Temporadas:</b> ${dados.temporadas} </p>
<p><b>Em produção:</b> ${dados.producao}</p>
    
</div>
</div>
</div>`
}
addSeries()  
}
)

//------------
//Semana 6 - part 


function search (event){
  event.preventDefault()
  // let pesquisarLista = document.getElementById('.main')
  let input = document.getElementById('.buscar').value.toLocaleUpperCase()
  for(let i=0;i<todasAsSeries.length;i++){
  if(input === todasAsPraias[i].nome){
      return (novaLista.innerHTML =`<div class="series">
      <div class="series-div">
      <img src = ${dados.imagem}>
      <h2><b>${dados.nome}</b></h2>
      <div class = "text">
      <p><b>Gênero:</b> ${dados.genero} </p> 
      <p><b>Ano:</b> ${dados.ano} </p>
      <p><b>Temporadas:</b> ${dados.temporadas} </p>
      <p><b>Em produção:</b> ${dados.producao}</p>
          
      </div>
      </div>
      </div>`)
  
  
   }

  }

  alert("Nenhuma praia foi encontrada, digite novamente!");
  document.getElementById('id-type').value = "";
  return;
}


search()



// const inputSearch = document.querySelector("input [type = 'search']")
// const conteudo = document.querySelector(".series")

// inputSearch.oninput = () => {
//   conteudo.innerHTML = "";

//   todasAsSeries.filter((item) => 
//   item.toLowerCase().includes(inputSearch.value.toLowerCase))
//   .forEach((item) => addSeries (item))
// }





//addHTML = addSeries


// function buscarSeries (array, nomeSerie) {
//   const buscar = array.filter((obj) => obj.nomeSerie.toLowerCase().includes(nomeSerie.toLocaleUpperCase()))

//   if (buscar.length){
//     return buscar;
//   } else {
//     return array
//   }
// }

//   function retornaVazio(){
//     document.getElementById("buscar").value = "";
//   }

 
//   function pesquisar (event) {
//   event.preventDefault()
//   const input = document.getElementById("buscar").value;
//   const filtrar = buscarSeries.filter(todasAsSeries, input);

//   if (input === ''){
//     alert("Digite um nome.")
//     addSeries(todasAsSeries)
//   } else {
//     console.log(filtrar);
//     addSeries(input);
//   }

//   console.log(filtrar.includes(input));
//   retornaVazio ();

// }



// function buscarSeries () {
//   const input = document.getElementById("buscar").value.toLocaleUpperCase();
//   const filtro = todasAsSeries.filter(serie => nome === input);
//   const listSeries = document.querySelector(".series")

//   for (let i = 0; i < addSeries.length; i++){
//     if (filtro.length > 0){
//       limpaLista();
//       addSeries(filtro)
//     } else {
//       limpaLista();
//       addSeries(todasAsSeries)
//     }
//     return (todasAsSeries[i])
//   }
// }

// function limpaLista(){
//   document.getElementById("buscar").value = ""
// }



// function buscarSerie (){
//   const nome = document.getElementById("series")

//   for (let i = o; i < nome.length; i++){

//   }
// }



// function search (pesquisa) {
//   return todasAsSeries.filter(todasAsSeries => {
//     return todasAsSeries.nome.toLowerCase().includes(pesquisa.toLowerCase())
//   })
// }

// buscar.addEventListener('keyup', debounce(buscarSeries, 400));


// const input = document.querySelector("#buscar")

// input.addEventListener("input", function () {
//   const val = this.value;
//   if(val) {
//     filterVazio(val)
//   } else {
//     showItems()
//   }
// })

// function showItems (){

// }