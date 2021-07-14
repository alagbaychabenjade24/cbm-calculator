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

	// Total CBM
	const inputValues = form.length.value * form.width.value * form.height.value;

	const dividedTotalValues = inputValues / 1000000;

	addTotalCBM.textContent = `${dividedTotalValues}`;

	// Total Weight
	const totalWeight = form.weight.value;

	addTotalWeight.textContent = `${totalWeight}`;

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

	// Multiply Total Rate * Total Package
	const totalPackage = form.totalPackage.value;

	// Samp

	const res = totalWeight / dividedTotalValues;

	console.log(res);

	// Checking Conditions for CBM and Price Rate
	if (dividedTotalValues < 0.2 && weightValue < 475) {
		ratePesoTotal.textContent = `${(2050 * totalPackage).toLocaleString()}`;
	} else if (dividedTotalValues < 0.2 && weightValue >= sumKgCBM) {
		ratePesoTotal.textContent = `${(
			sumWeight * totalPackage
		).toLocaleString()}`;
	} else if (dividedTotalValues >= 0.2 && weightValue < sumKgCBM) {
		ratePesoTotal.textContent = `${(
			dividedTotalValues *
			cbmRate *
			totalPackage
		).toLocaleString()}`;
	} else if (dividedTotalValues >= 0.2 && weightValue >= sumKgCBM) {
		ratePesoTotal.textContent = `${(
			sumWeight * totalPackage
		).toLocaleString()}`;
	}

	if (dividedTotalValues >= 0.2 && weightValue < 475) {
		ratePesoTotal.textContent = `${(
			dividedTotalValues *
			cbmRate *
			totalPackage
		).toLocaleString()}`;
	}
});
