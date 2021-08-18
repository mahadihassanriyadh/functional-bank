function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
    const InputValueText = InputField.value;
    const InputValue = parseFloat(InputValueText);

    // clear the deposit field
    InputField.value = '';

    return InputValue;
}

function updateTotalField(fieldID, InputValue){
        // get prevoius total
        const totalField = document.getElementById(fieldID);
        const totalValueText = totalField.innerText;
        const totalValue = parseFloat(totalValueText);
    
        // replace previous total with new total
        const newTotal = totalValue + InputValue; 
        totalField.innerText = newTotal;
}

function getCurrentBalance() {
    const previousBalanceField = document.getElementById('previos-balance');
    const previousBalanceText = previousBalanceField.innerText;
    const previousBalanceValue = parseFloat(previousBalanceText);
    return previousBalanceValue;
}


function updateBalance(InputValue, isAdd) {
    // get previous balance
    const previousBalanceField = document.getElementById('previos-balance');
    const previousBalanceValue = getCurrentBalance();

    //update balance
    if (isAdd == true){
        const newTotalBalance = previousBalanceValue + InputValue;
        previousBalanceField.innerText = newTotalBalance;
    }
    else {
        const newTotalBalance = previousBalanceValue - InputValue;
        previousBalanceField.innerText = newTotalBalance;
    }

}


document.getElementById('deposit-btn').addEventListener('click', function(){
    // get input value
    const depositInputValue = getInputValue('deposit-input');

    // update total deposit field
    if (depositInputValue >= 0) {
        updateTotalField('deposit-total', depositInputValue);

        // update balance
        updateBalance(depositInputValue, true);
    }
    else{
        alert('Please enter a positive number')
    }
})



// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get input value
    const withdrawInputValue = getInputValue('withdraw-input');
    const previousBalanceValue = getCurrentBalance();
    if(withdrawInputValue >= 0 && withdrawInputValue <= previousBalanceValue){
        // update total withdraw field
        updateTotalField('withdraw-total', withdrawInputValue);
        // update balance
        updateBalance(withdrawInputValue, false);
    }
    else if(withdrawInputValue < 0){
        alert('Please enter a positive number')
    }
    else{
        alert('Insufficient Amount!!!')
    }
})


// we could have just take the negative value of withdrawInputValue