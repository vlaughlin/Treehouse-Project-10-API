$.ajax({
    url: 'https://randomuser.me/api?results=12& inc = name, email, picture, location, cell, login, dob & nat = us',
    dataType: 'json',
    success: function (data) {
        console.log(data);


    }

    document.getElementById('image').src = data.results[0].picture.large;
    document.getElementById('firstName').textContent = data.results[0].name.first;
    document.getElementById('lastName').textContent = data.results[0].name.last;


});
