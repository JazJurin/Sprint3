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
	let emailRegEx = /\S+@\S+\.\S+/;
	let passwordRegEx = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
	let phoneRgEx = /^\d+$/;

	// Validate name
	if (fName.value === "" || fName.value.length < 3 || !nameRegEx.test(fName.value)) {
		fName.classList.add("is-invalid");
		errorName.style.display = "";
		errorName.textContent =
			"This field is required and must contain at least 3 letters";
		error++;
	} else {
		fName.classList.remove("is-invalid");
	}

	// Validate email
	if (fEmail.value === "" || !emailRegEx.test(fEmail.value)) {
		fEmail.classList.add("is-invalid");
		errorEmail.style.display = "";
		errorEmail.textContent =
			"This field is required and must be a valid email address";
		error++;
	} else {
		fEmail.classList.remove("is-invalid");
	}

	// Validate Address
	if (fAddress.value === "" || fAddress.value.length < 3 || !nameRegEx.test(fAddress.value)) {
		fAddress.classList.add("is-invalid");
		errorAddress.style.display = "";
		errorAddress.textContent =
			"This field is required and must contain at least 3 characters";
		error++;
	} else {
		fAddress.classList.remove("is-invalid");
	}

	//Validate Lastname
	if (
		fLastN.value === "" || fLastN.value.length < 3 || !nameRegEx.test(fLastN.value)) {
		fLastN.classList.add("is-invalid");
		errorLastN.style.display = "";
		errorLastN.textContent =
			"This field is required and must contain at least 3 letters";
		error++;
	} else {
		fLastN.classList.remove("is-invalid");
	}

	// Validate Password 
	if (fPassword.value === "" || !passwordRegEx.test(fPassword.value)) {
		fPassword.classList.add("is-invalid");
		errorPassword.style.display = "";
		errorPassword.textContent =
			"This field is required and must contain at least one letter and one number";
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
	}

	//Validate Phone
	if (fPhone.value === "" || !phoneRgEx.test(fPhone.value)) {
		fPhone.classList.add("is-invalid");
		errorPhone.style.display = "";
		errorPhone.textContent =
			"This field is required and must contain only numbers";
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
	}

	if (error > 0) {
		alert("Error!")
	} else {
		alert("OK!")
	}
}