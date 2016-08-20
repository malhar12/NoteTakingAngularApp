angular.module('NoteWrangler')
	.factory('Note', function NoteFactory($resource){
		return $resource('/notes/:id', {id: '@id'}, {
			update:{
				method: 'PUT'
			}
		});
	});