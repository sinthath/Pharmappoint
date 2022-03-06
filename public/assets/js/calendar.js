// to get data from radio button 

var typeAppt
 $(".choice").on('click', function(){
     console.log(this["value"])
    typeAppt= this["value"];
});
console.log(typeAppt)
// to get data  from option time 
var timeAppt = $('#selecttime').find(":selected").text();
var selectedDate;
var apptToPost
var submit = document.getElementById("crtAppt");
function laodDatePicker(){
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

};
 $(document).ready(laodDatePicker);
 

 function postApptToDB(appt) {
    console.log(`STEP 1: POST: /appointment/create `);
    console.log(appt);
    fetch('/appointment/create', {
      method: 'post',
      body: JSON.stringify({ 
                  Appointments_time: appt.Appointments_time,
                  Appointments_date: appt.Appointments_date,
                  Apoointments_type: appt.Apoointments_type
                  
                }),
      headers: { 'Content-Type': 'application/json' },
    })
};
    $("#datepicker-1").on("change",function(){
        selectedDate = $(this).val();
        console.log(selectedDate); 
        
    });
   console.log(selectedDate);
submit.addEventListener("click", function addAppt (event) {
    event.preventDefault();
     console.log("clicked")
    var apptDate = selectedDate;
    var apptType = typeAppt;
    var apptTime = timeAppt;
    apptToPost = {
      time: apptTime,
      date: apptDate,
      type: apptType
      
}
console.log(apptToPost)
    if (apptToPost.date === undefined || apptToPost.type === undefined || apptToPost.time === undefined) {
        alert ("please fill out the form")
        
      }
 
  postApptToDB(apptToPost)
  document.getElementById("pickedDate").innerHTML= selectedDate;
});