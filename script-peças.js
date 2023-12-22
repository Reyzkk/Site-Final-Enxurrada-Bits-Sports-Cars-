
const elMenuComprar = document.querySelector('.container-comprar');
const elExit = document.querySelector('#exit');
const botao = document.querySelectorAll('#list-button #item-slot');
const localImagem = document.querySelector('#imagem')
const LocalTitulo = document.querySelector('#item-name')

const arrayNames = [
    'PNEU 305/30 R21 PIRELLI PZERO NA1 100Y PORSCHE 911 - 992', 
    'VOLANTE ESPORTIVO BMW SERIE TYPE EM ALCANTRA Vo6', 
    'AEROFOLIO E ASAS PARA FERRARI 488 (FIBRA DE CARBONO)', 
    'PORSCHE 911 997, SPOILER TRASEIRO EM FIBRA DE CARBONO ESTILO GT3', 
    'ABAFADOR ESCAPAMENTO ESPORTIVO LUZIAN LA018 DOUBLE BLUE PONTEIRA DUPLA BURNED TIP INOX 4POL', 
    "Bateria De Alta Tensão Porsche Taycan 2020 2021 2022",
];

const botaoComprar = document.querySelector('#botao-comprar')
const LocalEstoque = document.querySelector('#stock')
const LocalDinheiro = document.querySelector('#add-money')

let dinheiro = 0;



LocalDinheiro.addEventListener('click', ()=> {
  
    dinheiro +=Number(prompt('Digite o Valor que deseja Retirar'));

})

const LocalValue = document.querySelector('#item-value')

const ObjStockValue = {
    estoquePneu: 5,
    estoqueVolante: 3,
    estoqueSpoilerF: 4,
    estoqueSpoilerP: 6,
    estoqueEscapamento: 10,
    estoqueBateriaP: 3,
}

const ObjProdutosValue = {
    pneu: 5736.99,
    volante: 2999.99,
    spoilerFerrari: 12380.99,
    spoilerPorsche: 6443.16,
    escapamento: 1235.60,
    bateriaPorsche: 12219.99,
}



elMenuComprar.style.display = "none"

elExit.addEventListener('click', () => {
    elMenuComprar.style.display = "none"
    location.reload()
    
})

botao[0].addEventListener('click', () => {
    document.querySelector('#list-button').remove()

    LocalTitulo.innerHTML = arrayNames[0]
    localImagem.src = "https://http2.mlstatic.com/D_NQ_NP_811702-MLB47492107844_092021-O.webp";
    elMenuComprar.style.display = "flex"
    LocalValue.innerHTML = "R$ " + ObjProdutosValue.pneu
    LocalEstoque.innerHTML = ObjStockValue.estoquePneu
    botaoComprar.addEventListener('click', () => {


        if (dinheiro >= ObjProdutosValue.pneu && ObjStockValue.estoquePneu > 0) {
            dinheiro = dinheiro - ObjProdutosValue.pneu
            alert('A Compra foi Realizada com Sucesso !' + dinheiro.toFixed(2))

            ObjStockValue.estoquePneu--
            LocalEstoque.innerHTML = ObjStockValue.estoquePneu
        } else if (ObjStockValue.estoquePneu == 0) {
            alert('O Estoque Acabou :( ' + ObjStockValue.estoquePneu)

        }
        else {
            alert('A Compra Foi Negada !')

        }

    })

})




botao[1].addEventListener('click', () => {
    document.querySelector('#list-button').remove()
    LocalTitulo.innerHTML = arrayNames[1]
    localImagem.src = "https://http2.mlstatic.com/D_NQ_NP_793880-MLB69716568247_052023-O.webp";
    elMenuComprar.style.display = "flex"
    LocalEstoque.innerHTML = ObjStockValue.estoqueVolante
    LocalValue.innerHTML = "R$ " + ObjProdutosValue.volante

    botaoComprar.addEventListener('click', () => {
        if (dinheiro >= ObjProdutosValue.volante && ObjStockValue.estoqueVolante > 0) {
            dinheiro = dinheiro - ObjProdutosValue.volante
            alert('A Compra foi Realizada com Sucesso !' + dinheiro.toFixed(2))

            ObjStockValue.estoqueVolante--
            LocalEstoque.innerHTML = ObjStockValue.estoqueVolante
        } else if (ObjStockValue.estoqueVolante == 0) {
            alert('O Estoque Acabou :( ' + ObjStockValue.estoqueVolante)

        }
        else {
            alert('A Compra Foi Negada !')

        }

    })


})



