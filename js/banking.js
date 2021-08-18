function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
    const InputValueText = InputField.value;
    const InputValue = parseFloat(InputValueText);

    // clear the deposit field
    InputField.value = '';

    return InputValue;
}



document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputValue = getInputValue('deposit-input');

    // get prevoius deposit total
    const totalDepositField = document.getElementById('deposit-total');
    const totalDepositValueText = totalDepositField.innerText;
    const totalDepositValue = parseFloat(totalDepositValueText);

    // replace previous deposit total with deposit new total
    const newTotalDeposit = totalDepositValue + depositInputValue; 
    totalDepositField.innerText = newTotalDeposit;



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
    // get withdrawal amount
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputValueText = withdrawInputField.value;
    const withdrawInputValue = parseFloat(withdrawInputValueText); 


    // get prevoius deposit total
    const totalWithdrawField = document.getElementById('withdraw-total');
    const totalWithdrawValueText = totalWithdrawField.innerText;
    const totalWithdrawValue = parseFloat(totalWithdrawValueText);

    // replace previous deposit total with deposit new total
    const newTotalWithdraw = totalWithdrawValue + withdrawInputValue; 
    totalWithdrawField.innerText = newTotalWithdraw;    



    // get previous balance
    const previousBalanceField = document.getElementById('previos-balance');
    const previousBalanceText = previousBalanceField.innerText;
    const previousBalanceValue = parseFloat(previousBalanceText);


    //update balance
    const newTotalBalance = previousBalanceValue - withdrawInputValue;
    previousBalanceField.innerText = newTotalBalance;   
    


    // clear the withdraw field
    withdrawInputField.value = '';
})