const buttonFlag = document.getElementById('insertRow');
const table = document.getElementById('table');

var counter = 1;
var tbody = document.getElementsByTagName('tbody')

html = '<tr>\
                        <th scope="row">\
                            <input type="text" class="form-control">\
                        <td>\
                            <input type="text" class="form-control">\
                        </td>\
                        <td>Editar</td>\
                      </tr>'

function addRow(tbody,html){

    alert('hola');
    var temp = tbody.ownerDocument.createElement('div');
    temp.innerHTML = '<table>' + html + '</table>';
  
    tbody.parentNode.replaceChild(temp.firstChild.firstChild, tbody); 
    
}