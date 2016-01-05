app.controller("MainController", ['$scope', 'ngAudio', 'incrementGuestNumber', 'getGuestNumber', function($scope, ngAudio, incrementGuestNumber, getGuestNumber){

    var weddingDate = moment(new Date("07/02/2016"));
    var difference  = Math.ceil(weddingDate.diff(moment(), "days", true));

    $scope.weedingDate   = weddingDate.format("DD/MM/YY");
    $scope.remainingDate = "Faltam " + difference + " Días";

    $scope.sound = ngAudio.load("../../songs/sugar.mp3");
    $scope.sound.play();

    incrementGuestNumber.success(function(guest){
        getGuestNumber.success(function(guest){
            $scope.guest = "Visitante nº " + guest[0].count;
        });
    });

}]);