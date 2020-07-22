import "./maskinput";


$('.header__burger').on('click', function() {
    $('.menu').toggleClass('menu--active');
});
$('.menu__close,.menu__link,.menu__avatar').on('click', function() {
    $('.menu').toggleClass('menu--active');
});
$('.menu__link, .header__link, .header__avatar, .menu__avatar').on('click', function(e) {
    e.preventDefault();
    $('.popup').toggleClass('popup--active');
    $('.popup__person').toggleClass('pop--active');
});
$('.popup__close, .success__button').on('click', function() {
    $('.popup').toggleClass('popup--active');
    $('.pop--active').toggleClass('pop--active');
});

$('.popup__button').on('click', function() {
    if(!$(this).hasClass('popup__button--active')){
        $('.popup__button').toggleClass('popup__button--active');
    }
    
    if($(this).hasClass('popup__button-history')){
        $('.popup__profile').removeClass('popup__toggle--active');
        $('.popup__history').addClass('popup__toggle--active');
    }else{
        $('.popup__history').removeClass('popup__toggle--active');
        $('.popup__profile').addClass('popup__toggle--active');
    }
});



if(!$('.history__timetable').hasClass('history__timetable--active')){
    $('.history__about').addClass('history__about--active');

}else{
    $('.history__about').removeClass('history__about--active');

};

$('.main__form').on('submit', function (e) {
    e.preventDefault();
    $('.popup').toggleClass('popup--active');
    $('.popup__auth').toggleClass('pop--active');
});
$('.auth__form').on('submit', function (e) {
    e.preventDefault();
    $('.popup__auth').toggleClass('pop--active');
    $('.popup__auth-code').toggleClass('pop--active');
});
$('.auth__form--code').on('submit', function (e) {
    e.preventDefault();
    $('.popup__auth-code').toggleClass('pop--active');
    $('.popup__success').toggleClass('pop--active');
});



import "./datepicker";


$('[data-toggle="datepicker"]').datepicker({
    language: 'ru-RU',
    format: 'dd.mm.yyyy'
});

jQuery(function($){
    $("#tel, #num").mask("+38(999) 999-99-99");
    $('#date').mask('99.99.9999', {placeholder: "дд.мм.гггг"});
});