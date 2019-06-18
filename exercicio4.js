
/*exercicio7
Fa¸ca uma fun¸c˜ao que some os mu´ltiplos de 3 de um vetor passado via 
parˆametro, usando map/ﬁlter/reduce.

*/

function multiplos(){
const numeros = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
 var tres = numeros.filter(function (prevVal,x){
     return x % 3 == 0 + x
   
 });
  alert(tres)
    document.write(tres);
}
function multiplos7(){
    const numeros = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

var sete = numeros.filter(function(x){
    return x % 7 == 0
    
}); 
    document.write(sete);
    
}





























/*Sabe-se que o atributo children usado em um elemento do DOM retorna um array de elementos que s ̃ao seus
filhos. Fa ̧ca a fun ̧c ̃ao selFilho() e usando, obrigatoriamente, traversal funcional, selecione o primeiro e o ultimo
filho de todas as divs’s e mude suas cores, de fonte do conteudo texto, para azul. Neste exerc ́ıcio o uso de jQuery
 ́e proibido.*/
/*function teste(){
 var p = document.getElementById("d1");
 
    //div.style.backgroundColor = "red";
    //console.log(div.lastElementChild)
    //div.lastElementChild.style.backgroundColor = "blue";


 //var array = [1,2,3,4]
 var div2 = p.map(function(x){
     
     div.style.backgroundColor = "blue";
  //  if(element ===3){
    //    element = "gabi";
    //}
   return x;
 })
 

}*/



