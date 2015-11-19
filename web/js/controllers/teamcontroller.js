app.controller('TeamController', TeamController);

function TeamController($scope, $localStorage){
	this.ngLocalStorage = $localStorage;
}

TeamController.prototype.showHideTeam = function(){
	if(!this.isTeamVisible){
		this.isTeamVisible = true;
	} else {
		this.isTeamVisible = false;
	}	
};

TeamController.prototype.addToTeam = function(player){
	if(this.ngLocalStorage.squad === undefined){
		this.ngLocalStorage.squad = [];
	}
	this.ngLocalStorage.squad.push(player);
}
	
