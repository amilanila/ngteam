app.controller('HomeController', HomeController);

function HomeController() {
	this.title = "Team Manager";
}

HomeController.prototype.showHideTeam = function(){
	if(!this.isTeamVisible){
		this.isTeamVisible = true;
	} else {
		this.isTeamVisible = false;
	}	
};