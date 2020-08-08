<?php
$peso = $_POST['peso'];
$altura = $_POST['altura'];
$cintura  = $_POST['cintura'];
$ic = $cintura/(0.109*sqrt($peso/$altura));
echo $ic
?>  