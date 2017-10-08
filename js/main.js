$(document).ready(function () {

            //DEFINE VARIABLES
            var employeeCount = 12;


            $.ajax({
                    url: 'https://randomuser.me/api/?format=json&results=' + employeeCount + '&inc=picture,name,login,email,location,cell,dob,nat&nat=us,gb',
                    dataType: 'jsonp',
                    success: function (data) {
                        console.log(data);
                        for (let i = 0; i< employeeCount ; i++) 

                            $('<img />', {
                                src: data.results[0].picture.large
                            }).appendTo('#employeelist')
                        }
                    });

            }); //END READY
