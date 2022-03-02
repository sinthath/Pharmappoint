
$.datetimepicker.setDateFormatter('moment')
$('#picker').datetimepicker({
    timepicker: true, 
    datepicker: true, 
    minDate: 1,
    // maxDate: 
    closeOnDateSelect:true,
    daysOfWeekDisabled: [0],
    format: 'YYYY-MM-DD h:mm a', 

    
    allowTimes: ['10:00', '11:00', '13:00', '14:00', '15:00']
})


$('#toggle').on('click', function(){
    $('#picker').datetimepicker('toggle')
})




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