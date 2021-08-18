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


function updateBalance(balanceId, InputValue, isAdd) {
    // get previous balance
    const previousBalanceField = document.getElementById(balanceId);
    const previousBalanceText = previousBalanceField.innerText;
    const previousBalanceValue = parseFloat(previousBalanceText);


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
    updateTotalField('deposit-total', depositInputValue);

    // update balance
    updateBalance('previos-balance', depositInputValue, true);
})



// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get input value
    const withdrawInputValue = getInputValue('withdraw-input');
    
    // update total withdraw field
    updateTotalField('withdraw-total', withdrawInputValue);

    // update balance
    updateBalance('previos-balance', withdrawInputValue, false);
})


// we could have just take the negative value of withdrawInputValue