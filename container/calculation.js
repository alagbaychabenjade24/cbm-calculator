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
	const inputedCBM = form.inputedCBM.value;

	const totalInputedCBM = inputedCBM * 11500;

	// Total Weigth
	const pricePerWeight = 30;

	const weightValue = form.weight.value;

	const sumWeight = weightValue * pricePerWeight;

	// Multiply Total Rate * Total Package
	const totalPackage = form.totalPackage.value;

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

	if (inputedCBM < 0.2 && weightValue < 500) {
		ratePesoTotal.textContent = `${(totalPesoRate =
			2500 * totalPackage).toLocaleString()}`;
	} else if (inputedCBM < 0.2 && weightValue >= 500) {
		ratePesoTotal.textContent = `${(totalPesoRate =
			sumWeight * totalPackage).toLocaleString()}`;
	} else if (inputedCBM >= 0.2 && weightValue < 500) {
		ratePesoTotal.textContent = `${(totalPesoRate =
			totalInputedCBM * totalPackage).toLocaleString()}`;
	} else if (inputedCBM >= 0.2 && weightValue >= 500) {
		ratePesoTotal.textContent = `${(totalPesoRate =
			sumWeight * totalPackage).toLocaleString()}`;
	}
});
