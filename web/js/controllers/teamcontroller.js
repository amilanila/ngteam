anguler.module('app')
	.controller('TeamCtrl', function(){
		this.showTeamMetadataSection = function(){
			$('.team-section').show();
		}
	});