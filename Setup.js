document.getElementById('Main').hidden = true;
document.getElementById('Clients').hidden = false;
function InputTel(caller) {

}
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
/*const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const header_calendar = document.getElementById('head-calen');
const today = new Date();
header_calendar.innerText = months[today.getMonth()] + " " + today.getFullYear();
const calendar = document.getElementById('calendar');
for (var week = 0, i = 1; week < 4; week++) {
    var newRow = calendar.insertRow();
    for (var day = 0; day < 7; day++, i++) {
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(i);
        newCell.appendChild(newText);
    }
}*/
