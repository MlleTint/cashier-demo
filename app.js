var app = angular.module('app', [])

app.controller('myCtrl', ['$scope', function($scope){
	$scope.sortBy = ''

	$scope.setFilter = function(){
		 $scope.sortType     = 'title'; 
  		 $scope.sortReverse  = false;  
         
}
	$scope.transactions = [
	{
		title: 'Sloppy Joe',
		cost: 4.49,
		notes: 'Extra Sloppy'
	},
	{
		title: 'Hamburger',
		cost: 3.49,
		notes: 'No pickles!'
	},
	{
		title: 'Fries',
		cost: 2.49,
		notes: 'Ketchup'
	},
	{
		title: 'Cotton Candy',
		cost: 2.09,
		notes: 'Pink'
	},
	{
		title: 'Popcorn',
		cost: 5.49,
		notes: 'Extra butter'
	},
	{
		title: 'Corn Dog',
		cost: 1.49,
		notes: 'Vegan'
	},
	{
		title: 'Hotdog',
		cost: 2.49,
		notes: 'Relish'
	}

	];
}]);