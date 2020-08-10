function calculaIc(){
var peso = document.ic.peso.value;
var altura = document.ic.altura.value;
var cintura  = document.ic.cintura.value;
var ic = cintura /(0.109*(peso/altura));
alert(ic);
}