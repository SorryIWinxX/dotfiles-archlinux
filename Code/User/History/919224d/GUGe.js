const buttonFlag = document.getElementById('insertRow');
const table = document.getElementById('table');

var counter = 1;


html = '<tr>\
                        <th scope="row">\
                            <input type="text" class="form-control">\
                        <td>\
                            <input type="text" class="form-control">\
                        </td>\
                        <td>Editar</td>\
                      </tr>'

function addRow(tbody,html){

    var tbody = document.getElementsByTagName('tbody')
console.log(tbody)
    var temp = tbody.ownerDocument.createElement('div');
    temp.innerHTML = '<table>' + html + '</table>';
  
    tbody.parentNode.replaceChild(temp.firstChild.firstChild, tbody); 
    
}