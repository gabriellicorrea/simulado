function validaEmail(str){
    var padrao = /[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,}(\.[a-z0-9]{2,})?/;
    
     if(padrao.test(str)==true){
        alert("Email valido ")
    }
    else{
        alert("Email invalido")
    }
    return padrao.test(str);
   
}


function teste(){
    document.write(validaEmail("gabrielli@fatec.com.br"));
    
}



/*Um e-mail  ́e v ́alido se este possuir pelo menos um @ e pelo menos um ponto ap ́os dois caract ́eres posteriores.
Implemente uma fun ̧c ̃ao que receba por parˆametro uma string e retorne se esta  ́e um e-mail v ́alido ou n ̃ao.*/