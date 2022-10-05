//PROJETO INTRODUÇÃO A WEB
//FILMES/SÉRIES

const serie1 = {
  nome: "A Maldição",
  ano: 2018,
  temporadas: 2,
  producao: false,
  genero: ["Terror", "Drama", "Ficção Supernatural"],
  foto: "link"
};

const serie2 = {
  nome: "Criminal Minds",
  ano: 2005,
  temporadas: 15,
  producao: false,
  genero: ["Drama", "Policial", "Suspense", "Ação"],
  foto: "link"
};

const serie3 = {
  nome: "The Big Bang Theory",
  ano: 2007,
  temporadas: 12,
  producao: false,
  genero: ["Comédia", "Sitcom"],
  foto: "link"
};

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

// for (lei i in todasAsSeries){
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


function encontraSerie(array, string){
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