

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




//Function always active when people write something
// validate for ifs


function validateName() {

    
    var name1 = document.getElementById('name1').value; //value of input
    var name2 = document.getElementById('name1'); // All element of input
    var nameControl= name2.parentNode; // Node father to element



    // least 1 character entered

    if (name1.length == 0 ) {
        

        
        var small = nameControl.querySelector('small');
        small.innerHTML = 'Name is required'
        nameControl.className ='form-control error';


        return false;
    }


    // Only letters

    if (!name1.match(/^[A-Za-z]+$/)) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (name1.length <= 3) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (name1.length >= 25) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Limit 25 characters'
        nameControl.className ='form-control error';

        return false;
    }
    

    // input validate

    nameControl.className = 'form-control success';
    return true;


}

function validateLastName() {

    
    var name1 = document.getElementById('name1').value; //value of input
    var name2 = document.getElementById('name1'); // All element of input
    var nameControl= name2.parentNode; // Node father to element



    // least 1 character entered

    if (name1.length == 0 ) {
        

        
        var small = nameControl.querySelector('small');
        small.innerHTML = 'Name is required'
        nameControl.className ='form-control error';


        return false;
    }


    // Only letters

    if (!name1.match(/^[A-Za-z]+$/)) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    // least 3 character entered

    if (name1.length <= 3) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Write Name'
        nameControl.className ='form-control error';

        return false;
    }

    // Less than 25 characters

    if (name1.length >= 25) {

        var small = nameControl.querySelector('small');
        small.innerHTML = 'Limit 25 characters'
        nameControl.className ='form-control error';

        return false;
    }
    

    // input validate

    nameControl.className = 'form-control success';
    return true;


}