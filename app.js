var app = angular.module('neverendingqsPricePerUnitApp', []);

app.controller('PricePerUnitController', ['$scope', function($scope) {
  $scope.input = {}
  $scope.input.cost = 2.99;
  $scope.input.unit = 100;
  $scope.input.costperunit = $scope.input.cost / $scope.input.unit

  $scope.input.change = function(cost, unit) {
    $scope.input.costperunit = cost / unit;
  }
}]);
