let dinheiro = 0;
let valorFerrariSpider = 4396000;




function ArmazenarDinheiro() {
    numero = Number(document.getElementById('dinheiro').value)
    dinheiro += numero;
    

    console.log(dinheiro)
    document.getElementById('sobra').innerHTML ="R$" + dinheiro;

}

function comprar() {

    if (dinheiro >= valorFerrariSpider) {
        dinheiro = dinheiro - valorFerrariSpider;
        alert("A compra foi realizada com sucesso , Obrigado por confiar em nossa em empresa. Como agradecimento enviaremos um par de rodas junto com o carro :)")

        document.getElementById('sobra').innerHTML = "R$" + dinheiro;

    } else {
        alert('Saldo Insuficiente')
    }

}



function box1() {
    valorFerrariSpider = 439600000;
    document.getElementById('valor').innerHTML = "R$ 4.396.000,00";
    document.getElementById('carro').innerHTML = "Ferrari F8 SPIDER , RED ";
    console.log(valorFerrariSpider)
}

function box2() {
    valorFerrariSpider = 439600000;
    document.getElementById('valor').innerHTML = "R$ 4.396.000,00";
    document.getElementById('carro').innerHTML = "Ferrari F8 SPIDER, YELLOW ";
    console.log(valorFerrariSpider)
}

function box3() {
    valorFerrariSpider = 439600000;
    document.getElementById('valor').innerHTML = "R$ 4.396.000,00";
    document.getElementById('carro').innerHTML = "Ferrari F8 SPIDER, GRAY ";
    console.log(valorFerrariSpider)
}


