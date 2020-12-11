const form = document.querySelector('form');
const addTotalCBM = document.querySelector('.cbm__total__numb');
const ratePesoTotal = document.querySelector('.ratePesoTotal');

const style =
	'color: orangered; font-weight: bold;  -webkit-text-stroke: 1px black; font-size:30px;';

console.log(
	'%cBOSSCargo Philippines is happy to have you as our customer! ',
	style
);

form.addEventListener('submit', event => {
	event.preventDefault();

	let totalPesoRate;

	// Total CBM
	const inputValues = form.length.value * form.width.value * form.height.value;

	const dividedTotalValues = inputValues / 1000000;

	addTotalCBM.textContent = `${dividedTotalValues}`;

	// Inputed Cubic Meter
	// const inputedCBM = form.inputedCBM.value;

	// Change Total CBM if needed
	// const totalInputedCBM = inputedCBM * 11500;

	// Checks the inputed numbers
	// if (dividedTotalValues) {
	// 	addTotalCBM.textContent = `${dividedTotalValues}`;
	// } else {
	// 	addTotalCBM.textContent = `${inputedCBM}`;
	// }

	// Total Weight by cm
	const pricePerWeight = 30;

	const weightValue = form.weight.value;

	const sumWeight = weightValue * pricePerWeight;

	// Multiply Total Rate * Total Package
	const totalPackage = form.totalPackage.value;

	// Checking Conditions for CBM and Price Rate
	if (dividedTotalValues < 0.2 && weightValue < 500) {
		ratePesoTotal.textContent = `${(2500 * totalPackage).toLocaleString()}`;
	} else if (dividedTotalValues < 0.2 && weightValue >= 500) {
		ratePesoTotal.textContent = `${(
			sumWeight * totalPackage
		).toLocaleString()}`;
	} else if (dividedTotalValues >= 0.2 && weightValue < 500) {
		ratePesoTotal.textContent = `${(
			dividedTotalValues *
			11500 *
			totalPackage
		).toLocaleString()}`;
	} else if (dividedTotalValues >= 0.2 && weightValue >= 500) {
		ratePesoTotal.textContent = `${(
			sumWeight * totalPackage
		).toLocaleString()}`;
	} else if (inputedCBM < 0.2 && weightValue < 500) {
		ratePesoTotal.textContent = `${(2500 * totalPackage).toLocaleString()}`;
	}

	// Total Weigth by kg
	// const pricePerWeightTwo = 30;

	// const weightValueTwo = form.weight.value;

	// const sumWeightTwo = weightValueTwo * pricePerWeightTwo;

	// // Checking Conditions for CBM and Price Rate
	// if (inputedCBM < 0.2 && weightValueTwo >= 500) {
	// 	ratePesoTotal.textContent = `${(
	// 		sumWeightTwo * totalPackage
	// 	).toLocaleString()}`;
	// } else if (inputedCBM >= 0.2 && weightValueTwo < 500) {
	// 	ratePesoTotal.textContent = `${(
	// 		totalInputedCBM * totalPackage
	// 	).toLocaleString()}`;
	// } else if (inputedCBM >= 0.2 && weightValueTwo >= 500) {
	// 	ratePesoTotal.textContent = `${(
	// 		sumWeightTwo * totalPackage
	// 	).toLocaleString()}`;
	// }
});
