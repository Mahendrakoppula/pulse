document.addEventListener('DOMContentLoaded', function () {
    var visitorCountElement = document.getElementById('visitorCount');
    var count = parseInt(localStorage.getItem('visitorCount'));

    if (isNaN(count) || count < 120000) {
        count = 120000;
        localStorage.setItem('visitorCount', count.toString());
    }
    visitorCountElement.textContent = 'Visitors Count: ' + count;
    count++;
    localStorage.setItem('visitorCount', count.toString());
});



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);


// **Form Data**

document.addEventListener("DOMContentLoaded", function () {
    const scriptURL = "https://script.google.com/u/0/home/projects/1X6YmTH00uU2ckUxL6Eo9Vdccx4HXiESUKbn20-kMq1EyGYe3AV2FvRxQ/edit";
    const form = document.forms["submit-to-google-sheet"];
    const submitButton = document.getElementById("submit-button");
  
    if (!submitButton) {
      console.error("Submit button not found.");
      return;
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      submitButton.innerHTML = '<span>Submitting...</span>';
  
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          form.reset();
          submitButton.innerHTML = '<span>Submit</span>';
          alert("Your response has been submitted successfully!");
          console.log("Success!", response);
        })
        .catch((error) => {
          submitButton.innerHTML = '<span>Submit</span>';
          console.error("Error!", error.message);
        });
    });
  });

