let dinheiro = 0;
let valorHuracan = 5227218;




function ArmazenarDinheiro() {
    numero = Number(document.getElementById('dinheiro').value)
    dinheiro += numero;


    console.log(dinheiro)
    document.getElementById('sobra').innerHTML = "R$" + dinheiro;

}

function comprar() {

    if (dinheiro >= valorHuracan) {
        dinheiro = dinheiro - valorHuracan;
        alert("A compra foi realizada com sucesso , Obrigado por confiar em nossa em empresa. Como agradecimento enviaremos um par de rodas junto com o carro :)")

        document.getElementById('sobra').innerHTML = "R$" + dinheiro;

    } else {
        alert('Saldo Insuficiente')
    }

}



function box1() {
    valorHuracan = 5227218;
    document.getElementById('valor').innerHTML =  "R$ 5.227.218,00";
    document.getElementById('carro').innerHTML = "Lamborgihini, Purple";
    console.log(valorHuracan)
}

function box2() {
    valorHuracan = 5227218;
    document.getElementById('valor').innerHTML =  "R$ 5.227.218,00";
    document.getElementById('carro').innerHTML = "Lamborgihini, Orange";
    console.log(valorHuracan)
}

function box3() {
    valorHuracan = 5227218;
    document.getElementById('valor').innerHTML = "R$ 5.227.218,00";
    document.getElementById('carro').innerHTML = "Lamborgihini, Green";
    console.log(valorHuracan)
}


