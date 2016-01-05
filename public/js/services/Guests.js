app.factory("getGuestNumber", ['$http', function($http){
    return $http.get("/getGuestNumber")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });
}]);

app.factory("incrementGuestNumber", ['$http', function($http){
    return $http.post("/increaseGuest")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });
}]);