
const a = [1,2,3]
const b = [2,3,4]



let parent = a.map(function(value,indice ) {
  return value*b[indice]
}); 

let parent2 = a.map((value,indice ) => value*b[indice])




console.log(parent)
console.log(parent2)


