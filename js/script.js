
 $('.feedback-items').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
     fade: true,
  arrows: false,
  asNavFor: '.feedback-icon',
     autoplay: true,
});
$('.feedback-icon').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.feedback-items',
    arrows: false,
  dots: true,
  centerMode: false,
  focusOnSelect: true,
    centerMode: true,
    centerPadding: 0,
});
				