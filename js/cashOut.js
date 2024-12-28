
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = getInputValueById('cash-out-amount');
    const cashOutPin = getInputValueById('cash-out-pin');
    // console.log(cashOutAmount, cashOutPin)

    if(isNaN(cashOutAmount)){
        alert('Failed to cash out');
        return;
    }

    if(cashOutPin === 1234){
        const balance = getTextValueById('total-amount');

        if(cashOutAmount > balance){
            alert('You do not hav enough money');
            return;
        }
        const newBalance = balance - cashOutAmount;
        document.getElementById('total-amount').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = ` Withdraw: ${cashOutAmount} Tk. New balance ${newBalance}`;
        console.log(p);

        document.getElementById('transaction-history').appendChild(p);
    }
    else{
        alert('Wrong pin number, Please try again later!');
    }
})