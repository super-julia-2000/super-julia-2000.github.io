const my_options = [new Option("Строка", 0),
    new Option("Число", 1),
    new Option("Телефон",2),
    new Option("Почта",3),
    new Option("Дата",4),
    new Option("Валюта",5),
    new Option("Справочник",6),
    ];
function content_properties_tb() {
    const table = document.getElementById('tb_properties');
    var newRow = table.insertRow();
    var newCell = newRow.insertCell();
    var newobj = document.createElement("img");
    newobj.src = "images/delete.png";
    newCell.appendChild(newobj);
    newCell = newRow.insertCell();
    newobj = document.createElement("input");
    newobj.className = "form-control";
    newobj.type = "text";
    newCell.appendChild(newobj);
    newCell = newRow.insertCell();
    newobj = document.createElement("select");
    console.log(newobj.options);
    for(var i=0;i<7;i++)
        newobj.options[i] = my_options[i];
    newobj.className = "form-select";
    
    newCell.appendChild(newobj);
}