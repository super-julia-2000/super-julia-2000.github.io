function outFocusTel(caller) {
    if (caller.value.length == 0)
        caller.value = "+7";
    else {
        var count = 0;
        if (caller.value.length == 1) {
            count = 2;
            if (caller.value.charAt(0) == '+' || caller.value.charAt(0) == '7')
                count--;
        } else {
            if (caller.value.charAt(0) == '+') {
                if (caller.value.charAt(1) != '7')
                    count++;
            } else {
                count++;
                if (caller.value.charAt(0) != '7')
                    count++;
            }
        }
        if (count != 0) {
            var arr = new Array(caller.value.length + count);
            var ind = 0;
            if (count == 1)
                ind = 1;
            arr[0] = '+';
            arr[1] = '7';
            for (var i = 2; i < arr.length; i++, ind++)
                arr[i] = caller.value.charAt(ind);
            caller.value = arr.flat().join('');
        }
    }
}
function client_switch(caller){
    if(caller.id == "btn_pattern"){
        document.getElementById("btn_clients").className="btn btn-light";
        caller.className = "btn btn-secondary";
        document.getElementById("book_of_clients").hidden = true;
        document.getElementById("form_properties").hidden = false;
    } else {
        document.getElementById("btn_pattern").className="btn btn-light";
        caller.className = "btn btn-secondary";
        document.getElementById("form_properties").hidden = true;
        document.getElementById("book_of_clients").hidden = false;
    }
}
