function CalculatorController($scope, $timeout) {
	$scope.a = 1;
	$scope.b = 0;
	$scope.result = function() {
		return parseInt($scope.a) + parseInt($scope.b);
	};
}