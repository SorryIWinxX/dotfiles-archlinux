const buttonFlag = document.getElementById('insertRow');
const table = document.getElementById('table');

var counter = 1;

function addRow(){


       html = '<tr>\
                        <th scope="row">\
                            <input type="text" class="form-control">\
                        <td>\
                            <input type="text" class="form-control">\
                        </td>\
                        <td>Editar</td>\
                      </tr>'

        
        
       var bodyT = document.getElementsByTagName('tbody');
       
       console.log(bodyT);
       
       bodyT.innerHTML+=html;
    }