

angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
  $scope.entries = [];


    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    });
   // error(function(data, status, headers, config) {
     // $scope.user = {};
     // $scope.error = data;
   // });

 $scope.addJournal = function() {
      var newentry  = {title:$scope.title, content:$scope.content};
     console.log("addJournal") 
      $scope.title='';
      $scope.content='';
      $http.post('/entries', newentry).success(function(data){
        $scope.entries.push(data);
      });
    };
 
  
  $scope.getAll = function() {
      return $http.get('/entries').success(function(data){
        angular.copy(data, $scope.entries);
      });
    };
    $scope.getAll();
}]);
