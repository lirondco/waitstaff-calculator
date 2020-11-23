import store from './store.js';

const calculateValues = function() {
    const mealPrice = parseFloat($('.meal-price').val(), 10);
        const taxPercent = parseFloat($('.tax-rate').val(), 10);
        const tipPercent = parseFloat($('.tip-percent').val(),10);
        store.subtotal = mealPrice + (mealPrice * (taxPercent / 100));
        store.tip = mealPrice * (tipPercent / 100);
        store.total = store.subtotal + store.tip;
        store.totalEarnings.tipTotal += store.tip;
        store.totalEarnings.mealCount++;
        store.totalEarnings.average = store.totalEarnings.tipTotal / store.totalEarnings.mealCount;
};

export default {
    calculateValues
};