app.controller('TeamController', TeamController);

function TeamController(team){
	this.team = team;
}

TeamController.prototype.showHideTeam = function(){
	if(!this.isTeamVisible){
		this.isTeamVisible = true;
	} else {
		this.isTeamVisible = false;
	}	
};

TeamController.prototype.addToTeam = function(player){
	this.team.add(player);
}
	
