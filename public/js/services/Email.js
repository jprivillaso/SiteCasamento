app.factory("sendEmail", ['$http', '$q', function($http, $q) {

    return function(emailSettings){
        
        var deferred = $q.defer();

        $http.post("/unsecureApi/sendEmail", emailSettings)
        .success(function(data){
            deferred.resolve(data);
        })
        .error(function(err){
            deferred.resolve(err);
        });

        return deferred.promise;

    };

}]);