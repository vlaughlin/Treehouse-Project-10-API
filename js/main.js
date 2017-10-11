//LOAD DOM//

$(document).ready(function () {



    //GET JSON DATA USING AN AJAX HTTP GET REQUEST//

    $.getJSON(
        'https://randomuser.me/api/', //API URL//

        {
            results: 12, // AMOUNT OF EMPLOYEES

        },


        function displayEmployee(data) {
            var photoHTML = '<ul>';
            $.each(data.results, function (i, photo) {
                photoHTML += '<li class="employee-list">';
                photoHTML += '<img class="image--avatar" src="' + photo.picture.medium + '">'
            });
            photoHTML += '</ul>';
            $('#employeelist').html(photoHTML);




        }); //GET JASON DATA END


}); //LOAD DOM END
