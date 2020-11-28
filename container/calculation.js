const form = document.querySelector('form');
const addTotalCBM = document.querySelector('.total__numb');
const ratePesoTotal = document.querySelector('.ratePesoTotal');

form.addEventListener('submit', event => {
	event.preventDefault();

	let totalPesoRate;

	// Total CBM
	const inputValues = form.length.value * form.width.value * form.height.value;

	const dividedTotalValues = inputValues / 1000000;

	addTotalCBM.innerHTML = `<span>${dividedTotalValues} CBM</span>`;

	// Total Weigth
	const pricePerWeight = 30;

	const weigthValue = form.weight.value;

	const sumWeight = weigthValue * pricePerWeight;

	// Checking Conditios for CBM and Price Rate
	dividedTotalValues < 0.125 && weigthValue < 500
		? (ratePesoTotal.textContent = `${(totalPesoRate = 2500)}`)
		: dividedTotalValues < 0.125 && weigthValue > 500
		? (ratePesoTotal.textContent = `${(totalPesoRate = 2500 + sumWeight)}`)
		: dividedTotalValues > 0.125 && weigthValue < 500
		? (ratePesoTotal.textContent = `${(totalPesoRate =
				divideTotalValues * 11500)}`)
		: dividedTotalValues > 0.125 && weigthValue > 500
		? (ratePesoTotal.textContent = `${(totalPesoRate =
				divideTotalValues * 11500 * sumWeight)}`)
		: totalPesoRate;
});
