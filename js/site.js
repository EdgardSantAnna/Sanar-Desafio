$(document).ready(function(){
    $("a[title=More]").click(function(event){
        event.preventDefault();
        $("html, body").animate({ 
            scrollTop: $(".Smartphone").offset().top 
        }, 500);
    });

    $(".Item_Informacoes a[title=down]").click(function(event){
        event.preventDefault();
        $(".Descricao_Extra").toggle(500);
    });

    $(".Listagem a[title=down]").click(function(event){
        event.preventDefault();
        $(".Listagem_More").toggle(500);
    });

    
}); 

