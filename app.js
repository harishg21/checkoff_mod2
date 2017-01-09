(function(){

"use strict";

angular.module("lunchCheckerApp",[])

.controller("lunchCheckerAppController", function($scope){

	$scope.itemList = "";
	$scope.checkerFunc = function(){

		$scope.arrList = $scope.itemList.split(",");
		$scope.count = $scope.arrList.length;

		if($scope.count<4){
			$scope.showStatus = "Enjoy!";
		}
		else{
			$scope.showStatus = "Too much!";
		}

	}


})
	
})()