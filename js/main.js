$(document).ready(function () {

$.ajax({
    url: 'https://randomuser.me/api?results=12& inc = name, email, picture, location, cell, login, dob & nat = us',
    dataType: 'jsonp',
    success: function (data) {
        console.log(data);
        
        $('<img />', {
            src: data.results[0].picture.large
        }).appendTo('#employeelist')
    }
});

}); //END READY


    