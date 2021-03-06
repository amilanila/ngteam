app.controller('PlayerController', PlayerController);

function PlayerController(players){	
	this.players = players;
}

PlayerController.prototype.showHidePlayer = function(){
	if(!this.isPlayerVisible){
		this.isPlayerVisible = true;
	} else {
		this.isPlayerVisible = false;
	}
}

PlayerController.prototype.enableAddPlayer = function(){
	if(!this.isEnableAddPlayer){
		this.isEnableAddPlayer = true;
		$('.player-add').val('-');
	} else {
		this.isEnableAddPlayer = false;
		$('.player-add').val('+');
	}
}

PlayerController.prototype.savePlayer = function(player){
	this.players.add(player);		
}

PlayerController.prototype.removePlayer = function(player){
	this.players.remove(player);
}


