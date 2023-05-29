class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca,cor,gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }
    calcularGasto(distancia, precoCombustivel){
        return (distancia * this.gastoMedioPorKM)*precoCombustivel;
    }
}

const palio = new Carro('fiat', 'preta', 1/10)
const uno = new Carro('fiat','prata',1/12 )

const Viagem = uno.calcularGasto(70, 5);

console.log(Viagem.toFixed(2));
console.log(palio.calcularGasto(70, 5));