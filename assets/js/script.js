var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.var = "Hello World";
    $scope.sentence = function(){
      window.alert($scope.var);
    };
});
