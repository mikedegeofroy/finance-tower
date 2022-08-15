$(document).ready(function () {

    fuqQuestions();

    hooks();

    window.addEventListener("touchstart", eventListener, { passive: false });

});

$(document).scroll((yo) => {
    if ($(document).scrollTop() > 15) {
        $('header').addClass("shadow-sm")
    } else {
        $('header').removeClass("shadow-sm")
    }
})

function hooks() {
    $(".contact").each(function () {
        $(this).click(function () {
            window.open('https://t.me/mikedegeofroy', '_blank');
            // window.location.href = 'https://t.me/mikedegeofroy'
        })
    })

    $(".logo").click(function () {
        window.scrollTo(0,0)
    })

    $(".remote").click(function () {
        // document.getElementsByClassName(".faq").scrollIntoView();
        $(".faq")[0].scrollIntoView();
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