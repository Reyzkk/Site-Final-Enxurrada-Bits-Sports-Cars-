let dinheiro = 0;
let valorPorsche911 = 815000;




function ArmazenarDinheiro() {
    numero = Number(document.getElementById('dinheiro').value)
    dinheiro += numero;


    console.log(dinheiro)
    document.getElementById('sobra').innerHTML = "R$" + dinheiro;

}

function comprar() {

    if (dinheiro >= valorPorsche911) {
        dinheiro = dinheiro - valorPorsche911;
        alert("A compra foi realizada com sucesso , Obrigado por confiar em nossa em empresa. Como agradecimento enviaremos um par de rodas junto com o carro :)")

        document.getElementById('sobra').innerHTML = "R$" + dinheiro;

    } else {
        alert('Saldo Insuficiente')
    }

}



function box1() {
    valorPorsche911 = 819000;
    document.getElementById('valor').innerHTML = "R$ 819.000,00";
    document.getElementById('carro').innerHTML = "PORSCHE 911, GRAY ";
    console.log(valorPorsche911)
}

function box2() {
    valorPorsche911 = 816000;
    document.getElementById('valor').innerHTML = "R$ 816.000,00";
    document.getElementById('carro').innerHTML = "PORSCHE 911, RED ";
    console.log(valorPorsche911)
}

function box3() {
    valorPorsche911 = 817000;
    document.getElementById('valor').innerHTML = "R$ 817.000,00";
    document.getElementById('carro').innerHTML = "PORSCHE, BLACK ";
    console.log(valorPorsche911)
}


