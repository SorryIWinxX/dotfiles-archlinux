
var iter=0;
var group1;


function addRows() {
    iter += 1; 
    group1 = document.getElementById('group1').value;
    const tbody = document.querySelector('tbody');
    tbody.innerHTML += '<tr id="sep'+iter+'">\
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

    const divEdit = document.getElementById('edit'+iter);
    const tdEdit= divEdit.parentNode;
    const trEdit = tdEdit.parentNode;
    
    trEdit.innerHTML = '<th scope="row">\
                            <input class"form" class="text" value="'+group1+'">\
                            </input>\
                        <td>\
                            <input class"form" class="text" value="0">\
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