function updateCalendar(){
    const now = new Date();
    const day = now.getDate();
    const monNames = ["Jan", "Feb", "Mar", "April"];

    const month = monNames[now.getMonth()];


    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;


}

updateCalendar();