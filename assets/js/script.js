$(document).ready(function() {
    //Moment.js code for current date and time
    const NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    
    
});

$(".time-div").each(function() {
    const NowTime = moment().format("HH");
    var timeDiv = $(this).attr("id").split("-")[1];
    console.log(NowTime);
    console.log(timeDiv);

    if (NowTime == timeDiv) {
        $(this).css("background-color", "red");
    } else if (NowTime < timeDiv) {
        $(this).css("background-color", "#ACF97F");
    } else if (NowTime > timeDiv) {
        $(this).css("background-color", "#D0D0D0");
    }
});

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var args = $(this).siblings(".time-block").val();
    var time =$(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, args);
});

$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
