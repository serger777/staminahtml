// Работает с POPAP
var myModul = (function () {

    // Инициализирует наш модуль
    var init = function () {
        _setUpListners();
    };

    // Прослушивает события
    var _setUpListners = function() {
        $('.link_prog').bind('click', _showResult);
        console.log('2');
        $('#my-popup2 ').on('click', _showResult);


    };


    var _showResult = function (e) {
        e.preventDefault();
        console.log('221');
        var divPopup = $('#element_to_pop_up');

            form = divPopup.find('.form_1');

        divPopup.bPopup({

            speed: 200,
            transition: 'slideIn',
            modalColor: '#000',
            onClose: function (){
                form.find('.server-mes').text('').hide();
                form.trigger("reset");
                $('.form__input').trigger('hideTooltip');



            }

        });
    };



//
//
//// переменные
//    var _addProjekt = function (e){
//        e.preventDefault();
//
//
//        var form = $(this),
//            url = form.attr('action'),
//            defObj = _ajaxForm(form,url);
//        if(defObj){
//            defObj.done(function(ans) {
//                var successBox = form.find('.success-mes'),
//                    errorBox = form.find('.error-mes');
//
//                if(ans.status === 'OK'){
//                    errorBox.hide();
//                    successBox.text(ans.text).show();
//
//
//                }else{
//
//                    successBox.hide();
//                    errorBox.text(ans.text).show();
//
//                }
//
//            });
//        }
//    };
//
//    var _ajaxForm = function (form,url) {
//
//        data = form.serialize();
//
//        var result = $.ajax({
//            url: url,
//            type: 'POST',
//            dataType: 'json',
//            data: data,
//        }).fail(function(ans) {
//            console.log("Проблеммы в php");
//            form.find('.error-mes').text('Ошибка на сервере').show();
//        });
//        return result;
//    };



    // Возвращаем объект (публичные методы) 
    return {
        init: init
    };


})();
myModul.init();




$('.single-item').slick({

    infinite: true,
    speed: 1000,
    cssEase: 'linear',
    autoplay:true,
    arrows:false,
    autoplaySpeed:3000,
    fade: true,
    dots:true,
});

$('.slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider_for',
    arrows: true,
    centerMode: true,
    adaptiveHeight:true,
    centerPadding: '80px',
    focusOnSelect: true,
    customPaging:'5px',
    width:'250px',
    margin:'25px',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
$('.slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    asNavFor: '.slider_nav'
});

