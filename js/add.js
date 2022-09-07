//Increase number +1 per click button
document.getElementById('btn-add').addEventListener('click', function(){
    const textFieldValue = document.getElementById('text-field');
    const textFieldValueString = textFieldValue.innerText;
    const PreviousTextField = parseInt(textFieldValueString);
    const newNumber = PreviousTextField + 1;
    textFieldValue.innerText = newNumber
    saveNumberToLocalStorage('increase', newNumber)
})