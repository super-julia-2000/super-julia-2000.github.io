function Export() {
    var data = ["ФИО",",","Дата","\n","gf",",","04.04","\n","ff",",","05.05"];
    var file = new Blob(data, { type: "csv" });
    var a = document.createElement("a"),
        url = URL.createObjectURL(file);
    a.href = url;
    a.download = "test1.csv";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}
function sel_tr() {
    var a = document.getElementById("t" + this.id);
    if (a.className == "table-default")
        a.className = "table-secondary";
    else
        a.className = "table-default";
}
function sel_all_tr(caller){
    const trs = document.getElementById('tb_clients').children;
    if(caller.checked == true){
        for(let i = 0;i<trs.length;i++){
            trs[i].className = "table-secondary";
            trs[i].children[0].children[0].checked = true;
        }
    } else {
        for(let i = 0;i<trs.length;i++){
            trs[i].className = "table-default";
            trs[i].children[0].children[0].checked = false;
        }
    }
}
function content_tb() {
    //location.replace("./t1.html");
    //window.location.href = "./t1.html";
    const table = document.getElementById('tb_clients');
    
    for (let i = 0; i < 4; i++) {
        var newRow = table.insertRow();
        newRow.id = "tt" + i;
        newRow.className = "table-default";
        var newCell = newRow.insertCell();
        var newobj = document.createElement("input");
        newobj.id = "t" + i;
        newobj.type = "checkbox";
        newobj.addEventListener("click", sel_tr);
        newCell.appendChild(newobj);
        for (let j = 0; j < 4; j++) {
            newCell = newRow.insertCell();
            var newText = document.createTextNode("kx");
            newCell.appendChild(newText);
        }
    }
    console.log(table.children[0]);
}