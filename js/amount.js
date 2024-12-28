
// document.getElementById('btn-add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('add money btn clicked');
//     const inputAmount = document.getElementById('input-amount').value;
//     const inputPin = document.getElementById('input-pin').value;
//     if(inputPin === '1234'){
//         const totalAmount = document.getElementById('total-amount').innerText;
//         const totalAmountNumber = parseFloat(totalAmount);
//         const inputAmountNumber = parseFloat(inputAmount);
//         const newTotal = totalAmountNumber + inputAmountNumber;
//         document.getElementById('total-amount').innerText = newTotal;
//     }
//     else{
//         alert('Wrong pin number, please try again later!');
//     }

// })

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const inputAmount = getInputValueById('input-amount');
    const inputPin = getInputValueById('input-pin');

    if(isNaN(inputAmount)){
        alert('Fails to added money');
        return;
    }
    
    if(inputPin === 1234){
        const balance = getTextValueById('total-amount');
        const newBalance = balance + inputAmount;
        document.getElementById('total-amount').innerText = newBalance;

        const p = document.createElement('p');
        p.innerText = ` Added: ${inputAmount} Tk. New balance ${newBalance}`;
        console.log(p);

        document.getElementById('transaction-history').appendChild(p);
    }
    else{
        alert('Wrong pin number, Please try again later!')
    }
})