// Get references to the HTML elements
let numberValue = document.getElementById('number-value');
let nameValue = document.getElementById('name-value');
let cardTypeValue = document.getElementById('dropdown');
let debitOrCreditValue = document.getElementById('debit-credit');
let expiryValue = document.getElementById('expiry-value');
let cvvValue = document.getElementById('cvv-value');
let cardForm = document.getElementById('card-form')

// Function to handle form submission
function submitCardDetails() {
    // Gather values from form fields
    let cardNumber = numberValue.value;
    let cardName = nameValue.value;
    let cardType = cardTypeValue.value;
    let expiryDate = expiryValue.value;
    let cvv = cvvValue.value;
    let debitOrCredit = debitOrCreditValue.value;

    // Log the gathered information to the console
    console.log(debitOrCredit, cardNumber, cardName, cardType, expiryDate, cvv);

    // Get references to display elements
    let displayCardNumber = document.getElementById('card-number');
    let displayCardName = document.getElementById('card-name');
    let displayExpiryDate = document.getElementById('expiry');
    let displayCardImage = document.getElementById('card-img');
    let displayCvv = document.getElementById('cvv');
    let displayCreditOrDebit = document.getElementById('debit-credit-card');

    // Update display based on credit/debit type
    if (debitOrCredit == "Credit") {
        displayCreditOrDebit.textContent = "Credit Card";
    } else {
        displayCreditOrDebit.textContent = "Debit Card"
    }

    // Update card image based on card type
    if (cardType == "Mastercard") {
        displayCardImage.src = "images/mc.png"
    } else {
        displayCardImage.src = "images/visa.png"
    }

    // Update display with gathered information
    displayCardNumber.textContent = cardNumber;
    displayCardName.textContent = cardName;
    displayExpiryDate.textContent = expiryDate;
    displayCvv.textContent = cvv;
}
