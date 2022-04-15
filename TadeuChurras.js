function fechar()
{
    document.getElementById("dadoscardapio1").style.visibility="hidden";
    document.getElementById("dadoscardapio2").style.visibility="hidden";
    document.getElementById("dadoscardapio3").style.visibility="hidden";

}

function show_cardapio1()
{
    document.getElementById("dadoscardapio1").style.visibility="visible";
}

function show_cardapio2()
{
    document.getElementById("dadoscardapio2").style.visibility="visible";
}

function show_cardapio3()
{
    document.getElementById("dadoscardapio3").style.visibility="visible";
}

let visibilidade = true;
function fecharExibir(){
    if(visibilidade){
        document.querySelector("header").style.display="none";
        visibilidade = false;
    }else{
        document.querySelector("header").style.display="block";
        visibilidade = true;
    }
}
