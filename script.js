$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 880) {
            $('.scroll-top').fadeIn();
            $('.margat2').fadeIn()
        } else {
            $('.scroll-top').fadeOut();
            $('.margat2').fadeOut()
        }
    });

    $('.scroll-top').click(function () {
        $('html').animate({ scrollTop: 0 }, 1);
    });
    
    $('.bottombtn').on('click', function() {
        $('html').animate({
            scrollTop: $('html')[0].scrollHeight
        }), 1;
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 880) {
            $('.topDiv2').slideDown()
        }
        else {
            $('.topDiv2').slideUp()
        }
    })

    $('.divklor').on('click', '.sharjvox',  function(){
        $(this).css({
            marginLeft: '11px',
            background: 'white'
        })
        
        $('.scroll-top, .btn, .bottombtn, .sec2span1, .sec3span1, .sec4span1, .sec1Blackspan, .sec6span1, .sec7span1').css({
            background: 'white',
            color: 'black'
        })

        $('.divklor, .margat2, .margat').css({
            border: '1px solid white'
        })

        $('body, .leftDiv, .topDiv2, .topDiv, .rightDiv, footer, nav').css({
            background: 'black',
            color: 'white'
        })
    })
})