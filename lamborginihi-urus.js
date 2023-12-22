let dinheiro = 0;
let valorLamborginihiUrus = 4095000;


function ArmazenarDinheiro() {
    numero = Number(document.getElementById('dinheiro').value)
    dinheiro += numero;
    

    console.log(dinheiro)
    document.getElementById('sobra').innerHTML ="R$" + dinheiro;

}

function comprar() {

    if (dinheiro >= valorLamborginihiUrus) {
        dinheiro = dinheiro - valorLamborginihiUrus;
        alert("A compra foi realizada com sucesso , Obrigado por confiar em nossa em empresa. Como agradecimento enviaremos um par de rodas junto com o carro :)")

        document.getElementById('sobra').innerHTML = "R$" + dinheiro;

    } else {
        alert('Saldo Insuficiente')
    }

}



function box1() {
    valorLamborginihiUrus = 409509500;
    document.getElementById('valor').innerHTML = "R$ 4.095.095,00";
    document.getElementById('carro').innerHTML = "LAMBORGHINI URUS, PURPLE ";
}

function box2() {
    valorLamborginihiUrus = 409504000;
    
    document.getElementById('valor').innerHTML = "R$ 4.095.040,00";
    document.getElementById('carro').innerHTML = "LAMBORGHINI URUS, WHITE  ";
}

function box3() {
    valorLamborginihiUrus = 409506500;
    document.getElementById('valor').innerHTML = "R$ 4.095.065,00";
    document.getElementById('carro').innerHTML = "LAMBORGHINI URUS, BLACK ";
}


