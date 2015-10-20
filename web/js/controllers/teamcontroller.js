app.controller('TeamController', TeamController);

function TeamController(){
}

TeamController.prototype.showHideTeam = function(){
	if(!this.isTeamVisible){
		this.isTeamVisible = true;
	} else {
		this.isTeamVisible = false;
	}	
};
	
