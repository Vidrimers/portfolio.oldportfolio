// let certificates = $(".certificates");

// certificates.slick({
  // prevArrow: '.slider-btn__left',
  // nextArrow: '.slider-btn__right',
  // normal options...
  // arrows: false,
  // dots: false,
  // infinite: true,
  // speed: 800,
  // slidesToShow: 1,
  // slidesToScroll: 1,

  // the magic
  // responsive: [{

  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       infinite: true
  //     }

  //   }, {

  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       dots: true
  //     }

  //   }, {

  //     breakpoint: 300,
  //     settings: "unslick" // destroys slick

  //   }]
// });
console.log("slick/2022");
$(function() {
$('.certificates__slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 800,
  adaptiveHeight: false,
  responsive: [
    { // BREAKPOINT
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        } // SETTINGS
      }, // BREAKPOINT
    { // BREAKPOINT
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        } // SETTINGS
      }, // BREAKPOINT
      
    ]
})
})