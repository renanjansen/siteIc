function calculaIc(){
var sexo = document.ic.genero.value;
var peso = document.ic.peso.value;
var altura = document.ic.altura.value;
var cintura  = document.ic.cintura.value;
var ic = (cintura/100) /(0.109 * Math.sqrt((peso/altura)));
    
    document.getElementById('resultado').innerHTML = `Seu resultado foi `+ic.toFixed(2) ;

    alert(sexo).value//chamei o alerte para testar a variavel sexo
}