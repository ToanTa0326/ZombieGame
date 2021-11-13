function startGame(){
	var level = document.getElementById('level').value

	if (level === ''){
		alert('Choose a difficulty')
		 return false 
	}

	window.location.href = 'game.html?' + level

}