botao[2].addEventListener('click', () => {
    document.querySelector('#list-button').remove()
    LocalTitulo.innerHTML = arrayNames[2]
    localImagem.src = "https://i.ebayimg.com/images/g/ZYYAAOSw1~xjnfKi/s-l1200.jpg";
    elMenuComprar.style.display = "flex"
    LocalEstoque.innerHTML = ObjStockValue.estoqueSpoilerF
    LocalValue.innerHTML = "R$ " + ObjProdutosValue.spoilerFerrari

    botaoComprar.addEventListener('click', () => {
        if (dinheiro >= ObjProdutosValue.spoilerFerrari && ObjStockValue.estoqueSpoilerF > 0) {
            dinheiro = dinheiro - ObjProdutosValue.spoilerFerrari
            
            alert('A Compra foi Realizada com Sucesso !' + dinheiro.toFixed(2))

            ObjStockValue.estoqueSpoilerF--
            LocalEstoque.innerHTML = ObjStockValue.estoqueSpoilerF
        } else if (ObjStockValue.estoqueSpoilerF == 0) {
            alert('O Estoque Acabou :( ' + ObjStockValue.estoqueSpoilerF)

        }
        else {
            alert('A Compra Foi Negada !')

        }

    })


})



botao[3].addEventListener('click', () => {
    document.querySelector('#list-button').remove()
    LocalTitulo.innerHTML = arrayNames[3]
    localImagem.src = "https://wisemotorsports.eu/wp-content/uploads/2020/10/1-8.png";
    elMenuComprar.style.display = "flex"
    LocalEstoque.innerHTML = ObjStockValue.estoqueSpoilerP
    LocalValue.innerHTML = "R$ " + ObjProdutosValue.spoilerPorsche

    botaoComprar.addEventListener('click', () => {
        if (dinheiro >= ObjProdutosValue.spoilerPorsche && ObjStockValue.estoqueSpoilerP > 0) {
            dinheiro = dinheiro - ObjProdutosValue.spoilerPorsche
            alert('A Compra foi Realizada com Sucesso !' + dinheiro.toFixed(2))

            ObjStockValue.estoqueSpoilerP--
            LocalEstoque.innerHTML = ObjStockValue.estoqueSpoilerP
        } else if (ObjStockValue.estoqueSpoilerP == 0) {
            alert('O Estoque Acabou :( ' + ObjStockValue.estoqueSpoilerP)

        }
        else {
            alert('A Compra Foi Negada !')

        }

    })


})





botao[4].addEventListener('click', () => {
    document.querySelector('#list-button').remove()
    LocalTitulo.innerHTML = arrayNames[4]
    localImagem.src = "https://31b93296e4855c6e.cdn.gocache.net/loja/imagens/full/abafador-inox-saida-dupla-burned-tip-luzian-la0182.png";
    elMenuComprar.style.display = "flex"
    LocalEstoque.innerHTML = ObjStockValue.estoqueEscapamento
    LocalValue.innerHTML = "R$ " + ObjProdutosValue.escapamento

    botaoComprar.addEventListener('click', () => {
        if (dinheiro >= ObjProdutosValue.escapamento && ObjStockValue.estoqueEscapamento > 0) {
            dinheiro = dinheiro - ObjProdutosValue.escapamento
            alert('A Compra foi Realizada com Sucesso !' + dinheiro.toFixed(2))

            ObjStockValue.estoqueEscapamento--
            LocalEstoque.innerHTML = ObjStockValue.estoqueEscapamento
        } else if (ObjStockValue.estoqueEscapamento == 0) {
            alert('O Estoque Acabou :( ' + ObjStockValue.estoqueEscapamento)

        }
        else {
            alert('A Compra Foi Negada !')

        }

    })


})



botao[5].addEventListener('click', () => {
    document.querySelector('#list-button').remove()
    LocalTitulo.innerHTML = arrayNames[5]
    localImagem.src = "https://http2.mlstatic.com/D_621724-MLB69635301681_052023-B.jpg";
    elMenuComprar.style.display = "flex"
    LocalEstoque.innerHTML = ObjStockValue.estoqueBateriaP
    LocalValue.innerHTML = "R$ " + ObjProdutosValue.bateriaPorsche

    botaoComprar.addEventListener('click', () => {
        if (dinheiro >= ObjProdutosValue.bateriaPorsche && ObjStockValue.estoqueBateriaP > 0) {
            dinheiro = dinheiro - ObjProdutosValue.bateriaPorsche
            alert('A Compra foi Realizada com Sucesso !' + dinheiro.toFixed(2))

            ObjStockValue.estoqueBateriaP--
            LocalEstoque.innerHTML = ObjStockValue.estoqueBateriaP
        } else if (ObjStockValue.estoqueBateriaP == 0) {
            alert('O Estoque Acabou :( ' + ObjStockValue.bateriaPorsche)

        }
        else {
            alert('A Compra Foi Negada !')

        }

    })


})