// Сайт розроблено студентом Дмитром Ткаченком, група ФЕМП5-9з
const insuranceRates = {
    auto: 0.05,
    medical: 0.03,
    life: 0.04,
    property: 0.02
};

const typeSelect = document.getElementById('insuranceType');
const termInput = document.getElementById('term');
const sumInput = document.getElementById('sum');
const costSpan = document.getElementById('cost');

function calculateCost() {
    const type = typeSelect.value;
    const term = parseFloat(termInput.value);
    const sum = parseFloat(sumInput.value);
    const rate = insuranceRates[type];
    const total = sum * rate * term;
    costSpan.textContent = total.toFixed(2);
}

typeSelect.addEventListener('input', calculateCost);
termInput.addEventListener('input', calculateCost);
sumInput.addEventListener('input', calculateCost);

calculateCost();
