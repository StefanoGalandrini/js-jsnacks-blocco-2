/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

// create empty array and global DOM variables
let arrValues = [];
let inputButton = document.querySelector(".btn-input");
let resultDiv = document.querySelector(".values");

inputButton.addEventListener("click", function () {
	// reset
	resultDiv.innerHTML = "";
	arrValues = [];

	// parse Array to push the odd input values
	for (let i = 1; i <= 6; i++) {
		let inputNum = parseInt(document.querySelector("#number" + i).value);

		// check if the input is a number and it is odd
		if (!isNaN(inputNum) && inputNum % 2 !== 0) {
			arrValues.push(inputNum);
		}
	}

	let noOddNumbers = "";

	if (arrValues.length == 0) {
		noOddNumbers = "Nessuno";
	} else {
		noOddNumbers = "";
	}
	// inject content in html div
	resultDiv.innerHTML = `${noOddNumbers} ${arrValues.join(", ")}`;
});
