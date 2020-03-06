const ariel = {
  bacana: {
    tipo: {
      idTipo: {
        outroValor: 10
      }
    }
  }
}

// Transforma o objeto em [par,valor]
const keys = Object.entries(ariel)
const str = [] // Recebe os items da iteração do objeto

const itera = obj => {
  obj.map(item => {
    item.map(subitem => {
      if (typeof subitem === 'string' || !isNaN(subitem)) {
        if (!str.some(x => x === subitem)) {
          str.push(subitem)
        }
      }
      if (typeof subitem === 'object') {
        const keys = Object.entries(subitem)
        itera(keys)
      }
    })
  })
  const nstr = str.join('.') // recebe o array unindo com ponto (.)
  const lastDot = nstr.lastIndexOf('.')// verifica o último ponto da string
  const pathString = String(nstr).substr(0, lastDot) // remove a última parte da string contendo o resultado final do objeto
  return pathString // retorna a string
}

console.log(itera(keys))