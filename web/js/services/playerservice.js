app.factory('players', function($localStorage){
	var players = {};

	if(players.list === undefined && $localStorage.players === undefined){
		players.list = [];	
		$localStorage.players = [];
	} else {
		players.list = $localStorage.players;
	}
	

	players.add = function(player){
		players.list.push(player);
		if($localStorage.players === undefined){
			$localStorage.players = [];
		}
		$localStorage.players = players.list;
	};

	players.remove = function(id){
		player.list.splice(1, 1);
	}
	return players;
});