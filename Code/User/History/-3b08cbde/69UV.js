

//countries

document.addEventListener('DOMContentLoaded',() => {

    const selectDrop = document.querySelector('#countries');
    //const selectDrop = document.getElementById('countries');
    
    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(data =>{
        let output ="";
        data.forEach(country => {
            output += `<option>${country.name.common}</option>}`;
            console.log(country.name.common);
        });
    
        selectDrop.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })
    
    });





//--------------------------------VALID CONFIRM--------------------//


//def variables

var nameError = document.getElementById('name-error');
var addressError = document.getElementById('address-error');
var lastnameError = document.getElementById('lastname-error');
var idError = document.getElementById('id-error');
var passwordError = document.getElementById('password-error');
var phoneError = document.getElementById('phone-error');


function validateName() {

    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name1');
    var nameControl= name2.parentNode;
    let flag = true;


    if (name1.length == 0 ) {
        

        
        var small = nameControl.querySelector('small');
        small.innerHTML = 'Name is required'
        nameControl.className ='form-control error';


        return false;
    }

    if (!name1.match(/^[A-Za-z]+$/)) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    if (name1.length <= 3) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }
    
    nameControl.className = 'form-control success';
    return true;

}