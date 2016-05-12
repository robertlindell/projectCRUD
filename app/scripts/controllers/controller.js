projectCRUD.controller("aggregateController", function($http, $scope){

	$scope.aggOutput = null;

		$http({

			method: "GET",
			url: "/api/aggregate"

		}).then(function successCallback(response) {
			$scope.aggOutput = response.data;
		}, function errorCallback(response) {
			console.log(response);
		});
});



projectCRUD.controller("myApp", function($http, $scope) {

$scope.showMe = false;

$scope.showForm = function(id) {

	console.log(id);
	$scope.showMe = true;

	var myid = id;

	$http({

			method: 'GET',
			url: '/api/news/' + myid
		
		}).then(function successCallback(response) {

			$scope.idOutput = response.data[0];
			console.log(response.data[0]);	
		}, function errorCallback(response) {

		});

}



var refresh = function() {
	$http.get('/api/news').success(function(response) {
		//console.log("Jag laddar om mig");
		$scope.output = response;
	});
}

refresh();



	$scope.output = null;

		$http({

			method: 'GET',
			url: '/api/news'
		
		}).then(function successCallback(response) {

			$scope.output = response.data;
				
		}, function errorCallback(response) {

		});

		$scope.getNewsById = function(i) {

			var id = i;
				
			$http({
				method: 'GET',
				url: '/api/news/' + id
			}).then(function successCallback(response) {
				
				$scope.newsObj = response.data;
					
			}, function errorCallback(response) {

			});
		}	




	$scope.workOut = null;

		$http({

			method: 'GET',
			url: '/api/work'
		
		}).then(function successCallback(response) {

			$scope.workOut = response.data;
				
		}, function errorCallback(response) {

		});

		$scope.getWorkById = function(i) {

			var id = i;
				console.log(id);
			$http({
				method: 'GET',
				url: '/api/work/' + id
			}).then(function successCallback(response) {
				
				$scope.workObj = response.data;
					
			}, function errorCallback(response) {

			});
		}



		$scope.remove = function(id) {
				
			$http.delete('/api/news/' + id)
				.success(function(response) {
					
			});
	    	refresh();
		}	

});

