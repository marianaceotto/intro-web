//PROJETO INTRODUÇÃO A WEB
//FILMES/SÉRIES

const serie1 = {
     nome: "A Maldição",
     ano: 2018,
     temporadas: 2,
     producao: false,
     genero: ["Terror", "Drama", "Ficção Supernatural"]
 }

const serie2 = {
     nome: "Criminal Minds",
     ano: 2005, 
     temporadas: 15,
     producao: false,
     genero: ["Drama", "Policial", "Suspense", "Ação"]
}

const serie3 = {
    nome: "The Big Bang Theory",
     ano: 2007,
    temporadas: 12,
    producao: false,
    genero: ["Comédia","Sitcom"]
}

console.log(serie1.nome.toUpperCase(), serie1)
console.log(serie2.nome.toUpperCase(), serie2)
console.log(serie3.nome.toUpperCase(), serie3)

//Imprimir média das temporadas
const media = (serie1.temporadas + serie2.temporadas + serie3.temporadas) /2
console.log("A média de temporadas é:", media)


console.log("As séries 1, 2 e 3 continuam sendo produzidas?", serie1.produçao && serie2.produçao && serie3.produçao)



