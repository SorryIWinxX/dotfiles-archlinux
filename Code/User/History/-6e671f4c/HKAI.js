
var iter=0;
var group1;


function addRows() {
    iter += 1; 
    group1 = document.getElementById('group1').value;
    const tbody = document.querySelector('tbody');
    tbody.innerHTML += '<tr>\
                            <th scope="row">'+ group1 +'\
                            <td>\
                                0\
                            </td>\
                            <td href="#" onclick="editRows()">\
                                <div id="edit'+iter+'">\
                                    <a href="#">\
                                        Editar\
                                    </a>\
                                </div>\
                            </td>\
                      </tr>';

console.log(tbody);
}



function editRows(){

    document.querySelectorAll('a').forEach(cell => {
        cell.addEventListener('click', evt => {
          console.log('The element that was clicked was ', evt.target);
        
        var editBtun = evt.target;
        var editTr = editBtun.parentNode.parentNode;
        
        console.log(editTr);

        editTr.innerHTML = '<th scope="row">\
                                 <input class="form" value="gatos">\
                                </input>\
                            </th>\
                            <td>\
                                <input class="form" value="0">\
                                </input>\
                            </td>\
                            <td>\
                                <div>\
                                    <a href="#">\
                                        Editando\
                                    </a>\
                                </div>\
                            </td>'

        
        
        });
      });
}