$( "#datepicker" ).datepicker({
    beforeShowDay: $.datepicker.noWeekends
  });

  $(function() {
    $("#datepicker").datepicker();
    $("#datepicker").on("change",function(){
        var selected = $(this).val();
        alert(selected);
    });
    
});





$('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '10',
    maxTime: '5:00pm',
    defaultTime: '10',
    startTime: '09:00',
    dynamic: true,
    dropdown: true,
    scrollbar: true
});

$( ".timepicker" ).click(function( event ) {
    alert( "clicked: " + event.target.nodeName );
  });