
$.datetimepicker.setDateFormatter('moment')
$('#picker').datetimepicker({
    timepicker: true, 
    datepicker: true, 
    format: 'YYYY-MM-DD h:mm a', 
    daysOfWeekDisabled: [0, 6],
    allowTimes: ['10:00', '11:00', '13:00', '14:00', '15:00']
})

$('#toggle').on('click', function(){
    $('#picker').datetimepicker('toggle')
})

function noWeekends(date) {
    var noWeekend = $.datepicker.noWeekends(date);
    if (noWeekend[0]) {
        return nationalDays(date);
    } else {
        return noWeekend;
    }
}



// $( "#datepicker" ).datepicker({
//     beforeShowDay: $.datepicker.noWeekends
//   });

//   $(function() {
//     $("#datepicker").datepicker();
//     $("#datepicker").on("change",function(){
//         var selected = $(this).val();
//         alert(selected);
//     });
    
// });





// $('.timepicker').timepicker({
//     timeFormat: 'h:mm p',
//     interval: 30,
//     minTime: '10',
//     maxTime: '5:00pm',
//     defaultTime: '10',
//     startTime: '09:00',
//     dynamic: true,
//     dropdown: true,
//     scrollbar: true
// });

// $( ".timepicker" ).click(function( event ) {
//     alert( "clicked: " + event.target.nodeName );
//   });