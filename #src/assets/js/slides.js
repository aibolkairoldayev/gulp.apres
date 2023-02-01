$('.partners_slider').slick({
  infinite: true,
  loop: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  rows: 2,
  dots: false,
  autoplay: true,
  focusOnSelect: true,
  autoplaySpeed: 4000,
  prevArrow: $('.homePage_block4 .arrows_left'),
  nextArrow: $('.homePage_block4 .arrows_right'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
      }
    }
  ]
});
$('.newGoods_slider').slick({
  infinite: true,
  loop: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  autoplay: true,
  focusOnSelect: true,
  autoplaySpeed: 4000,
  prevArrow: '<img src="./assets/img/icons/arrowLeft_sliderBlue.svg" alt="" class="block2__arrowLeft">',
  nextArrow: '<img src="./assets/img/icons/arrowRight_sliderBlue.svg" alt="" class="block2__arrowRight">',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
      }
    }
  ]
});

$('.product__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product__gallery'
});
$('.product__gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product__slider',
  dots: false,
  arrows: false,
  focusOnSelect: true
});

