const form = document.querySelector('form');
const addTotalCBM = document.querySelector('.cbm__total__numb');
const ratePesoTotal = document.querySelector('.ratePesoTotal');

form.addEventListener('submit', event => {
	event.preventDefault();

	let totalPesoRate;

	// Total CBM
	const inputValues = form.length.value * form.width.value * form.height.value;

	const dividedTotalValues = inputValues / 1000000;

	addTotalCBM.textContent = `${dividedTotalValues}`;

	// Total Weigth
	const pricePerWeight = 30;

	const weightValue = form.weight.value;

	const sumWeight = weightValue * pricePerWeight;

	// Checking Conditions for CBM and Price Rate
	if (dividedTotalValues < 0.2 && weightValue < 500) {
		ratePesoTotal.textContent = `${(totalPesoRate = 2500).toLocaleString()}`;
	} else if (dividedTotalValues < 0.2 && weightValue >= 500) {
		ratePesoTotal.textContent = `${(totalPesoRate = sumWeight).toLocaleString()}`;
	} else if (dividedTotalValues > 0.2 && weightValue < 500) {
		ratePesoTotal.textContent = `${(totalPesoRate =
			dividedTotalValues * 11500).toLocaleString()}`;
	} else if (dividedTotalValues > 0.2 && weightValue > 500) {
		ratePesoTotal.textContent = `${(totalPesoRate = sumWeight).toLocaleString()}`;
	} else {
		return totalPesoRate;
	}

	console.log(result);
});
