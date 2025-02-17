let processamento = 0

function includes(string, item){
    for (let char of string){
        processamento++;
        if (char === item){
            return true
        }
    }
    return false
}

function replace(string, oldString, newString){
    let newWord = ''
    for (let index in string){
        processamento++;
        if (string[index] === oldString){
            newWord += newString
        }else{
            newWord += string[index]
        }
    }
    return newWord
}

const texto = "'Eric, Calvin, & Aaron react to and discuss the official trailer for Marvel Television's Daredevil: Born Again - #Daredevil #BornAg'"
const old = '#'
const new_ = 'o'

// if (includes(texto,old)){
// }
const resposta = replace(texto,old,new_)
console.log(resposta)

console.log('Quantidade de processamento: ', processamento)