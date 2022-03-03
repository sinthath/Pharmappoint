// to get data from radio button 
const typeAppt = $("input[type='radio'][name='appt_type']:checked").val();
// to get data  from option time 
const timeAppt = $('#selecttime').find(":selected").text();
var selectedDate;

function selectDate(){
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
    $("#datepicker-1").on("change",function(){
        selectedDate = $(this).val();
        console.log(selectedDate); 
        document.getElementById("pickedDate").innerHTML = selectedDate;
        console.log(selectedDate)
    });
   console.log(selectedDate);
};
 $(document).ready(selectDate);
 

    // const response = fetch('/api/appointments', {
    //       method: 'POST',
    //       body: JSON.stringify({ selectedDate}),
    //       headers: { 'Content-Type': 'application/json' },
    // });
