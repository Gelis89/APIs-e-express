const fs = require('fs')

function callback(erro){
    if (erro){

    } else{

    }
}


class Pessoas{
    constructor(nome, cargo, idade){
        this.nome = nome
        this.cargo = cargo
        this.idade = idade
    }

    arquivar(){
        
        const informacao = `${this.nome},  ${this.cargo} ` 
        fs.appendFile('usuario.txt', informacao, 'utf8', callback)
    }
}


let humano = new Pessoas('marco' , 'motorista')
humano.arquivar()


