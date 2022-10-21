//PROJETO INTRODUÇÃO A WEB
//FILMES/SÉRIES

const serie1 = {
  nome: "A Maldição",
  ano: 2018,
  temporadas: 2,
  producao: false,
  genero: ["Terror", "Drama", "Ficção Supernatural"],
};

const serie2 = {
  nome: "Criminal Minds",
  ano: 2005,
  temporadas: 15,
  producao: false,
  genero: ["Drama", "Policial", "Suspense", "Ação"],
};

const serie3 = {
  nome: "The Big Bang Theory",
  ano: 2007,
  temporadas: 12,
  producao: false,
  genero: ["Comédia", "Sitcom"],
};

const serie4 = {
  nome: "Game Of Thrones",
  ano: 2011,
  temporadas: 08,
  producao: false,
  genero: ["Fantasia Medieval, Ação, Drama, Ficção"],
};

const serie5 = {
  nome: "Grey's Anatomy",
  ano: 2005,
  temporadas: 19,
  producao: true,
  genero: ["Drama Médico, Romance, Comédia"],
};

// const serie6 = {
//   nome: "Prision Break",
//   ano: 2005,
//   temporadas: 05,
//   producao: false,
//   genero: ["Ação, Drama, Suspense, Ficção Policial"],
// };

// console.log(serie1.nome.toUpperCase(), serie1)
// console.log(serie2.nome.toUpperCase(), serie2)
// console.log(serie3.nome.toUpperCase(), serie3)

//Imprimir média das temporadas
//const media = (serie1.temporadas + serie2.temporadas + serie3.temporadas) / 2;
//console.log("A média de temporadas é:", media)

//console.log("As séries 1, 2 e 3 continuam sendo produzidas?", serie1.producao && serie2.producao && serie3.producao)

//----------------------------------------------


const todasAsSeries = [];

if ((serie1 !== serie2) !== serie3) {
  todasAsSeries.push(serie1, serie2, serie3);
} else {
  console.log(alert("Sua série ainda não foi adicionada"));
}

console.log(todasAsSeries);

//----------------------------------------------

//  for (i in todasAsSeries){
//    console.log(todasString[i])
// }


// for (let i in todasAsSeries){
//   todasAsSeries[i].genero = todasAsSeries[i].genero.toString()
// }


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
// todasStrings(serie6)


function encontraSerie (array, string){
  const buscaSerie = array.filter((elemento) => {
      if(elemento.nome === string){
          return elemento
   }
 })
   if(buscaSerie.length === 0){
      alert("Série não encontrada")
  }else{
      console.log(buscaSerie);
  }
}

encontraSerie(todasAsSeries, "The Big Bang Theory")

//----------------------------------------------

function adicionaSerie (){
  adicionaSerie = document.createElement("<li>")

}



