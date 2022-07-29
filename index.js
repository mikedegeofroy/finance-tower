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

        let toggleButton = $(this).find("button")

        let toggleHeader = $(this).find(".toggle")

        ans.removeClass('hidden')

        let openHeight = $(this).outerHeight()

        ans.addClass('hidden')

        $(this).css('height', initialHeight)

        $(toggleHeader).click( function()  {

            console.log("lox")

            let classes = ans.attr('class').split(' ')

            if(classes.indexOf('hidden') >= 0){
                ans.removeClass('hidden')
                toggleButton.text("-")
                ans.parent().css('height', openHeight)
            } else {
                ans.parent().css('height', initialHeight)
                toggleButton.text("+")
                ans.addClass("hidden")
            }

        })

    });
}