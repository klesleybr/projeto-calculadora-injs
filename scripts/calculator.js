/**
 * é recomendável usar window.<variavel>, pois você consegue acessar o 
 * objeto a partir do terminal do navegador.
 * 
 * Mas pode-se usar let calculator = new CalcController();
 */

window.calculator = new CalcController(); // Instancia CalcController

console.log(calculator.displayCalc); // como usar o método get
// log: 0

calculator.displayCalc = "12"; // como usar o método set

console.log(calculator.displayCalc); // como usar o método get
// log: não é um número

/**
 * Aparentemente, no código principal, getters e setters não são tratados
 * como funções em si.
 */
