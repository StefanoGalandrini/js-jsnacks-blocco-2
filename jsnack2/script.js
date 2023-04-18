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
	"...",
	"....",
	".....",
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
	// displays first and last names to be mixed
	let firstNameFather = document.querySelector(".first-names");
	let newFirst = document.createElement("p");
	newFirst.textContent = arrFirstName.join(", ");
	firstNameFather.appendChild(newFirst);

	let lastNameFather = document.querySelector(".last-names");
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
		let firstNameIndex = Math.floor(Math.random() * arrFirstName.length);
		let lastNameIndex = Math.floor(Math.random() * arrLastName.length);

		let firstName;
		let lastName;

		if (
			firstNameIndex < arrFirstName.length &&
			lastNameIndex < arrLastName.length
		) {
			firstName = arrFirstName[firstNameIndex];
			lastName = arrLastName[lastNameIndex];
		} else {
			firstName = "...";
			lastName = "...";
		}

		let fullName = `${firstName} ${lastName}`;

		let newElementFather = document.querySelector(".guest-list");
		let newGuest = document.createElement("p");
		newGuest.textContent = i + 1 + ") " + fullName;
		newElementFather.appendChild(newGuest);
	}
});
