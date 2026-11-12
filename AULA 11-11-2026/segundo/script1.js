const botao = document.querySelector('button');
 
botao.style.position = "absolute";
/*
// Realizar o click no botão
botao.onclick = () => {
    alert("PARABÉNS!!! Você conseguiu");
}
*/
 
// Para criar eventos em um determinado elemento
// seleciono o tipo de evento e, depois, realizo uma ação
botao.addEventListener("click", () =>{
    alert("PARABÉNS!!! Você conseguiu");
});
 
 
// Colocar o mouse em cima do botão
botao.onmouseover = () => {
    // Fazer o botão sumir
    botao.style.visibility = "hidden";
 
    // top, left, bottom, right
    botao.style.left = Math.random() * 1000 + "px";
    botao.style.top = Math.random() * 500 + "px";
 
    // Fazer o botão reaparecer
    botao.style.visibility = "visible";
}