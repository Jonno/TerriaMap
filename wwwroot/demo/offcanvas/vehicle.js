(function () {
  'use strict'

  var globals = {};
  const nvedisUrl = 'https://ubuxgyols2.execute-api.ap-southeast-2.amazonaws.com/prod/';
  const nvedisJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZDI0NmEzMC1lMWQyLTRhZTUtODQ5My1jODBkYTNkMmRhODciLCJuYW1lIjoiTm9ydGhlcm4gTGFuZCBDb3VuY2lsIiwiaWF0IjoxNTE2MjM5MDIyfQ.IYHWGQ9VIJwpDVGN83dGOEQIypICS2eTEBdOKY-VByA";

  globals.ajaxErrorHandler = function(){};

  globals.makeGraphQLRequest = function(url, params, successCallback) {
    //  var self = this;
      $.ajax({
          url: url,
          method: 'post',
          data: params,
          dataType: 'json',
          headers: { 'Authorization': 'JWT ' + nvedisJwt},
          success: function(response) {
              if (response.data) {
                  successCallback(response.data);
              } else {
                  //self.showToastMessage('Error', 'Server side error', 'error');
              }
          },
          error: globals.ajaxErrorHandler
      });
  };



  $(document).ready(function(){
      $("#check_rego").click(function(){
        $("#rego-num").val(function(i,val) {
        return val.replace(/\s+/g, '').toUpperCase();
          });
          //$("#myForm").submit(); // Submit the form
          console.log($("#rego-num").val());
          console.log($("#rego-state").val());


          var settings = {
            "url": "https://ubuxgyols2.execute-api.ap-southeast-2.amazonaws.com/prod/",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZDI0NmEzMC1lMWQyLTRhZTUtODQ5My1jODBkYTNkMmRhODciLCJuYW1lIjoiTm9ydGhlcm4gTGFuZCBDb3VuY2lsIiwiaWF0IjoxNTE2MjM5MDIyfQ.IYHWGQ9VIJwpDVGN83dGOEQIypICS2eTEBdOKY-VByA",
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              query: "{\n    nevdisPlateSearch_v2(plate:\"" + $("#rego-num").val() + "\", state:" + $("#rego-state").val() + ") {\n      vin\n      plate {\n        number\n        state\n      }\n      make\n      model\n      engine_number\n      vehicle_type\n      body_type\n      colour\n    }\n  }",
              variables: {}
            })
          };

          console.log(settings);

          $.ajax(settings).done(function (response) {
            console.log(response);
            $('#colRegNum').val(response.data.nevdisPlateSearch_v2[0].plate.number);
            $('#colRegState').val(response.data.nevdisPlateSearch_v2[0].plate.state);
            $('#colVehicleMake').val(response.data.nevdisPlateSearch_v2[0].make);
            $('#colVehicleModel').val(response.data.nevdisPlateSearch_v2[0].model);
            $('#colVehicleType').val(response.data.nevdisPlateSearch_v2[0].vehicle_type);
            $('#colVehicleBody').val(response.data.nevdisPlateSearch_v2[0].body_type);
            $('#colVehicleColour').val(response.data.nevdisPlateSearch_v2[0].colour);
            $('#colVehicleEngNumber').val(response.data.nevdisPlateSearch_v2[0].engine_number);
            $('#colVehicleVinNumber').val(response.data.nevdisPlateSearch_v2[0].vin);
            //             $('#myProfile input[name="name"]').val(user.name);
            //             $('#myProfile input[name="email"]').val(user.email);
            //             $('#myProfile input[name="dob"]').val(globals.formatDate(user.dob));
          });






      //
      //
      //     var query = 'query":"' + `{
      //             nevdisPlateSearch_v2(plate: "CD41WG", state:NT) {
      //               vin
      //               plate {
      //                 number
      //                 state
      //               }
      //               make
      //               model
      //               engine_number
      //               vehicle_type
      //               body_type
      //               colour
      //             }
      //           }` + '""';
      //
      //     console.log(query);
      //
      //     globals.makeGraphQLRequest(nvedisUrl, query, function successCallback(data) {
      //       //  var user = data.profile;
      //         if (data.error) {
      //             console.log(data);
      //         } else {
      //             // populate my profile
      //             console.log(data);
      //             $('#myProfile input[name="mobile"]').val(user.mobile);
      //             $('#myProfile input[name="name"]').val(user.name);
      //             $('#myProfile input[name="email"]').val(user.email);
      //             $('#myProfile input[name="dob"]').val(globals.formatDate(user.dob));
      //
      //             $('#myProfile input[name="gender"]').removeAttr('checked');
      //             $('#myProfile input[name="gender"][value="' + user.gender + '"]')
      //                     .attr('checked', 'checked').click();
      //             }
      //           });
      //
      //
      });
  });

}())



