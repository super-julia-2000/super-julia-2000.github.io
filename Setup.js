const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const header_calendar = document.getElementById('head-calen');
const today = new Date();
header_calendar.innerText = months[today.getMonth()] + ":";
const calendar = document.getElementById('calendar');
for (var week = 0, i = 1; week < 4; week++) {
    var newRow = calendar.insertRow();
    for (var day = 0; day < 7; day++, i++) {
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(i);
        newCell.appendChild(newText);
    }
}
