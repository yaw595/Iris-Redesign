$('.carousel').carousel({
    interval: 4000
  })


$(document).ready(function() {
  $("nav").click(function() {
    $(this).toggleClass("_expand");
  });
}); 


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}