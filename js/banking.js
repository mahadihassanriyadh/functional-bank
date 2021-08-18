function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
    const InputValueText = InputField.value;
    const InputValue = parseFloat(InputValueText);

    // clear the deposit field
    InputField.value = '';

    return InputValue;
}

function updateTotalField(){

}


document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputValue = getInputValue('deposit-input');





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
    
})