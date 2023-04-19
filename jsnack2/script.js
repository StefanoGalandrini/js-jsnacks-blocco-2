/*
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi,
e da queste vuole generare
una falsa lista di invitati con nome e cognome.
*/

// create arrays for first names and last names
const arrFirstName = [
	"Stefano",
	"Laura",
	"Daniele",
	"Giorgia",
	"Elena",
	"Francesco",
	"Lorenzo",
	"Lisa",
	"Cristina",
	"Gianfranco",
	"?",
	"?",
	"?",
];

const arrLastName = [
	"Rossi",
	"Bianchi",
	"Verdi",
	"Viola",
	"Rosato",
	"De Grigis",
	"Neri",
	"Salmone",
	"Dorati",
	"Azzurri",
];

let guestButton = document.querySelector(".btn-input");

guestButton.addEventListener("click", function () {
	// declare DOM variables and reset them
	let firstNameFather = document.querySelector(".first-names");
	let lastNameFather = document.querySelector(".last-names");
	let newElementFather = document.querySelector(".guest-list");

	firstNameFather.innerHTML = "";
	lastNameFather.innerHTML = "";
	newElementFather.innerHTML = "";

	// displays first and last names to be mixed
	let newFirst = document.createElement("p");
	newFirst.textContent = arrFirstName.join(", ");
	firstNameFather.appendChild(newFirst);

	let newLast = document.createElement("p");
	newLast.textContent = arrLastName.join(", ");
	lastNameFather.appendChild(newLast);

	// check the lenghth of the arrays to loop for the greater lenghth
	let maxLenght;
	arrFirstName.length >= arrLastName.length
		? (maxLenght = arrFirstName.length)
		: (maxLenght = arrLastName.length);

	// iterate through the arrays,
	// generate random numbers for first and last name
	// push those random names into the guest list array
	for (let i = 0; i < maxLenght; i++) {
		// generate a couple of random indexes for each guest first and last name
		let firstNameIndex = Math.floor(Math.random() * maxLenght);
		let lastNameIndex = Math.floor(Math.random() * maxLenght);

		let firstName;
		let lastName;

		if (
			firstNameIndex < arrFirstName.length &&
			lastNameIndex < arrLastName.length &&
			firstNameIndex < arrLastName.length &&
			lastNameIndex < arrFirstName.length
		) {
			firstName = arrFirstName[firstNameIndex];
			lastName = arrLastName[lastNameIndex];
		} else {
			firstName = "...";
			lastName = "...";
		}

		let fullName = `${firstName} ${lastName}`;

		let newGuest = document.createElement("p");
		newGuest.textContent = i + 1 + ") " + fullName;
		newElementFather.appendChild(newGuest);
	}
});
