class CalcController {

    constructor() {

        /**
         * O encapsulamento de atributos e métodos pode envolver 
         * três escopos:
         * 
         * -> public = todos conseguem acessar;
         * -> private = só é possível acessar dentro da classe (não existe em js
         * ainda);
         * -> protected = só é acessado dentro da classe ou por 
         * classes filhas (herança).
         * 
         */

        /**
         * No js, é possível pegar elementos html e transformar em objetos
         * pelo uso de dois comandos que servem ao mesmo propósito, mas de forma
         * distinta:
         * 
         * -> document.getElementById("<id>") (é só passar o id do elemento, 
         * sem #).
         * 
         * -> document.querySelector("<id>") (passar o id com #).
         * 
         * OLHAR ABAIXO...
         */

        
        // Convenciona-se usar El para indicar que é um elemento HTML.

        this._displayCalcEl = document.querySelector("#display"); 
        this._timeEl = document.querySelector("#hora");
        this._dateEl = document.querySelector("#data");

        this._locale = "pt-BR";
        this._currentDate;
        this._currentTime;

        /**
         * Como o javascript não possui encapsulamento privado, convenciona-se que
         * os atributos/métodos iniciados com underline _ são privados e só podem 
         * ser referenciados dentro da própria classe (como acima).
         */

        this.initialize(); // Veja que métodos da classe também recebem this.
    }

    /**
     * Como os atributos acima são privados, só podemos acessar seus valores
     * ou alterá-los a partir de métodos getters e setters, conforme abaixo:
     */

    initialize() {

        /**
         * Serve para inicializar coisas já quando a aplicação abrir.
         * 
         * 
         * DOM = Document (se refere à página em si, não ao navegador);
         *       Object (cada tag é um objeto)
         *       Model
         * 
         * Você consegue observar a árvore do DOM no console do navegador digitando
         * document ou, para uma visão de objeto, dir(document)
         * 
         * 
         * Já se você digitar window no console, serão retornados atributos e métodos
         * concernentes à janela do navegador
         */        

        
        /**
         * O .innerHTML é uma propriedade usada para elementos do DOM a fim
         * de inserir algum dado neles em formato HTML.
         */
                            
        this._displayCalcEl.innerHTML = "4567";
        this.setDisplayDateTime();


        /**
         * Para que o tempo atualize, usaremos a função setInterval(), que funciona assim:
         * -> ela recebe dois parametros: setInterval(função, tempo)
         * -> o tempo é em milissegundos;
         * -> ela executa a função a cada intervalo de tempo definido.
         */
        
        // A função setInterval é associada a um ID no navegador e pode ser guardada numa variável
        let interval = setInterval(() => {

            this.setDisplayDateTime();

        }, (1000));

        /**
         * Diferente de setInterval(), setTimeout executa apenas uma vez
         * uma função definida em seu escopo após AGUARDAR um período de
         * tempo (definido em ms). Veja:
         * 
         * A função abaixo irá parar a função interval acima depois de 10s.
         */

        setTimeout(() => {

            clearInterval(interval);

        }, (10000))


    }

    setDisplayDateTime() {

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long", // Fazemos isso para colocar o nome do mês POR EXTENSO...
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;

        /**
         * Perceba que o .innerHTML possui função dupla: tanto a de atribuir
         * valor a um elemento HTML como a de retornar o valor que o elemento
         * possui (olhar o console para calculator.js)
         */
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        this._currentDate = value;
    }

    get currentTime() {
        return new Date();
    }

    set currentTime(value) {
        this._currentTime = value;
    }

}