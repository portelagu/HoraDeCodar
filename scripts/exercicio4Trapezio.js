//Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

var baseMaior = prompt("Digite o valor da base maior: ");
var baseMenor = prompt("Digite o valor da base menor: ")
var altura = prompt("Digite o valor da altura: ");
var area = (baseMaior + baseMenor) * altura / 2;
alert("A área do losango é: " + area);