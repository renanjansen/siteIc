function cauculaIc(){
var peso = document.getElementsByName('peso').values;
var altura = document.getElementsByName('altura').values;
var cintura  = document.getElementsByName('cintura').values;
var ic = cintura/(0.109*sqrt(peso/altura));
alert(ic)
}