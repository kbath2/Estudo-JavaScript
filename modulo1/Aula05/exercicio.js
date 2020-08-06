const nome = "Julio";
const sobrenome = "Anderson";
let idade = 29;
let peso = 84;
const altura = 1.8;
let anoAtual = 2020;

let anoNascimento = idade - anoAtual
let imc = (altura * altura) / peso

console.log(`
    ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
    tem ${altura} de altura e seu IMC é de ${imc}
    ${nome} nasceu no ano de ${anoNascimento}

`)