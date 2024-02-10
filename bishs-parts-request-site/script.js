const form = document.getElementById('form');
const locations = document.getElementById('location');
const customer = document.getElementById('customer');
const phone_number = document.getElementById('phone_number');
const store = document.getElementById('store');
const trailer_year = document.getElementById('trailer_year');
const trailer_manufacturer = document.getElementById('trailer_manufacturer');
const trailer_make = document.getElementById('trailer_make');
const trailer_model = document.getElementById('trailer_model');
const trailer_VIN = document.getElementById('trailer_VIN');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const customerValue = customer.value.trim();
    const phone_numberValue = phone_number.value.trim();
    const storeValue = store.value.trim();
    const trailer_yearValue = trailer_year.value.trim();
    const trailer_manufacturerValue = trailer_manufacturer.value.trim();
    const trailer_makeValue = trailer_make.value.trim();
    const trailer_modelValue = trailer_model.value.trim();
    const trailer_VINValue = trailer_VIN.value.trim();

    // Show errors and successes for input fields
    if (customerValue === '') {
        setErrorFor(customer, 'You must input your name');
    } else {
        setSuccessFor(customer);
    }

    if (phone_numberValue === '') {
        setErrorFor(phone_number, 'You must input your phone number');
    } else {
        setSuccessFor(phone_number);
    }

    if (storeValue === '') {
        setErrorFor(store, 'You must input when you bought your trailer from Bishs');
    } else {
        setSuccessFor(store);
    }

    if (trailer_yearValue === '') {
        setErrorFor(trailer_year, 'You must input your trailer year');
    } else {
        setSuccessFor(phone_number);
    }

    if (trailer_manufacturerValue === '') {
        setErrorFor(trailer_manufacturer, 'You must input your trailer manufacturer');
    } else {
        setSuccessFor(trailer_manufacturer);
    }

    if (trailer_makeValue === '') {
        setErrorFor(trailer_make, 'You must input your trailer make');
    } else {
        setSuccessFor(trailer_make);
    }

    if (trailer_VINValue.length < 17) {
        setErrorFor(trailer_VIN, 'You must input a valid VIN');
    } else {
        setSuccessFor(trailer_VIN);
    }
    
}

phone_number.addEventListener('input', formatPhoneNumber);

function formatPhoneNumber() {
    let phoneNumber = phone_number.value.replace(/\D/g, ''); // Remove all non-numeric characters

    if (phoneNumber.length > 10) {
        phoneNumber = phoneNumber.slice(0, 10); // Limit to 10 digits
    }

    if (phoneNumber.length > 6) {
        phoneNumber = phoneNumber.replace(/^(\d{3})(\d{3})(\d{0,4})/, '($1) $2-$3');
    } else if (phoneNumber.length > 3) {
        phoneNumber = phoneNumber.replace(/^(\d{3})(\d{0,3})/, '($1) $2');
    } else if (phoneNumber.length > 0) {
        phoneNumber = phoneNumber.replace(/^(\d{0,3})/, '($1');
    }

    phone_number.value = phoneNumber;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small element
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
