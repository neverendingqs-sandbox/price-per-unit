var app = angular.module('neverendingqsPricePerUnitApp', []);

app.controller('PricePerUnitController', ['$scope', function($scope) {
  $scope.input = {
    cost: 2.99,
    unit: 100
  }

  $scope.input.change = function(cost, unit) {
    $scope.input.costperunit = (cost / unit).toFixed(2);
  }

  $scope.input.change($scope.input.cost, $scope.input.unit);
}]);
