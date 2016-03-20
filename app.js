var app = angular.module('neverendingqsPricePerUnitApp', []);

app.controller('PricePerUnitController', ['$scope', function($scope) {
  $scope.left = {
    cost: 2.99,
    unit: 10
  }

  $scope.left.change = function(cost, unit) {
    $scope.left.costperunit = (cost / unit).toFixed(2);
  }

  $scope.right = {
    cost: 5.99,
    unit: 50
  }

  $scope.right.change = function(cost, unit) {
    $scope.right.costperunit = (cost / unit).toFixed(2);
  }

  $scope.left.change($scope.left.cost, $scope.left.unit);
  $scope.right.change($scope.right.cost, $scope.right.unit);
}]);
