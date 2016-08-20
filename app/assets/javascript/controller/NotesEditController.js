angular.module('NoteWrangler')
	.controller('NotesEditController', function(Note, $scope, $routeParams, $location){
		$scope.note = Note.get({id: $routeParams.id});
		console.log($scope.note);
		$scope.isSubmitted = false;
		$scope.submitNote = function(note){
			$scope.isSubmitted = true;
			note.$update().finally(function(){
				$scope.isSubmitted = false;
				$location.path('/notes/' + note.id);
			});
			
		};
	});