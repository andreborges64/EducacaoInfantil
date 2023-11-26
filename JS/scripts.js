/**  
    ** Faculdade de Tecnologia de Lins Prof. Antônio Seabra
    ** Autor: André Luiz Silva Dias Borges

    Lógica de Programação Referente a página index.html
*/

// Posicão do Scroll na página
let posicaoScrollInicial = window.pageYOffset;

function iniciarSite(){
    matriculaClick();
    posicaoScrollInicial = window.pageYOffset;
}

// Captura o evento de rolagem na janela
window.onscroll = function() {
  // Posição atual do scroll do scroll após a rolagem
  let posicaoScrollAtual = window.pageYOffset;

  // Condição pra ativar a animação de rolagem
  if (posicaoScrollInicial > posicaoScrollAtual) {
    document.getElementById("chamada").style.top = "0";
    document.getElementById("navbar").style.top = "4rem";
  } else {
    document.getElementById("chamada").style.top = "-4rem";
    document.getElementById("navbar").style.top = "0";
  }
  // Atualiza o valor do scroll
  posicaoScrollInicial = posicaoScrollAtual;
}

function itemMenuClick(aba){

    /** // Por algum motivo o for não ta funcionando com a lista de elementos 
     * let abas = document.getElementsByClassName("aba"); 
     * console.log(abas);
     * 
     * 
    // For que lê as abas retornadas pelo getElementByClassName (NÃO Funciona)
    
    for(let i = 0; i > abas.length; i++){
        abas[i].style.display = "none";
        console.log("UE");
    } 
    
    */ 
    // Lista de abas do site
    let abas = ["matricula", "localizacao", "quem-somos", "servicos", "galeria"];
    
    // Elemento da aba selecionada no HTML
    abaHTML = document.getElementById(aba);
   
    // Esconde todo o conteúdo do site
    for(i = 0; i < abas.length; i++ ){
        document.getElementById(abas[i]).style.display = "none";;
    }

    /**  
        // Resolvido com o for acima
        document.getElementById("matricula").style.display="none";
        document.getElementById("localizacao").style.display="none";
        document.getElementById("quem-somos").style.display="none";
        document.getElementById("servicos").style.display="none";
        document.getElementById("galeria").style.display="none"; 
    */
    
    // Mostra o conteúdo clicado
    abaHTML.style.display="flex";

}
function matriculaClick(){
    itemMenuClick("matricula");
}
function localizacaoClick(){
    itemMenuClick("localizacao");
}
function identidadeClick(){
    itemMenuClick("quem-somos");
}
function servicosClick(){
    itemMenuClick("servicos");
}
function galeriaClick(){
    // Alterar a visibilidade da galeria (remover hidden)
    itemMenuClick("galeria");
}

function enviarCadastro(){
    document.getElementById("botao-enviar").disabled = true;
    document.getElementById("botao-enviar").innerHTML = "Indisponível";

}