

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
                            //BUILD HTML TO DISPLAY PICTURES IN PAGE//
                EmployeeHTML += '<img class="profile-pic" src="' + employee.picture.large + '">' + '<br>'   //BUILD HTML TO DISPLAY FULL NAME IN PAGE//
                     EmployeeHTML +=  '<span class="employee-name-modal"><b>Name:</b> ' + employee.name.first + ' ' + employee.name.last + '</span>' + '<br>'
                
                //BUILD HTML TO DISPLAY USERNAMES IN PAGE//
                EmployeeHTML += '<span class="employee-username-modal"><b>Username:</b> ' + employee.login.username + '<br>' + '</span>'
                 //BUILD HTML TO DISPLAY EMAILS IN PAGE//
                EmployeeHTML += '<span class="employee-email-modal"><b>E-mail:</b> ' + employee.email + '<br>' + '</span>'
                
                //BUILD HTML TO DISPLAY CELLPHONES IN PAGE//
                EmployeeHTML += '<span class="employee-cellphone-modal"><b>Phone:</b> +' +
                employee.cell + '<br>' + '</span>'   
                
                  //BUILD HTML TO DISPLAY DETAILED ADDRESS IN PAGE//
                EmployeeHTML += '<span class="employee-address-modal"><b>Address:</b> ' + 
                employee.location.street + '<br>'  + employee.location.city  +  ' ' + employee.location.state + ' ' + employee.location.postcode  + '<br>' +  '</span>'   
              
              
                //BUILD HTML TO DISPLAY DOB IN PAGE//
                EmployeeHTML += '<span class="employee-dob-modal"><b>Birthday:</b> ' + 
                employee.dob.date + '<br>' +  '</span>'   
              

               

                 EmployeeHTML += "</p></div></div></div></li>";


               });


            $('#employee_directory').html(EmployeeHTML);


             // Get the modal

        $(".detailsButton").click(e => $(e.target).next().css("display", "block"));   // ALL buttons
  $(".close").click(e => $(e.target).parent().parent().css("display", "none")); // ALL close spans  

                   
                    
        }); //GET JSON DATA END
    



}); //LOAD DOM END


