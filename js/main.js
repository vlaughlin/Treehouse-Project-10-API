//LOAD DOM//

$(document).ready(function () {



    //GET JSON DATA USING AN AJAX HTTP GET REQUEST//

    $.getJSON(
        'https://randomuser.me/api/', //API URL//

        {
            results: 12, // AMOUNT OF EMPLOYEES

        },


        function displayEmployees(data) {
            var EmployeeHTML = '<ul>';
            $.each(data.results, function (i, employee) {
                //BUILD HTML TO DISPLAY PHOTOS IN PAGE//
                EmployeeHTML += '<li class="employee-list">';
                EmployeeHTML += '<img class="profile-pic" src="' + employee.picture.medium + '">'
                  //BUILD HTML TO DISPLAY NAMES IN PAGE//
                EmployeeHTML += '<div class="employee-info">';
                EmployeeHTML += '<span class="employee-name">' + employee.name.first + ' ' + employee.name.last + '</span>'
            });
            EmployeeHTML += '</ul>';
            $('#employee-list').html(EmployeeHTML);




        }); //GET JASON DATA END


}); //LOAD DOM END
