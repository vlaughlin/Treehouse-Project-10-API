
//LOAD DOM//

$(document).ready(function () {



    //GET JSON DATA USING AN AJAX HTTP GET REQUEST//

    $.getJSON(
        'https://randomuser.me/api/', //API URL//

        {
            results: 12, // AMOUNT OF EMPLOYEES
             nat: ['us'], // NATIONALITY 
        },

function displayEmployees(data) {
            var EmployeeHTML = '<ul>';
            $.each(data.results, function (i, employee) {
                //BUILD HTML TO DISPLAY PHOTOS IN PAGE//
                EmployeeHTML += '<li class="employee-list">';
                
                EmployeeHTML += '<img class="profile-pic" src="' + employee.picture.medium + '">' 
                
                  //BUILD HTML TO DISPLAY NAMES IN PAGE//
                EmployeeHTML += '<div class="employee-info">';
                EmployeeHTML += '<span class="employee-name">' + employee.name.first + ' ' + employee.name.last + '</span>' + '<br>'
                 //BUILD HTML TO DISPLAY EMAILS IN PAGE//
                EmployeeHTML +=   '<span class="employee-email">' + employee.email + '</span>' + '<br>'
                //BUILD HTML TO DISPLAY LOCATIONS IN PAGE//
                 EmployeeHTML +=  '<span class="employee-location">' +
                employee.location.city + '</span>' + '<br>'
                //BUILD HTML TO DISPLAY BUTTONS IN PAGE//
                 
               EmployeeHTML += '<button id="myBtn">More Details</button>' 
                
             '</div>' 

               });
            EmployeeHTML += '</ul>';
            $('#employee-directory').html(EmployeeHTML);


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    
             
                   
                    


        }); //GET JSON DATA END
    



}); //LOAD DOM END








