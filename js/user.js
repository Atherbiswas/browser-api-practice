// add number with 200 and show sum with alert
const userInfo = () => {
    const numstring = prompt('Please input one number')
    const num = parseInt(numstring);
    alert(num + 200);
}
// website location check
const locationBtn = () => {
    const userAsk = confirm('Do you want to see your website location?');
    console.log(userAsk);
    if(userAsk === true){
        console.log('http://127.0.0.1:5500/index.html');
    }
    else{
        console.log('I dont want to see my website locattion');
    }
}

//new section start
document.getElementById('btn-add-name').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputName = inputField.value;
    inputField.value = '';
    localStorage.setItem('name', inputName);
})
document.getElementById('btn-add-age').addEventListener('click', function(){
    const inputAgeField = document.getElementById('input-field-age');
    const inputAge = inputAgeField.value;
    inputAgeField.value = '';
    localStorage.setItem('age', inputAge);
})
document.getElementById('btn-remove-name').addEventListener('click', function(){
    localStorage.removeItem('name');
})
document.getElementById('btn-remove-age').addEventListener('click', function(){
    localStorage.removeItem('age');
})
document.getElementById('btn-clear').addEventListener('click', function(){
    localStorage.clear();
})
//add to local storage first name and last name
const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
const addName = () => {
    const firstName = getInputValueById('first-name-field');
    const lastName = getInputValueById('last-name-field');
    saveItemToLocalStorage(firstName,lastName);
}
const getFullNameFromLocalStorage = () => {
    let saveFullname = localStorage.getItem('fullName');
    let fullName = {};
    if(saveFullname){
        fullName = JSON.parse(saveFullname);
    }
    else{
        return fullName;
    }
}
const saveItemToLocalStorage = (firstName,lastName) => {
    const fullName = getFullNameFromLocalStorage();
    fullName['firstName'] = firstName;
    fullName['lastName'] = lastName;
    const fullNameStringified = JSON.stringify(fullName);
    localStorage.setItem('fullName', fullNameStringified)
}