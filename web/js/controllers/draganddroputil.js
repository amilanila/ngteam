function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	// drop handling
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data)
    ev.target.appendChild(draggedElement);

    // call the addToTeam() function in TeamController
	var teamScope = angular.element($('#teamPlayers')).scope();
	teamScope.team.addToTeam($(draggedElement).text());

	// call the removePlayer() function in PlayerController	
	// var playerScope = angular.element($('div[name^=playerDrag]')).scope();
    var playerScope = angular.element($('#playerListDiv')).scope();
	playerScope.player.removePlayer($(draggedElement).text());
}