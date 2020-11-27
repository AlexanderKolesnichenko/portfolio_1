document.addEventListener('DOMContentLoaded', function () {


//карусель-хедер//

    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        margin: 0,
        nav: true,
        navText: [],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            485: {
                items: 1
            }
        }
    })

//карусель-хедер//

//кнопки переключения слайда в хедере//

    $('.owl-prev').append(' <svg class="carousel-svg">\n' +
        '                    <use xlink:href="img/symbol/sprite.svg#carousel-left"></use>\n' +
        '                </svg>');


    $('.owl-next').append(' <svg class="carousel-svg">\n' +
        '                    <use xlink:href="img/symbol/sprite.svg#carousel-right"></use>\n' +
        '                </svg>');

//кнопки переключения слайда в хедере//


    //карусель-посты//


    $('.carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: [],
        responsive: {
            0: {
                items: 1

            },
            480: {
                items: 2

            },

            768: {
                items: 3

            }

        }
    })

//карусель-посты//


//кнопки переключения слайда в хедере//

    $('.carousel .owl-prev').append(' <svg class="posts__left-svg">\n' +
        '                    <use xlink:href="img/symbol/sprite.svg#posts-left"></use>\n' +
        '                </svg>');


    $('.carousel .owl-next').append(' <svg class="posts__right-svg">\n' +
        '                    <use xlink:href="img/symbol/sprite.svg#posts-right"></use>\n' +
        '                </svg>');

//кнопки переключения слайда в хедере//


    // //=============Кнопка пуска видео================
    var overlay = document.querySelector('.video__overlay'); //блок с кнопочкой
    var vid = document.querySelector('.video__video'); // тег видео

    $('.video__overlay').click(function () {
        $('.video__text').css({display: 'none'});
        $(this).css('background-position', '50% 50%', 'background-repeat', 'no-repeat');

    });

    if (overlay.addEventListener) {
        overlay.addEventListener("click", play, false)

    } else if (overlay.attachEvent) {
        overlay.attachEvent("onclick", play)
    }

    function play() {
        if (vid.paused) {
            vid.play();
            overlay.classList.add("o");
        } else {
            vid.pause();
            overlay.classList.remove("o");
        }
    }

// //=============Кнопка пуска видео================


    //============анимация счетчика==============


    $(window).scroll(function () {

        if ($('.counters').offset().top <= $(window).scrollTop() + 350) {

            a.start();
            b.start();
            c.start();
            d.start();
            i.start();
        }

    });

    var a = new CountUp("counter1", 0, 3587, 0, 3, {

        separator: ''

    });
    var b = new CountUp("counter2", 0, 207, 0, 3);
    var c = new CountUp("counter3", 0, 2500, 0, 3, {

        separator: ''

    });
    var d = new CountUp("counter4", 0, 873, 0, 3);
    var i = new CountUp("counter5", 0, 900, 0, 3);

    //============анимация счетчика==============





    //============интерактивность==============


    $('.projects__buttons a, .projects__buttons button').on('focus', function (e) {

        $(this).parents('.projects__element').addClass('projects__element--active');

    });

    $('.projects__buttons a, .projects__buttons button').on('blur', function (e) {

        $(this).parents('.projects__element').removeClass('projects__element--active');

    });

    $('.posts__descriptionArea a').on('focus', function (e) {

        $(this).parents('.posts__element').addClass('posts__element--active');

    });

    $('.posts__descriptionArea a').on('blur', function (e) {

        $(this).parents('.posts__element').removeClass('posts__element--active');

    });


//============интерактивность==============


}, false);

