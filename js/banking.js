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


document.getElementById('deposit-btn').addEventListener('click', function(){
    // get input value
    const depositInputValue = getInputValue('deposit-input');

    // update total deposit field
    updateTotalField('deposit-total', depositInputValue);


    // get previous balance
    const previousBalanceField = document.getElementById('previos-balance');
    const previousBalanceText = previousBalanceField.innerText;
    const previousBalanceValue = parseFloat(previousBalanceText);


    //update balance
    const newTotalBalance = previousBalanceValue + depositInputValue;
    previousBalanceField.innerText = newTotalBalance;

})





// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputValue = getInputValue('withdraw-input');
    

    updateTotalField('withdraw-total', withdrawInputValue);



    // get previous balance
    const previousBalanceField = document.getElementById('previos-balance');
    const previousBalanceText = previousBalanceField.innerText;
    const previousBalanceValue = parseFloat(previousBalanceText);


    //update balance
    const newTotalBalance = previousBalanceValue - withdrawInputValue;
    previousBalanceField.innerText = newTotalBalance;   
    
})