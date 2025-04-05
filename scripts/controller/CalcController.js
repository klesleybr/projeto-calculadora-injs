class CalcController {

    constructor() {

        this._displayCalcEl = document.querySelector("#display"); 
        this._timeEl = document.querySelector("#hora");
        this._dateEl = document.querySelector("#data");

        this._locale = "pt-BR";
        this._currentDate;
        this._currentTime;

        this.initialize(); // Veja que métodos da classe também recebem this.
    }

    initialize() {
                            
        this._displayCalcEl.innerHTML = "4567";
        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, (1000));

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