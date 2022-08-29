const buttonFlag = document.getElementById('insertRow');
const table = document.getElementById('table');

function addRow()
{

        
        
        

        var newRow = document.getElementsByTagName('tr');
        var cols = '';
        // Table columns
        cols += '<th scrope="row">' + counter + '</th>';
        cols += '<td><input class="form-control rounded-0" type="text" name="firstname" placeholder="First name"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="lastname" placeholder="Last name"></td>';
        cols += '<td><input class="form-control rounded-0" type="text" name="handle" placeholder="Handle"></td>';
        cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';

        // Insert the columns inside a row
        newRow.append(cols);

        // Insert the row inside a table
        table.append(newRow);

        // Increase counter after each row insertion
        counter++;

        console.log(table);

        
}