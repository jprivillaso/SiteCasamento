app.controller("CeremonyController", ['$scope', function($scope){

    var myLatLng = {lat: -19.928605, lng: -43.9388953};

    $scope.map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: $scope.map,
        title: "Igreja de Lourdes",
        icon: "http://isna.voucherry.com/fbrewards/img/heart-icon.png"
    });

}]);