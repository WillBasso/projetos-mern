import { somar, subtrair, multiplicar, dividir } from "./calculadora.js";
import chalk from "chalk";

console.log(`Resultado da soma: ${somar(4,4)}`);
console.log(`Resultado da subtração: ${subtrair(8,4)}`);
console.log(`Resultado da multiplicação: ${multiplicar(4,3)}`);
console.log(`Resultado da divisão: ${dividir(9,3)}`);

console.log(chalk.green('Servidor funcionando com sucesso!'));
console.log(chalk.blue.bold('Bem-vindo ao estudo de Node.js'));