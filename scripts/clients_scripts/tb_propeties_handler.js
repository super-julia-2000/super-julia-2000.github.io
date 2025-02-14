const form_sel_list = document.getElementById('form_sel_list');
var select_list;
function on_sel(){
    select_list = this;
    if(this.options.selectedIndex == 6){
        form_sel_list.style.display = "block";
        console.log("jkl");
    }
}
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
    newobj.options[0] = new Option("Строка", 0);
    newobj.options[1] = new Option("Число", 1);
    newobj.options[2] = new Option("Телефон",2);
    newobj.options[3] = new Option("Почта",3);
    newobj.options[4] = new Option("Дата",4);
    newobj.options[5] = new Option("Валюта",5);
    newobj.options[6] = new Option("Справочник","root");
    newobj.className = "form-select";
    newobj.addEventListener("change",on_sel);
    newCell.appendChild(newobj);
}
function close_sel_list(is_non_selected) {
    if(is_non_selected)
        select_list.options.selectedIndex = 0;
    form_sel_list.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == form_sel_list) {
        close_sel_list(true)
    } 
}