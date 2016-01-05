app.controller("MessagesController", ['$scope', 'getComments', 'saveComment', function($scope, getComments, saveComment){
    
    $scope.name = "";
    $scope.content = "";

    getComments.success(function(comments){
        
        for (var i = 0; i < comments.length; i++) {
            comments[i].date = moment(comments[i].date).toDate();
        }

        comments = _.sortByOrder(comments, 'date', 'desc');
        $scope.comments = comments;

    });

    $scope.addComment = function() {

        if (!_.isEmpty($scope.name) && !_.isEmpty($scope.content)) {

            var numberOfComment = $scope.comments.length + 1;

            var newComment = {
                name: $scope.name,
                content: $scope.content,
                date: moment().toDate().getTime()
            };

            var response = saveComment(newComment).then(function(comment){

                $scope.comments.splice(0, 0, comment);
                $scope.name = "";
                $scope.content = "";

            });
        
        }

    };

}]);