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
    
}


})
