function calculaIc(){
var peso = document.ic.peso.value;
var altura = document.ic.altura.value;
var cintura  = document.ic.cintura.value;
var ic = (cintura/100) /(0.109 * Math.sqrt((peso/altura)));
alert(ic);
}