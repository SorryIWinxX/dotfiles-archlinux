
var iter=0;
function addRows() {
    iter += 1; 
    var group1 = document.getElementById('group1').value;
    const tbody = document.querySelector('tbody');
    tbody.innerHTML += '<tr id="sep"'+iter+'>\
                        <th scope="row">'+ group1 +'<td>\
                            0\
                        </td>\
                        <td href="#" onclick="editRows()">\
                           <div>\
                        <a href="#">\
                            Editar\
                        </a>\
                        </div>\
                        </td>\
                      </tr>';

console.log(tbody);
}


console.log(trEdit);

function editRows(iter){
    
    console.log(trEdit);
    trEdit.innerHTML = '<th scope="row">\
                            <input class"form" value="gatos">\
                            </input>\
                        <td>\
                            <input class"form" value="perros">\
                            </input>\
                        </td>\
                        <td href="#">\
                           <div>\
                        <a href="#">\
                            Editando\
                        </a>\
                        </div>\
                        </td>'
}