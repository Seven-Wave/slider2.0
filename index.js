$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: true,
        // adaptiveHeight: true,
    })
    $(".title__button").click(function(e){
        e.preventDefault()
        slideIndex = $(this).attr('data-slick-index')
        console.log(parseInt(slideIndex))
        let slider = $('.slider')
        slider[0].slick.slickGoTo( parseInt(slideIndex) )
    })

    $(".back_to_title_button").click(function(e){
        let slider = $('.slider')
        slider[0].slick.slickGoTo(0)
    })

    $('.slider__card').click(function () {
        $('.overview').css({
            'transform': 'translateY(0)'
        })

        $(this).css({
            'opacity' : '0'
        })

    })


    $('.close').click(function () {
        $('.overview').css({
            'transform': 'translateY(100%)'
        })

        $('.slider__card').css({
            'opacity' : '1'
        })
    })


})
