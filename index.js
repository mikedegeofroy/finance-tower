$( document ).ready(function() {

    fuqQuestions();

});

$(document).scroll( (yo) => {
    if($(document).scrollTop() > 15){
        $('header').addClass("shadow-sm")
    } else {
        $('header').removeClass("shadow-sm")
    }
})

function fuqQuestions(){
    $(".fuq").each( function(index) {

        let initialHeight = $(this).outerHeight()

        // console.log(this, initialHeight)

        let ans = $(this).find(".answer")

        let toggleButton = $(this).find(".grid p")

        let toggleHeader = $(this).find(".toggle")

        ans.removeClass('hidden')

        let openHeight = $(this).outerHeight()

        ans.addClass('hid')

        $(this).css('height', initialHeight)

        $(toggleHeader).click( function()  {

            let classes = ans.attr('class').split(' ')

            if(classes.indexOf('hid') >= 0){
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