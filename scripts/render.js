import store from './store.js';

const renderPage = function() {
    let html = `<fieldset>
    <legend>Customer Charges</legend>
    <div class="right-top">
        <div id="column-1">
            <p>Subtotal</p>
                <p>Tip</p>
                <hr id="left-hr">
                    <p>Total</p>
        </div>
        <div id="column-2" class="charges-total">
            <p>${(Math.round(store.subtotal * 100) / 100).toFixed(2)}</p>
            <p>${(Math.round(store.tip * 100) / 100).toFixed(2)}</p>
            <hr id="right-hr">
            <p>${(Math.round(store.total * 100) / 100).toFixed(2)}</p>
        </div>
    </fieldset>
    <fieldset>
    <legend>My Earnings Info</legend>
    <div class="right-top">
        <div id="column-3">
            <p>Tip Total:</p>
                <p>Meal Count:</p>
                    <p>Average Tip Per Meal:</p>
        </div>
        <div id="column-4" class="charges-total">
            <p>${(Math.round(store.totalEarnings.tipTotal * 100) / 100).toFixed(2)}</p>
            <p>${store.totalEarnings.mealCount}</p>
            <p>${(Math.round(store.totalEarnings.average * 100) / 100).toFixed(2)}</p>
        </div>
    </fieldset>`
    $('.form-right').html(html);
}

export default {
    renderPage
};