/*

<script type="text/javascript">
    var globals = {}; // application wide global variable

    globals.constants = {
    }

    globals.showToastMessage = function(heading, message, icon) {
        $.toast({
            heading: heading,
            text: message,
            showHideTransition: 'slide',
            icon: icon  // info, error, warning, success
        });
    };



        'query":"{
                nevdisPlateSearch_v2(plate: "CD41WG", state:NT) {
                  vin
                  plate {
                    number
                    state
                  }
                  make
                  model
                  engine_number
                  vehicle_type
                  body_type
                  colour
                }
              }
        }'
    }



    globals.makeGraphQLRequest = function(url, params, successCallback) {
        var self = this;
        $.ajax({
            url: url,
            method: 'post',
            data: params,
            dataType: 'json',
            success: function(response) {
                if (response.data) {
                    successCallback(response.data);
                } else {
                    self.showToastMessage('Error', 'Server side error', 'error');
                }
            },
            error: globals.ajaxErrorHandler
        });
    }


    $(document).ready(function() {

        $('.ui.checkbox').checkbox();
        var params = {}; // parameters

        $('#updateProfileButton').on('click', function() {
            params.name = $('#myProfile input[name="name"]').val();
            params.mobile = $('#myProfile input[name="mobile"]').val();
            params.dob = $('#myProfile input[name="dob"]').val();
            params.gender = $('#myProfile input[name="gender"]:checked').val();

        	$('#updateProfileButton').addClass('loading');

            globals.makeGraphQLRequest('graphql', {
                query: `mutation($params: JSON!) {
                    updateProfile(params: $params) {
                        id mobile name email dob gender error
                    }
                }`,
                variables: {
                    params: params
                }
            }, function successCallback(data) {
                var user = data.updateProfile;
                if (user.error) {
                    globals.showToastMessage('Error', user.error, 'error');
                } else {
                    globals.showToastMessage('Success', 'Profile Updated', 'success');
                }
                $('#updateProfileButton').removeClass('loading');
            });
        });


        globals.makeGraphQLRequest('graphql', {
            query: `query {
                    nevdisPlateSearch_v2(plate: "CD41WG", state:NT) {
                      vin
                      plate {
                        number
                        state
                      }
                      make
                      model
                      engine_number
                      vehicle_type
                      body_type
                      colour
                    }
                  }
            }`
        }, function successCallback(data) {
            var user = data.profile;
            if (user.error) {
                globals.showToastMessage('Error', user.error, 'error');
            } else {
                // populate my profile
                $('#myProfile input[name="mobile"]').val(user.mobile);
                $('#myProfile input[name="name"]').val(user.name);
                $('#myProfile input[name="email"]').val(user.email);
                $('#myProfile input[name="dob"]').val(globals.formatDate(user.dob));

                $('#myProfile input[name="gender"]').removeAttr('checked');
                $('#myProfile input[name="gender"][value="' + user.gender + '"]')
                        .attr('checked', 'checked').click();
                }
        });

    });

    </script>
*/
