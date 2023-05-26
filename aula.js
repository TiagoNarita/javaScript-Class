
function calcularimc (peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    } else if(imc >=18.5 && imc < 25 ) {
        return'Peso normal';
    }else{
        return 'acima do peso';
    }
}

function main (){
const peso = 75
const altura = 1.75
const imc = calcularimc(peso,altura);
console.log(imc.toFixed(2));
console.log(classificarImc(imc));
}

main();