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
	"Prova",
];

// declare empty array for random first and last names
let guestNames = [];

// check the lenghth of the arrays to loop for the greater lenghth
let maxLenght;
arrFirstName.lenght >= arrLastName.lenght
	? (maxLenght = arrFirstName.lenght)
	: (maxLenght = arrLastName.length);
console.log(maxLenght);

// iterate through the arrays,
// generate random numbers for first and last name
// push those random names into the guest list array
for (let i = 0; i < arrFirstName.length; i++) {
	let firstNameIndex = Math.floor(Math.random() * arrFirstName.length);
	let lastNameIndex = Math.floor(Math.random() * arrLastName.length);
	let fullName =
		arrFirstName[firstNameIndex] + " " + arrLastName[lastNameIndex];
	fullNames.push(fullName);
}

console.log(fullNames);
