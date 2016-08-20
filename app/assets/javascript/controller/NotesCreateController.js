angular.module('NoteWrangler')
	.controller('NotesCreateController', function(Note, $scope, $location){
		$scope.note = new Note();
		$scope.submitNote = function(note){
			note.$save().then(function(){
				$location.path('/notes');
				console.log("Resource Saved.");
			}).catch(function(){
				console.log("Wasn't able to submit.");
				//handle code here
			});
		}
	});