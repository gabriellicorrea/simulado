/*Considere uma div de id d1. Implemente uma funcao chamada montagem(xs), que recebe uma lista de strings
xs por parametro e com ele, deve ser montado uma lista ñao ordenada (ul) na ṕagina (uma palavra por li). A
ul criada deve ser filha da div citada.*/

function montagem(xs){
    xs = "ola mundo";
    
    var div = document.querySelector("#d1")
    var ul = document.createElement("ul");
   
        var li = document.createElement("li");
        li.innerHTML = xs.split("");
        ul.appendChild(li);
        div.appendChild(ul);
        
        
   
    return xs;
    
}
 