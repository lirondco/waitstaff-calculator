import store from './store.js';
import render from './render.js';
import calculator from './caclulator.js';

const handleCalculate = function() {
    $('.calculator-form').submit(event => {
        event.preventDefault();
        calculator.calculateValues();
        $('.calculator-form')[0].reset();
        render.renderPage();
    });
}

const handleReset = function() {
    $('.reset-all').click(event => {
        store.subtotal = 0;
        store.total = 0;
        store.tip = 0;
        store.totalEarnings.tipTotal = 0;
        store.totalEarnings.mealCount = 0;
        store.totalEarnings.average = 0;
        render.renderPage();
    });
}



export default {
    handleCalculate,
    handleReset
}