alert('Olá!!!')

/*
 objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente 

 - passo 1 - dar um jeito de pegar o elemento HTML dos botões

 - passo 2 -  darum jeito de indentificar o clique do usuário no botão 

 - passo 3 - desmarcar o botão selecionado anterior

 - passo 4 - marcar o botão clicado commo se estivesse selecionado 

 - passo 5 - esconder a imagem de fundo anterior 

 - passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado 

 */

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoescarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll('.imagem');
// passo 2 - dar um jeito de indentificar o clique do usuário no botão 
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

         //passo 3 - desmarcar o botão selecionado anterior
        const botaoselecionado = document.querySelector('.selecionado');
        botaoselecionado.classList.remove('selecionado');

        //passo 4 - marcar o botão clicado commo se estivesse selecionado

        botao.classList.add('selecionado');
        //passo 5 - esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        
       //passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
       imagens[indice].classList.add('ativa');
    })

})