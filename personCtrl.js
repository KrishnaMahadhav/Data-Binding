app.controller('personCtrl', function($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.age=0;
    $scope.agecal=function(){
    if ($scope.age == 0)
    return "";
    else if ($scope.age < 18)
    return "you are not eligible to join army";
    else
    return "you are eligible to join army ";
    };
    $scope.fullName = function() {
    return $scope.firstName + " " + $scope.lastName+", "+$scope.agecal();
    };
   });