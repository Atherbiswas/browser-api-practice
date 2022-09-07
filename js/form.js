//common function for all input function
const getInputValueById = (id) =>{
    const inputField = document.getElementById(id);
    const input = inputField.value;
    inputField.value = '';
    return input;
}
// name send button
document.getElementById('name-send-btn').addEventListener('click', function(){
    const nameField = getInputValueById('name-field')
    localStorage.setItem('Name', nameField)
})
//name delete button
document.getElementById('name-del-btn').addEventListener('click', function(){
    localStorage.removeItem('Name')
})
//email send button
document.getElementById('email-send-btn').addEventListener('click', function(){
    const emailField = getInputValueById('email-field');
    localStorage.setItem('Email', emailField);
})
//email delete button
document.getElementById('email-del-btn').addEventListener('click', function(){
    localStorage.removeItem('Email');
})
//message send button
document.getElementById('messg-send-btn').addEventListener('click', function(){
    const messgField = getInputValueById('messg-field');
    localStorage.setItem('Message', messgField);
})
//message delete button
document.getElementById('messg-del-btn').addEventListener('click', function(){
    localStorage.removeItem('Message')
})
//all info reset button
document.getElementById('btn-reset').addEventListener('click', function(){
    localStorage.clear();
})
//to set all time same info
// const getItemFromLocalStorage = () => {
//     const allInfoValue = localStorage.getItem('allInfo');
//     let allInfo = {};
//     if(allInfoValue){
//         allInfo = JSON.parse(allInfoValue);
//     }
//     else{
//         return allInfo;
//     }
// }
// const saveItemLocalStorage = (nameField,emailField,messgField) => {
//     const allInfoValue = getItemFromLocalStorage();
//     allInfoValue['Name'] = nameField;
//     allInfoValue['Email'] = emailField;
//     allInfoValue['Message'] = messgField;
//     const allInfoValueStringified = JSON.stringify(allInfoValue);
//     localStorage.setItem('allInfoValue', allInfoValueStringified);
// }