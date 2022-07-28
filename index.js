$( document ).ready(function() {
    // $(".fuq").click( () => {


    // })

    // console.log($(".fuq"))

    $(".fuq").each( function(index) {

        let initialHeight = $(this).outerHeight()

        // console.log(this, initialHeight)

        let ans = $(this).find(".answer")

        ans.removeClass('hidden')

        let openHeight = $(this).outerHeight()

        ans.addClass('hidden')

        $(this).css('height', initialHeight)


        $(this).click( function()  {

            let classes = ans.attr('class').split(' ')

            if(classes.indexOf('hidden') >= 0){
                ans.removeClass('hidden')
                ans.parent().css('height', openHeight)
            } else {
                ans.addClass("hidden")
                ans.parent().css('height', initialHeight)
            }

        })

    });

});

$(document).scroll( (yo) => {
    if($(document).scrollTop() > 15){
        $('header').addClass("shadow-md")
    } else {
        $('header').removeClass("shadow-md")
    }
})