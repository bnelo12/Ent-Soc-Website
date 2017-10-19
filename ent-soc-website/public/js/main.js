$( document ).ready(function() {
    $('#JoinModal').on('show.bs.modal', function (e) {
            console.log('hello');
            $('iframe').attr("src", 'https://docs.google.com/forms/d/e/1FAIpQLSeN91F9c-CLWDNVEyh0lgWLDXhBEZ72K0khPt-5e8qg2qCcRw/viewform?usp=sf_link');
        });
    $(document).on('click', '.nav-link', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: ($( $.attr(this, 'href') ).offset().top - 70)
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

var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

var appendEventDiv = function(eventID, name, location, date) {
    let eventTemplate = $('#event-template').clone();
    eventTemplate.attr('id', eventID);
    let eventName = eventTemplate.find('.event-description-name');
    let eventLocation = eventTemplate.find('.event-description-location');
    let eventMonth = eventTemplate.find('.event-month');
    let eventDay = eventTemplate.find('.event-day');
    let p_date = new Date(date);
    eventName.text(name);
    eventLocation.text(location);
    eventMonth.text(monthNames[p_date.getMonth()]);
    eventDay.text(p_date.getDate());
    $('.events-list').append(eventTemplate);
}
