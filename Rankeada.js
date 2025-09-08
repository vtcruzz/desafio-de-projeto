let qntVitorias = Math.floor(Math.random() * 301) + 1;
let qntDerrotas = Math.floor(Math.random() * (qntVitorias + 1));

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

function classificarNivel(saldo) {
    if (saldo <= 10) return "Ferro";
    else if (saldo <= 20) return "Bronze";
    else if (saldo <= 50) return "Prata";
    else if (saldo <= 80) return "Ouro";
    else if (saldo <= 90) return "Diamante";
    else if (saldo <= 100) return "Lendário";
    else return "Imortal";
}

let saldoVitorias = calcularSaldo(qntVitorias, qntDerrotas);
let nivel = classificarNivel(saldoVitorias);

console.log(`O herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`);