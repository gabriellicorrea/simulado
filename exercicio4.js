
/*exercicio7
Fa¸ca uma fun¸c˜ao que some os mu´ltiplos de 3 de um vetor passado via 
parˆametro, usando map/ﬁlter/reduce.

*/

function multiplos(numeros){
 numeros = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

//criei uma variavel usando .filter para filtrar os numeros do vetor que sao multiplos de 3
//depois peguei essa variavel e coloquei no .reduce somando com o acumulador.

 var tres = numeros.filter(number => number % 3 == 0) //usei o filter para filtrar os multiplos de 3
var somatres = tres.reduce((acc,cur)=> acc + cur) // usei reduce para somar os multiplos
     
     

   document.write(somatres)
    document.write(tres);
}




function multiplos7(numeros){
 numeros = [2,3,4,5,6,7,8,9,10,11,12,13,14];

var sete = numeros.filter(number => number % 7 == 0) //usei filter para filtrar os  multiplos de 7
var multiplica7 = sete.reduce((acc,cur)=> acc * cur) //usei reduce para multiplicar os multiplos
 
    
    document.write(multiplica7)
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



