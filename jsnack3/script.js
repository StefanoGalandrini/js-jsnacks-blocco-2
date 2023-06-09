/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi
che sono in posizione dispari
*/

// create array of 100 random integers between 1 and 100
let arrIntegers = [];
let arrOddPosition = [];
let sumTotal = 0;
const sumButton = document.querySelector(".btn-sum");

sumButton.addEventListener("click", function () {
	// declare DOM variables and reset them
	let elementFather = document.querySelector(".numbers");
	let oddFather = document.querySelector(".odd-numbers");
	let divSum = document.querySelector(".sum");

	elementFather.innerHTML = ``;
	oddFather.innerHTML = ``;
	divSum.innerHTML = ``;

	// reset arrays to empty
	arrIntegers.length = 0;
	arrOddPosition.length = 0;

	for (let i = 0; i < 100; i++) {
		let randomNumber = Math.floor(Math.random() * 100) + 1;
		arrIntegers.push(randomNumber);
	}
	// displays all the numbers
	let newNumber = document.createElement("p");
	newNumber.textContent = arrIntegers.join(", ");
	elementFather.appendChild(newNumber);

	for (let i = 1; i < 100; i = i + 2) {
		arrOddPosition.push(arrIntegers[i]);
	}
	// displays the numbers with original odd index (zero excluded)
	let newOdd = document.createElement("p");
	newOdd.textContent = arrOddPosition.join(", ");
	oddFather.appendChild(newOdd);

	sumTotal = 0;
	for (let i = 0; i < arrOddPosition.length; i++) {
		sumTotal = sumTotal + arrOddPosition[i];
	}
	divSum.innerHTML = sumTotal;
	console.log(sumTotal);
});
