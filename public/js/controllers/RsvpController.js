app.controller("RsvpController", ['$scope', 'sendEmail', '$timeout',  function($scope, sendEmail, $timeout){

    $scope.email = "";
    $scope.name  = "";
    $scope.emailSent = false;

    $scope.confirmRsvp = function() {

        if (!_.isEmpty($scope.name) && !_.isEmpty($scope.email)) {

            var emailSettings = {
                name: $scope.name,
                email: $scope.email
            };

            sendEmail(emailSettings).then(function(data){
                $scope.name = "";
                $scope.email = "";
                $scope.emailSent = true;

                $timeout(function() {
                    $scope.emailSent = false;
                }, 3000);

            });

        }

    };

}]);