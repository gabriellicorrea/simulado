/*Em uma caixa de texto, uma cor deve ser digitada. Ao clicar em um bot̃ao de id b1, a cor de fundo da caixa
deve ser mudada conforme a cor digitada. As cores posśıveis s̃ao: Preto, Branco, Azul, Vermelho e Verde. Se a
cor digitada ñao for nenhuma das citadas, a caixa devera ficar na cor amarela. Use jQuery.*/


$(teste)
function teste(){
    
    $("#b1, input:text").click(function(){
    var texto = (this).val();
    if(texto == "preto")
        $("input:text").css("backgrondColor", "black")
    
    });
    $("#b1, input:text").click(function(){
        var texto = (this).val();
        if(texto == "branco")
        $("input:text").css("backgrondColor","white")
        
    });
    
     $("#b1, input:text").click(function(){
        var texto = (this).val();
        if(texto == "azul")
        $("input:text").css("backgrondColor","blue")
        
    });
    
    $("#b1, input:text").click(function(){
        var texto = $(this).val();
        if(texto == "vermelho")
            $("input:text").css("backgroundColor","red");
    })
    $("#b1, input:text").click(function(){
        var texto = $(this).val();
        if(texto == "verde")
            $("input:text").css("backgroundColor","green");
    })
    $("#b1, input:text").click(function(){
        var texto = $(this).val();
        if(texto != "preto,branco,azul,vermelho,verde")
            $("input:text").css("backgroundColor","yellow");
    })
    
}
alert("oii")