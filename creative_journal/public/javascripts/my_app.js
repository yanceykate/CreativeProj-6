

angular.module('myApp', []).
  controller('myController', ['$scope', '$http', '$filter',
                              function($scope, $http, $filter) {
  $scope.entries = [];
  $scope.user_entries = []; 

    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
        console.log(data)
      $scope.error = "";
    });
   // error(function(data, status, headers, config) {
     // $scope.user = {};
     // $scope.error = data;
   // });

 $scope.addJournal = function() {
      var newentry  = {username: $scope.user.username, title:$scope.title, content:$scope.content};
     console.log(newentry) 
      $scope.title='';
      $scope.content='';
      $http.post('/entries', newentry).success(function(data){
        $scope.entries.push(data);
      $scope.getAll();
      });
    };
 
  
  $scope.getAll = function() {
      return $http.get('/entries').success(function(data){
        angular.copy(data, $scope.entries);
        $scope.user_entries = $filter('filter')($scope.entries, {username: $scope.user.username});
      });
    };
    $scope.getAll();

    $scope.delete = function(entry) {
        console.log(entry._id)
        $http.delete('/entries/' + entry._id )
          .success(function(data){
          console.log("delete worked");
        });
      $scope.getAll();
    };
    
}]);
