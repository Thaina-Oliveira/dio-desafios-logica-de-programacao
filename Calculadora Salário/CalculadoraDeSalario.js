let seuSalario = 10000;

let percentual5 = 0.05;
let percentual10 = 0.10;
let percentual15 = 0.15;

let novoSalario = ""

if(seuSalario <= 1100){
    novoSalario = Math.abs((seuSalario * percentual5) - seuSalario);
}
else if(seuSalario <= 2500) {
    novoSalario = Math.abs((seuSalario * percentual10) - seuSalario);
}
else {
    novoSalario = Math.abs((seuSalario * percentual15) - seuSalario);
}
console.log("Seu sálario é de: R$" + novoSalario);