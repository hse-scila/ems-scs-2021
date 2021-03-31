$('.ui.dropdown').dropdown();

$('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
    .sidebar('attach events', '.sidebar a.item');;

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

var TIMESLOTS = {
    'DST (UTC-5)': [
        '2:30-4:00',
        '4:15-5:45',
        '6:00-7:30',
        '8:00-9:30',
        '10:00-11:30'
    ],
    'WEST (UTC+1)': [
        '8:30-10:00',
        '10:15-11:45',
        '12:00-13:30',
        '14:00-15:30',
        '16:00-17:30'
    ],
    'CEST (UTC+2)': [
        '9:30:11:00',
        '11:15-12:45',
        '13:00-14:30',
        '15:00-16:30',
        '17:00-18:30'
    ],
    'MSK (UTC+3)': [
        '10:30-12:00',
        '12:15-13:45',
        '14:00-15:30',
        '16:00-17:30',
        '18:00-19:30'
    ],
    'CST (UTC+8)': [
        '15:30-17:00',
        '17:15-18:45',
        '19:00-20:30',
        '21:00-22:30',
        '23:00-00:30',
    ]
};

var TIMEZONES_VALUES = Object.keys(TIMESLOTS).map(x => {return {"name" : x, "value": x}});
TIMEZONES_VALUES[3].selected = true;

$("#timezones,#timezones-mobile")
    .dropdown({
        values: TIMEZONES_VALUES,
        onChange: function(_, text, _) {
            var slots = TIMESLOTS[text];
            $("#schedule-section table").each(function(_, table) {
                $(table).find('tr td:first-child').each(function(j, td) {
                    $(td).text(slots[j]);
                });
            });
        }
    })
    .dropdown('set selected', TIMEZONES_VALUES[3].name);