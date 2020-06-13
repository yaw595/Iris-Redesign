jQuery(function($) {
  if ($(window).width() > 769) {
    $('.navbar .dropdown').hover(function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown(200);

    }, function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp(200);

    });

    $('.navbar .dropdown > a').click(function() {
      location.href = this.href;
    });

  }
});

$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $(".navbar").css('background-color', '#f0f0f0f9');
        $(".navbar").css('transition', 'all ease-in-out 0.5s');
      } else {
        $('.navbar').css('background-color', 'transparent');
        $(".navbar").css('transition', 'all ease-in-out 0.5s');
      }
    });
  }
});


var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 17, 7, 12, 5, 9],
            backgroundColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3,
            strokeColor: "#ff4500"
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});