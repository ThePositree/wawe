$(function () {
  $('.menu a').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
});
  $('.burger, .menu a').on('click', function () {
    $('.header__inner-top').toggleClass('header__inner-top--active')
  })
  var mixer = mixitup('.gallery__items-wrapper');
  $('.blog__slider').slick({
    arrows:false,
    dots:true,
  });
});