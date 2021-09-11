const form = document.querySelector('form');
const addTotalCBM = document.querySelector('.cbm__total__numb');
const addTotalWeight = document.querySelector('.total__weight__numb');
const ratePesoTotal = document.querySelector('.ratePesoTotal');

const style =
	'color: orangered; font-weight: bold;  -webkit-text-stroke: 1px black; font-size:30px;';

console.log(
	'%cBOSSCargo Philippines is happy to have you as our customer! ',
	style
);

form.addEventListener('submit', event => {
	event.preventDefault();

	// Multiply Total Rate * Total Package
	const totalPackage = form.totalPackage.value;

	// Total CBM
	const inputValues = form.length.value * form.width.value * form.height.value;

	const dividedTotalValues = inputValues / 1000000;

	const res = `${dividedTotalValues * totalPackage}`;

	addTotalCBM.textContent = `${res}`;

	// Total Weight
	const totalWeight = form.weight.value;

	addTotalWeight.textContent = `${totalWeight * totalPackage}`;

	// Threshold
	const threshold = 475;

	// Sum of the KG/CBM
	const sumKgCBM = dividedTotalValues * threshold;

	// Fixed CBM Rate
	const cbmRate = 10250;

	// Total Weight by cm
	const pricePerWeight = 25;

	const weightValue = form.weight.value;

	const sumWeight = weightValue * pricePerWeight;

	const divSum = weightValue / dividedTotalValues;

	// Checking Conditions for CBM and Price Rate

	if (res < 0.2 && weightValue >= sumKgCBM) {
		ratePesoTotal.textContent = `${(
			sumWeight * totalPackage
		).toLocaleString()}`;
	} else if (res >= 0.2 && weightValue >= threshold) {
		ratePesoTotal.textContent = `${(
			sumWeight * totalPackage
		).toLocaleString()}`;
	}

	if (res >= 0.2 && weightValue < threshold) {
		ratePesoTotal.textContent = `${(res * cbmRate).toLocaleString()}`;
	}

	if (res >= 0.2 && weightValue < sumKgCBM) {
		ratePesoTotal.textContent = `${(res * cbmRate).toLocaleString()}`;
	}

	if (divSum >= threshold) {
		ratePesoTotal.textContent = `${(
			sumWeight * totalPackage
		).toLocaleString()}`;
	}

	// if (sumWeight < 2050) {
	// 	ratePesoTotal.textContent = `${(2050).toLocaleString()}`;
	// }

	const totalRateVal = ratePesoTotal.innerText;

	const result = parseFloat(totalRateVal.replace(/"|\,|\./g, ''));

	if (result <= 2050) {
		ratePesoTotal.textContent = `${(2050).toLocaleString()}`;
	}

	console.log(totalRateVal, result);
});
