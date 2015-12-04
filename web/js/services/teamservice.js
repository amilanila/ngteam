app.factory('team', function($localStorage){
	var team = {};

	if(team.list === undefined && $localStorage.team === undefined){
		team.list = [];	
		$localStorage.team = [];
	} else {
		team.list = $localStorage.team;
	}

	team.add = function(name){
		team.list.push(name);
		if($localStorage.team === undefined){
			$localStorage.team = [];
		}
		$localStorage.team = team.list;
	};

	return team;
});