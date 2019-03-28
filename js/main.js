// My JavaScript 


// JQUERY
// For my back to top button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

// function changeColor() {
//   let btn = document.getElementById("heart");
//       btn1 = document.getElementById("heart-1");
//       btn2 = document.getElementById("heart-2");
//       btn3 = document.getElementById("heart-3");

//   btn.style.color = "red";
//   btn1.style.color = "red";
//   btn2.style.color = "red";
//   btn3.style.color = "red";
// }
