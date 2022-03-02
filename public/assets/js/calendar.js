

    $(function() {
        $( "#datepicker-1" ).datepicker({
            appendText:"(yy-mm-dd)",
            dateFormat:"yy-mm-dd",
            minDate: 1,
            maxDate: "+60D",
            showAnim: "slide",
            beforeShowDay : function (date) {
                var dayOfWeek = date.getDay ();
                // 0 : Sunday, 1 : Monday, ...
                if (dayOfWeek == 0 || dayOfWeek == 6) return [false];
                else return [true];
             }
        });
        $( "#datepicker-1" ).datepicker("setDate", "+1");
     });

     $(function() {
        $('#timepicker-1').timepicker({
            timeFormat: 'h:mm p',
            interval: 60,
            minTime: '10',
            maxTime: '5:00pm',
            defaultTime: '10',
            startTime: '10:00',
            dynamic: true,
            dropdown: true,
            scrollbar: true
            });
     });