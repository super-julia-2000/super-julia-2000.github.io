var modal = document.getElementById("form_create_group");
function create_group(){
    document.getElementById("form_create_group").style.display="block";
}
function close_group_creater(){
    document.getElementById("form_create_group").style.display="none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }