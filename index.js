$(document).ready(function () {

    fuqQuestions();

    hooks();

    window.addEventListener("touchstart", eventListener, { passive: false });

});

$(document).scroll((yo) => {
    let classes = $(".burger-menu").attr('class').split(' ')

    if ($(document).scrollTop() > 15 && classes.indexOf('closed') > 0) {
        $('header').addClass("shadow-sm")
    } else {
        $('header').removeClass("shadow-sm")
    }
})

function hooks() {
    $(".contact").each(function () {
        $(this).click(function () {
            window.open('https://t.me/mikedegeofroy', '_blank');
        })
    })

    $(".logo").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500, 'swing')
    })

    function openBurger() {

        let children = $(".burger").find("div")

        $(children[0]).css({ transform: "translate(0, 6.3px) rotate(45deg)", transition: "transform 0.1s" });
        setTimeout(function () { $(children[0]).css({ transition: "none" }) }, 100);


        $(children[1]).css({ opacity: 0, transition: "opacity 0.1s" });
        setTimeout(function () { $(children[1]).css({ transition: "none" }) }, 100);

        $(children[2]).css({ transform: "translate(0, -6.3px) rotate(-45deg)", transition: "transform 0.1s" });
        setTimeout(function () { $(children[2]).css({ transition: "none" }) }, 100);

        $(".burger").removeClass('closed')
        $("header").removeClass('shadow-sm')
        $(".burger").addClass('open')

        $('.burger-menu').removeClass('closed')
        $('.burger-menu').animate({ top: '+=400' }, 250)
    }

    function closeBurger() {

        let children = $(".burger").find("div")

        $(children[0]).css({ transform: "translate(0, 0) rotate(0deg)", transition: "transform 0.1s" });
        setTimeout(function () { $(children[0]).css({ transition: "none" }) }, 100);


        $(children[1]).css({ opacity: 1, transition: "opacity 0.1s" });
        setTimeout(function () { $(children[1]).css({ transition: "none" }) }, 100);

        $(children[2]).css({ transform: "translate(0, 0) rotate(0deg)", transition: "transform 0.1s" });
        setTimeout(function () { $(children[2]).css({ transition: "none" }) }, 100);

        $(".burger").removeClass('open')
        $(".burger").addClass('closed')

        if ($(document).scrollTop() > 15) {
            $("header").addClass('shadow-sm')
        }

        $('.burger-menu').addClass('closed')
        $('.burger-menu').animate({ top: '-=400' }, 250)
    }

    $(".burger").click(function () {

        let classes = $(this).attr('class').split(' ')

        if (classes.indexOf('closed') > 0) {
            openBurger()
        } else {
            closeBurger()
        }

    })

    $($(".navigation").find("p")[0]).click(function () {
        $("#benefits")[0].scrollIntoView({ behavior: 'smooth' });
    })

    $($(".navigation").find("p")[1]).click(function () {
        $("#investment")[0].scrollIntoView({ behavior: 'smooth' });
    })

    $($(".navigation").find("p")[2]).click(function () {
        $("#process")[0].scrollIntoView({ behavior: 'smooth' });
    })
    
    $($(".navigation").find("p")[3]).click(function () {
        $("#terms")[0].scrollIntoView({ behavior: 'smooth' });
    })

    $($(".navigation").find("div")[0]).click(function () {
        closeBurger()
        $("#benefits")[0].scrollIntoView({ behavior: 'smooth' });
    })

    $($(".navigation").find("div")[1]).click(function () {
        closeBurger()
        $("#investment")[0].scrollIntoView({ behavior: 'smooth' });
    })

    $($(".navigation").find("div")[2]).click(function () {
        closeBurger()
        $("#process")[0].scrollIntoView({ behavior: 'smooth' });
    })
    
    $($(".navigation").find("div")[3]).click(function () {
        closeBurger()
        $("#terms")[0].scrollIntoView({ behavior: 'smooth' });
    })

    $(".remote").click(function () {
        // document.getElementsByClassName(".faq").scrollIntoView();
        $("#faq")[0].scrollIntoView({ behavior: 'smooth' });
    })

    let proptab = $(".properties")

    $(".properties-tggl").each(function () {
        $(this).click(function () {

            let classes = proptab.attr('class').split(' ')

            if (classes.indexOf('hidden') > 0) {
                proptab.removeClass('hidden')
                $("body").css("overflow", "hidden");
                $('body').bind('touchmove', function (e) { e.preventDefault() })
            } else {
                proptab.addClass('hidden')
                $("body").css("overflow", "auto");
                $('body').unbind('touchmove')
            }
        })
    })
}

function fuqQuestions() {
    $(".fuq").each(function (index) {

        let initialHeight = $(this).outerHeight()

        // console.log(this, initialHeight)

        let ans = $(this).find(".answer")

        let toggleButton = $(this).find(".grid p")

        let toggleHeader = $(this).find(".toggle")

        ans.removeClass('hidden')

        let openHeight = $(this).outerHeight()

        ans.addClass('hid')

        $(this).css('height', initialHeight)

        $(toggleHeader).click(function () {

            let classes = ans.attr('class').split(' ')

            if (classes.indexOf('hid') >= 0) {
                ans.removeClass('hid')
                toggleButton.text("-")
                ans.parent().css('height', openHeight)
            } else {
                ans.parent().css('height', initialHeight)
                toggleButton.text("+")
                ans.addClass("hid")
            }

        })

    });
}