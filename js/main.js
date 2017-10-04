$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function (data) {
        console.log(data);
    }
});
