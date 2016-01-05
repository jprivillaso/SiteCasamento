app.factory("getComments", ['$http', function($http){
    return $http.get("/comments")
            .success(function(data){
                return data;
            })
            .error(function(err){
                return err;
            });
}]);

app.factory("saveComment", ['$http', '$q', function($http, $q){

    return function(newComment) {

        var deferred = $q.defer();

        $http.post("/comments", newComment)
        .success(function(data){
            deferred.resolve(data);
        })
        .error(function(err){
            deferred.resolve(err);
        });

        return deferred.promise;

    }
    
}]);