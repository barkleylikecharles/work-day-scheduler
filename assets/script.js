//Use moment to display today's date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//Function for each hour button to save info written in the text area and display
$(document).ready(function (){
    $(".saveBtn").on("click", function () {
//Get values
        var text = $(this).siblings("description").val();
        var time = $(this).parent().attr("id");
// Save to local storage        
        localStorage.setItem(time, text);
    })
//Function to track the current time using moment

function timeTracker() {
    var timeNow = moment().hour();
// Split hours into blocks and add past, present and future classes
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
//Pull all hour data from localStorage
$("#hour8.description").val(localStorage.getItem("hour8"));
$("#hour9.description").val(localStorage.getItem("hour9"));
$("#hour10.description").val(localStorage.getItem("hour10"));
$("#hour11.description").val(localStorage.getItem("hour11"));
$("#hour12.description").val(localStorage.getItem("hour12"));
$("#hour13.description").val(localStorage.getItem("hour13"));
$("#hour14.description").val(localStorage.getItem("hour14"));
$("#hour15.description").val(localStorage.getItem("hour15"));
$("#hour16.description").val(localStorage.getItem("hour16"));
$("#hour17.description").val(localStorage.getItem("hour17"));

//Call the time tracker function once local storage pulled
timeTracker();

})
