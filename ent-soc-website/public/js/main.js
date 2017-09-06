$( document ).ready(function() {
    $('#JoinModal').on('show.bs.modal', function (e) {
            console.log('hello');
            $('iframe').attr("src", 'https://entsoc.typeform.com/to/lZRrKT');
        });
    $(document).on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
    });
    $(document).on('scroll', function() {
        if($(window).scrollTop() > $(window).height() - 70) {
            $('#header').css({position: 'fixed', top: "0px", backgroundColor: "rgba(52, 58, 64, 0.8) !important"});
        } else {
            $('#header').css({position: 'absolute', top: "calc(100% - 70px)", backgroundColor: "rgba(52, 58, 64, 1) !important"});
        }
    });
});