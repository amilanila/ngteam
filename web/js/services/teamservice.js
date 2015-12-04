app.factory('team', function($localStorage){
	var team = {};

	if(team.list === undefined && $localStorage.team === undefined){
		team.list = [];	
		$localStorage.team = [];
	} else {
		team.list = $localStorage.team;
	}

	team.add = function(player){
		team.list.push(player);
		if($localStorage.team === undefined){
			$localStorage.team = [];
		}
		$localStorage.team = team.list;
	};

	return team;
});