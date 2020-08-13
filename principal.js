function calculaIc(){
var sexo = document.ic.genero.value;
var peso = document.ic.peso.value;
var altura = document.ic.altura.value;
var cintura  = document.ic.cintura.value;
var ic = (cintura/100) /(0.109 * Math.sqrt((peso/altura)));
if(sexo = "Homem" && ic >= 1.25 ){
    
    document.getElementById('resultado').innerHTML = `Seu resultado foi `+ic.toFixed(2)+'você possui alto risco de doenças coronarianas' ;
}

else {
    document.getElementById('resultado').innerHTML = `Seu resultado foi `+ic.toFixed(2)+'você  não possui alto risco de doenças coronarianas';
}

if(sexo ="Mulher" && ic >= 1.18){

    document.getElementById('resultado').innerHTML = `Seu resultado foi `+ic.toFixed(2)+'você possui alto risco de doenças coronarianas' ;

}
else{

    document.getElementById('resultado').innerHTML = `Seu resultado foi `+ic.toFixed(2)+' você  não possui alto risco de doenças coronarianas' ;


}
    
}