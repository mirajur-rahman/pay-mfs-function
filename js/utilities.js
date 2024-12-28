
function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    return textValueNumber;
}

function showSectionFromId(id) {
    //hide all the section
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transaction-container').classList.add('hidden');
    // show the section using id as a parameter
    document.getElementById(id).classList.remove('hidden');
}