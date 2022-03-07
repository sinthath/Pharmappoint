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
 

 function postApptToDB(date, type, time) {
    console.log(`STEP 1: POST: /appointment/create `);
    $.post('/appointment/create', {
        Appointments_date: date,
        Appointments_type: type,
        Appointments_time: time
    })
};
    $("#datepicker-1").on("change",function(){
        selectedDate = this["value"];
        console.log(selectedDate); 
        
    });
   console.log(selectedDate);
submit.addEventListener("click", function addAppt (event) {
    event.preventDefault();
     console.log("clicked")
    apptToPost = {
      date: selectedDate,
      type: typeAppt,
      time: timeAppt
      
}
console.log(apptToPost)
    if (apptToPost.date === undefined || apptToPost.type === undefined || apptToPost.time === undefined) {
        alert ("please fill out the form")
        
      }
 
  postApptToDB( apptToPost.date, apptToPost.type, apptToPost.time )

  document.getElementById("pickedDate").innerHTML= selectedDate;
  document.getElementById("pickedTime").innerHTML= $('#selecttime').find(":selected").text();
  document.getElementById("pickedType").innerHTML= typeAppt;
});

$("#hide-btn").on('submit',function deleteAppointment(index){
  
    fetch("/appointment/delete/"+ index, {
        method: 'DELETE',
      
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function(res){
          return res.json();
      })
      .then(function (data) {
        console.log(
          `STEP 4: Getting Data from the STEP 3 response to the Client promise`
        );
        window.location.href = "/appointmentPage";
      });

});

 
        //  $.delete("/appointmentPage/delete", {
       
        //   appointments_id: id
        // });
        
    //   }

//     function deleteAppointment(event) {
//     event.preventDefault();
//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//       ];
//       const response = await fetch(`/appointmentPage/${id}`, {
//         method: 'DELETE',
//         body: JSON.stringify({
//           appointments_id: id
//         }),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
// }
// document.querySelector('.delete-post-btn').addEventListener('click', deleteAppointment);