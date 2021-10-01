var currentTime = moment().format('MMM Do, YYYY');
$('#currentDay').text();

 var timeBlock = document.getElementById("#hour-9")

for (i = 9; i < 17; i++){
  if (timeBlock < currentTime) {
    $(timeBlock).addClass("#past");
  }
    if (timeBlock === currentTime) {
      timeBlock.addClass("#present");
    }
    if (timeBlock > currentTime) {
      timeBlock.addClass("#future");
    }
  



var hour9 = localStorage.getItem("hour-9");
if (hour9) {
  $("#hour-9").val(hour9);
}

var hour10 = localStorage.getItem("hour-10");
if (hour10) {
  $("#hour-10").val(hour10);
}
var hour11 = localStorage.getItem("hour-11");
if (hour11) {
  $("#hour-11").val(hour11);
}
var hour12 = localStorage.getItem("hour-12");
if (hour12) {
  $("#hour-12").val(hour12);
}
var hour13 = localStorage.getItem("hour-13");
if (hour13) {
  $("#hour-13").val(hour13);
}
var hour14 = localStorage.getItem("hour-14");
if (hour14) {
  $("#hour-14").val(hour14);
}
var hour15 = localStorage.getItem("hour-15");
if (hour15) {
  $("#hour-15").val(hour15);
}
var hour16 = localStorage.getItem("hour-16");
if (hour16) {
  $("#hour-16").val(hour16);
}

$(".btn-save").on("click", function () {
  var input = $(this).parent().children("textarea");
  var reminder = input.val();
  var id = input.attr("id");
  localStorage.setItem(id, reminder);
});

}

    






        
    




 





