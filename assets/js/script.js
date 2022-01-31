$(document).ready(function() {
    //Moment js library to get format of date
    const NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment; 
});
// function to execute all args for each element in the class
$(".time-div").each(function() {
    // get current hour
    const NowTime = moment().format("HH");
    // get id and split it to get element hour id
    var timeDiv = $(this).attr("id").split("-")[1];
    // determinates if blocks are past present of future
    if (NowTime == timeDiv) {
        $(this).css("background-color", "red");
    } else if (NowTime < timeDiv) {
        $(this).css("background-color", "#ACF97F");
    } else if (NowTime > timeDiv) {
        $(this).css("background-color", "#D0D0D0");
    }
});
// event to save user input in the local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var args = $(this).siblings(".time-block").val();
    var time =$(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, args);
});
// get local storage for each block 
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
