app.controller('SeguroController', function($scope, $route, $routeParams, $location, SeguroService) {
	    $scope.spice = 'very';



    $scope.chiliSpicy = function() {
        $scope.spice = 'chili';
        SeguroService.getSeguros(function(response){
        	console.log(response.data);
        });
        console.log(SeguroService.prueba());
    };

    $scope.jalapenoSpicy = function() {
        $scope.spice = 'jalapeño';
    };
 })
