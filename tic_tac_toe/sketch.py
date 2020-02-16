let board = [
	['O','X','O'],
	['O','X','O'],
	['O','X','O']

],

function setup(){
	createCanvas(400, 400);	
}

fucntion draw(){
	background(220);
	let w = width / 3;
	let h = height / 3;

	for( let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			let x = w * i;
			let y = h * j;
			let spot = board[i][j];
			text(spot, x, y);
		}
	}
}