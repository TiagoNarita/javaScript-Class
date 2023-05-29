class Pessoa {
    nome;
    peso;
    altura;
    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    CalcularIMC(){
        return  this.peso / (this.altura*this.altura)
    }

    ClassificarIMC(){
        const IMC = this.CalcularIMC();
        if (IMC < 18.5) {
            return 'abaixo do peso';
        } else if( IMC < 25 ) {
            return'Peso normal';
        }else{
            return'acima do peso';
        }
    }
}

const Jose = new Pessoa('jose',70,1.75)
console.log(Jose.CalcularIMC().toFixed(2))

const Renam = new Pessoa('Renan',63,1.75)
console.log(Renam.CalcularIMC().toFixed(2));

const Tiago = new Pessoa('tiago',72, 1.73)
console.log(Tiago.ClassificarIMC());