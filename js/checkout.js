// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");

	// Regular Expressions
	let nameRegEx = /^[a-zA-Z]+$/;
	let addressRegEx = /^[a-zA-Z0-9]+(\s[a-zA-Z0-9]+)*$/;
	let emailRegEx = /\S+@\S+\.\S+/;
	let passwordRegEx = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
	let phoneRgEx = /^\d+$/;

	// Validate name
	if (fName.value === "" || fName.value.length < 3 || !nameRegEx.test(fName.value)) {
		fName.classList.add("is-invalid");
		errorName.style.display = "";
		error++;
	} else {
		fName.classList.add("is-valid");
	}

	// Validate email
	if (fEmail.value === "" || fAddress.value.length < 3 || !emailRegEx.test(fEmail.value)) {
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "";
		error++;
	} else {
		fEmail.classList.add("is-valid");
	}

	// Validate Address
	if (fAddress.value === "" || fAddress.value.length < 3 || !addressRegEx.test(fAddress.value)) {
		fAddress.classList.add("is-invalid");
		errorAddress.style.display = "";
		error++;
	} else {
		fAddress.classList.add("is-valid");
	}

	//Validate Lastname
	if (
		fLastN.value === "" || fLastN.value.length < 3 || !nameRegEx.test(fLastN.value)) {
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "";
		error++;
	} else {
		fLastN.classList.add("is-valid");
	}

	// Validate Password 
	if (fPassword.value === "" || fAddress.value.length < 3 || !passwordRegEx.test(fPassword.value)) {
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "";
		error++;
	} else {
		fPassword.classList.add("is-valid");
	}

	//Validate Phone
	if (fPhone.value === "" || !phoneRgEx.test(fPhone.value)) {
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "";
		error++;
	} else {
		fPhone.classList.add("is-valid");
	}

	if (error > 0) {
		alert("Error!")
	} else {
		alert("OK!")
	}
	event.preventDefault();
}