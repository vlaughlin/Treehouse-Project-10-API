

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
            var EmployeeHTML = '';
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
                 
               EmployeeHTML += '<button class="detailsButton">More Details </button>' 
                
             '</div>' 

               //BUILD THE MODAL
               EmployeeHTML += '<div id="employeeModal" class="modal">'
                EmployeeHTML += '<div class="modal-content">'
               EmployeeHTML += '<span class="close">&times;</span>' +
                               '<p>'     
                         
                EmployeeHTML += '<img class="profile-pic" src="' + employee.picture.large + '">'    
                     EmployeeHTML += '<span class="employee-name-modal">' + employee.name.first + ' ' + employee.name.last + '</span>'
                 //BUILD HTML TO DISPLAY EMAILS IN PAGE//
                EmployeeHTML += '<span class="employee-email-modal">' + employee.email + '</span>'
                //BUILD HTML TO DISPLAY LOCATIONS IN PAGE//
                EmployeeHTML += '<span class="employee-location-modal">' + 
                employee.location.city + '</span>'   
              

                               
                               
                               '</p>'
                   
                '</div>'
                   '</div>'






               });


            $('#employee_directory').html(EmployeeHTML);


             // Get the modal

        $(".detailsButton").click(e => $(e.target).next().css("display", "block"));   // ALL buttons
  $(".close").click(e => $(e.target).parent().parent().css("display", "none")); // ALL close spans  

                   
                    
        }); //GET JSON DATA END
    



}); //LOAD DOM END


