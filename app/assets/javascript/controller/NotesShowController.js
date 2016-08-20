angular.module('NoteWrangler')
	.controller('NotesShowController', function(Note, $scope, $routeParams, $location){
		$scope.note = Note.get({id: $routeParams.id});
		console.log($scope.note);

		$scope.deleteNote = function(note){
			note.$remove().then(function(){
				$location.path('/notes');
			});
		};
	});