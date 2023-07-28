//   https://mattboldt.com/demos/typed-js/
//   https://github.com/mattboldt/typed.js/
//   http://imakewebthings.com/waypoints/
//   https://yiotis.net/filterizr/#/

$(document).ready(function () {
  var typed = new Typed('.element', {
    strings: [
      'napraviti veb sajt.',
      'napraviti veb aplikaciju.',
      'optimizovati veb sajt.',
    ],
    typeSpeed: 120,
    loop: true,
    loopCount: Infinity,
    startDelay: 4000,
  });
  var waypoint = new Waypoint({
    element: document.getElementById('iskustvo'),
    handler: function (direction) {
      var progress = document.querySelectorAll('.progress-bar');
      progress[0].setAttribute('style', 'width:95%; transition:2s all');
      progress[1].setAttribute('style', 'width:60%; transition:2s all');
      progress[2].setAttribute('style', 'width:50%; transition:2s all');
      progress[3].setAttribute('style', 'width:40%; transition:2s all');
    },
    offset: '90%',
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000]);
  });
  $('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay');
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 650) {
      document.querySelector('#navbar').style.opacity = 0;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });
  var filterizr = $('.filter-container').filterizr({
    animationDuration: 0.5,
  });
});
