$(document).ready(function () {

$.ajax({
    url: 'http://api.randomuser.me/',
    dataType: 'jsonp',
    success: function (data) {
        console.log(data);
        
        $('<img />', {
            src: data.results[0].picture.large
        }).appendTo('#result')
    }
});

}); //END READY


    