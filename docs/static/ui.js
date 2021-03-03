$('.ui.dropdown').dropdown();


$(document).ready(function() {
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function() {
            $('.ui.menu').removeClass("sticky huge").addClass("fixed large");
            $('.ui.logo').removeClass("medium").addClass("small");
        },
        onBottomPassedReverse: function() {
            $('.ui.menu').addClass("sticky huge").removeClass("fixed large");
            $('.ui.logo').removeClass("small").addClass("medium");
        }
    });
});
