import render from './render.js';
import handlers from './handlers.js';



const main = function () {
    handlers.handleCalculate();
    handlers.handleReset();
    render.renderPage();
}

$(main);