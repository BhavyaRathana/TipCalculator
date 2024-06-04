document.getElementById('tipForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);

    

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalBill = billAmount + tipAmount;
    const amountPerPerson = totalBill / numberOfPeople;

    document.getElementById('totalTip').textContent = (tipAmount);
    document.getElementById('totalBill').textContent = (totalBill);
    document.getElementById('amountPerPerson').textContent = (amountPerPerson);
});