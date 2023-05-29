class Pessoa {   
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome; 
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade; 
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos e nasci em ${this.anoDeNascimento}`);
    }
}


function compararPessoas(p1,p2) {
    if(p1.idade>p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`);

    }else if (p2.idade>p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`);
    }else {
        console.log(`${p1.nome} tem a mesma idade que ${p2.nome}`);
    }
}

const vitor = new Pessoa ('vitor',25);

const renam = new Pessoa('renan', 30);

xcompararPessoas(renam,vitor);