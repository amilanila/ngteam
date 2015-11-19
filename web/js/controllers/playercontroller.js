app.controller('PlayerController', PlayerController);

function PlayerController($scope, $localStorage){	
	this.ngLocalStorage = $localStorage;	
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

PlayerController.prototype.savePlayer = function(){
	if(this.ngLocalStorage.players === undefined){
		this.ngLocalStorage.players = [];
	}
	this.ngLocalStorage.players.push('amila' + Date());
}

PlayerController.prototype.removePlayerFromPool = function(){
	this.ngLocalStorage.players.push('amila' + Date());	
}
