var saveBtn = document.querySelectorAll(".saveBtn");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var input6 = document.getElementById("input6");
var input7 = document.getElementById("input7");
var input8 = document.getElementById("input8");
var input9 = document.getElementById("input9");

// set current date to display
$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

function timeTracker() {
  var currentTime = moment().hour();

  $(".time-block").each(function () {
    var sectionTime = parseInt($(this));
    console.log(sectionTime);
    if (sectionTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (sectionTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
    });
}


