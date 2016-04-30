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


/*
	$scope.deleteFoo = function(i) {

		var urlId = $scope.output[i]._id;

		$scope.output[i].show = false;

		$http({

			method: "delete",
			url: 'api/person/' + urlId
		}).then(function successCallback(response) {
		}, function errorCallback(response) {

		});
	}
*/



	$scope.remove = function(id) {
			//console.log(id);
		//var Id = $scope.output[i]._id;
		
		//$scope.output[i].show = false;
		
		$http.delete('/api/news/' + id)
			.success(function(response) {
				
		});
    	refresh();
	}

/*
	$scope.edit = function(id) {
		console.log(id);
		$http.get('/news/' + id).success(function(response) {
			$scope.news = response;
		});
	}

*/






/*

	$scope.updateItem = function(i) {

		$scope.output[i].showTextField = false;

		var obj = $scope.output[i];

		var urlId = '/api/news/' + $scope.output[i]._id;

		$http.put(urlId, obj);
		
	}
*/		

});

