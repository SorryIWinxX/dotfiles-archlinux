document.addEventListener('DOMContentLoaded',() => {

    const selectDrop = document.querySelector('#Mercedes');
    //const selectDrop = document.getElementById('countries');
    
    fetch('https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json').then(res => {
        return res.json();
    }).then(data =>{
        let output ="";
        data.forEach(brand => {
            output += `<option>${brand.models}</option>}`;
            console.log(brand.models);
        });
    
        selectDrop.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })
    
    });