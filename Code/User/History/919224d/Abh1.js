const buttonFlag = document.getElementById('insertRow');
const table = document.getElementById('table');

var counter = 1;




function addRow(e){
    e.preventDefault();
    const tbody = document.getElementsByTagName('tbody');

    tbody.innerHTML += '<tr>\
                        <th scope="row">\
                            <input type="text" class="form-control">\
                        <td>\
                            <input type="text" class="form-control">\
                        </td>\
                        <td>Editar</td>\
                      </tr>';

    
}