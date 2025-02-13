var form_create_group = document.getElementById("form_create_group");
var form_create_list = document.getElementById("form_create_list");
function create_group() {
    form_create_group.style.display = "block";
}
function close_group_creater() {
    form_create_group.style.display = "none";
}
function create_list() {
    form_create_list.style.display = "block";
}
function close_list_creater(){
    form_create_list.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == form_create_group) {
        close_group_creater()
    } else if(event.target == form_create_list){
        close_list_creater()
    }
}