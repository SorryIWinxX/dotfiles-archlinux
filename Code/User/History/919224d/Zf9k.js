const buttonFlag = document.getElementById('insertRow');
const table = document.getElementById('table');

var counter = 1;

function addRow(){

       var addingrows = '<tr><th scope="row"><input type="text" class="form-control"> </td><td><input type="text" class="form-control"></td><td>Editar</td></tr><tr><th scope="row"><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td><td>Editar</td></tr>' 


        var bodyT = document.getElementsByTagName('tbody');
        bodyT.innerHTML+=addingrows;
    }