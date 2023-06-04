const inputField = document.getElementById('input');
const myBtn = document.getElementById('button');
let myResult = document.getElementById('result');
let myString = document.getElementById('myString')

function calculateAge(dateOfBirth) {
    let today = new Date();
    let birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    
    if (monthDiff < 0 || (monthDiff === 0) && today.getDate() < birthDate.getDate()) {
        age--;
    }

    if (age < 10) {
        myResult.innerHTML = age;
        myString.innerHTML = 'Dai drumu afara la joaca';
    } 
    else if (age >= 10 && age < 20) {
        myResult.innerHTML = age;
        myString.innerHTML = 'N-ai teme, drace ???';
    } 
    else if (age >= 20 && age < 40) {
        myResult.innerHTML = age;
        myString.innerHTML = 'Mai muncim si noi azi ???';
    }
    else if (age >= 40 && age < 70) {
        myResult.innerHTML = age;
        myString.innerHTML = 'Ar cam trebui sa te gandesti la piloni sau saltea';
    }
    else {
        myResult.innerHTML = age;
        myString.innerHTML = 'Tutankamon, aseaza-te ca ametesti';
    }
}

myBtn.addEventListener('click', function () {
    let dateOfBirth = inputField.value;
    calculateAge(dateOfBirth);
});