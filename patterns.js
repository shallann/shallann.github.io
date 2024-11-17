const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const street = document.getElementById('street');
const home = document.getElementById('home');
const flat = document.getElementById('flat');
const telephone = document.getElementById('telephone');
const date = document.getElementById('date');
const licence = document.getElementById('licence')
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const gender = document.getElementById('gender');
const city = document.getElementById('city');
const country = document.getElementById('country');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if (validateInputs()) {
        window.open('success.html', '_blank');
    }
});

function validateInputs() {
    if (!checkName(firstName, "First name")) isValid = false;
    if (!checkLastName(lastName)) isValid = false;
    if (!checkEmail(email)) isValid = false;
    if (!checkStreet(street)) isValid = false;
    if (!checkHome(home, "Home")) isValid = false;
    if (!checkFlat(flat, "Flat")) isValid = false;
    if (!checkPhone(telephone)) isValid = false;
    if (!checkDate(date)) isValid = false;
    if (!checkRequired(city, "City")) isValid = false;
    if (!checkRequired(country, "Country")) isValid = false;
    if (!checkPasswords()) isValid = false;
    if (!checkGender(gender, "Gender")) isValid = false;


    return isValid;
}

function checkName(input, fieldName) {
    const nameValue = input.value.trim();
    const namePattern = /^[A-Za-z]+$/; 

    if (nameValue === '') {
        setErrorFor(input, `${fieldName} cannot be blank`);
    } else if (!namePattern.test(nameValue)) {
        setErrorFor(input, `${fieldName} cannot contain numbers or special characters`);
    } else {
        setSuccessFor(input);
    }
}

function checkLastName(input) {
    const lastNameValue = input.value.trim();
    const lastNamePattern = /^[A-Za-z]+(-[A-Za-z]+)?$/; 

    if (lastNameValue === '') {
        setErrorFor(input, 'Last name cannot be blank');
        return false;
    } else if (!lastNamePattern.test(lastNameValue)) {
        setErrorFor(input, 'Last name can contain letters and one hyphen, but no numbers');
        return false;
    } else {
        setSuccessFor(input);
        return true;
    }
}

function checkEmail(input) {
    const emailValue = input.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue === '') {
        setErrorFor(input, 'Email cannot be blank');
        return false;
    } else if (!emailPattern.test(emailValue)) {
        setErrorFor(input, 'Invalid email format. Example: user@example.com');
        return false;
    } else {
        setSuccessFor(input);
        return true;

    }
}


function checkStreet(input, fieldName) {
    const streetValue = input.value.trim();
    const streetPattern = /^[A-Za-z\s]+$/; 
    if (streetValue === '') {
        setErrorFor(input, 'Street cannot be blank');
        return false;
    } else if (!streetPattern.test(streetValue)) {
        setErrorFor(input, `${fieldName} cannot contain numbers or special characters`);
        return false;
    } else {
        setSuccessFor(input);
        return true;

    }
}

function checkHome(input, fieldName) {
    const value = input.value.trim();
    const homePattern = /^\d+[A-Za-z]?$/; 

    if (value === '') {
        setErrorFor(input, `${fieldName} cannot be blank`);
        return false;
    } else if (!homePattern.test(value)) {
        setErrorFor(input, `${fieldName} must be a positive number or a number followed by one letter (e.g., 12 or 12A)`);
        return false;
    } else {
        setSuccessFor(input);
    }
}


function checkFlat(input, fieldName) {
    const value = input.value.trim();
    if (value === '') {
        setErrorFor(input, `${fieldName} cannot be blank`);
        return false;
    } else if (isNaN(value)) {
        setErrorFor(input, `${fieldName} must be a number`);
        return false;
    } else {
        setSuccessFor(input);
        return true;
    }
}

function checkPhone(input) {
    const phoneValue = input.value.trim();
    const phonePattern = /^\d{3} \d{3} \d{3}$/; 

    if (phoneValue === '') {
        setErrorFor(input, 'Phone number cannot be blank');
        return false;
    } else if (!phonePattern.test(phoneValue)) {
        setErrorFor(input, 'Not a valid phone number format. Format should be: XXX XXX XXX');
        return false;
    } else {
        setSuccessFor(input);
        return true;
    }
}


function checkDate(input) {
    const dateValue = input.value.trim();

    if (dateValue === '') {
        setErrorFor(input, 'Date of birth cannot be blank');
        return false;
    }

    const enteredDate = new Date(dateValue);
    const currentDate = new Date();

    if (isNaN(enteredDate.getTime())) {
        setErrorFor(input, 'Invalid date format');
        return false;
    } else if (enteredDate > currentDate) {
        setErrorFor(input, 'Date of birth cannot be in the future');
        return false;
    } else {
        setSuccessFor(input);
        return true;

    }
}

function checkGender(genderInputs, fieldName) {
    let isSelected = false;

    genderInputs.forEach(input => {
        if (input.checked) {
            isSelected = true;
        }
    });

    if (!isSelected) {
        setErrorFor(genderInputs[0].parentElement, `${fieldName} must be selected`);
        return false;
    } else {
        setSuccessFor(genderInputs[0].parentElement);
        return true;
    }
}

function checkPasswords() {
    const passwordValue1 = password1.value.trim();
    const passwordValue2 = password2.value.trim();

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordValue1 === '') {
        setErrorFor(password1, 'Password cannot be blank');
        return false;
    } else if (!passwordPattern.test(passwordValue1)) {
        setErrorFor(password1, 'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character');
        return false;
    } else {
        setSuccessFor(password1);
    }

    if (passwordValue2 === '') {
        setErrorFor(password2, 'Please confirm your password');
        return false;
    } else if (passwordValue1 !== passwordValue2) {
        setErrorFor(password2, 'Passwords do not match');
        return false;
    } else {
        setSuccessFor(password2);
        return true;

    }
}
function checkFlat(input, fieldName) {
    const value = input.value.trim();
    if (value === '') {
        setErrorFor(input, `${fieldName} cannot be blank`);
        return false;
    } else if (isNaN(value)) {
        setErrorFor(input, `${fieldName} must be a valid number`);
        return false;
    } else if (Number(value) < 0) {
        setErrorFor(input, `${fieldName} cannot be less than 0`);
        return false;
    } else {
        setSuccessFor(input);
        return true;

    }
}

function checkRequired(input, fieldName) {
    const value = input.value.trim();
    const lettersOnlyPattern = /^[A-Za-z\s]+$/; 
    if (value === '') {
        setErrorFor(input, `${fieldName} cannot be blank`);
        return false;
    } else if (!lettersOnlyPattern.test(value)) {
        setErrorFor(input, `${fieldName} must contain only letters and spaces`);
        return false;
    } else {
        setSuccessFor(input);
        return true;

    }
}

function checkLicence(licenceInput, fieldName) {
    if (!licenceInput.checked) {
        setErrorFor(licenceInput, `You must accept the ${fieldName}`);
        return false;
    } else {
        setSuccessFor(licenceInput);
        return true;

    }
}



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
