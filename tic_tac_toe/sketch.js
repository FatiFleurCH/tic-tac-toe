//Board
let board = [
	['','',''],
	['','',''],
	['','','']

];
let available = [];

//Players
let players = ['O', 'X'];
let numPlayers = players.length;
let currentPlayer;

function setup(){
	createCanvas(400, 400);
    currentPlayer = floor(random(numPlayers));
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        available.push([i,j]);
      }
    }
}
function equals3(a,b,c){
  return (a == b && b == c && a!= '');
}

function nextTurn(){
//Need to change index in order that it reads which spot I clicked
  let index = floor(random(available.length));
  let spot = available.splice(index, 1)[0];
  let i = spot[0];
  let j = spot[1];
  board[i][j] = players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % numPlayers;
}

function checkWinner(){
  let winner = null;
  
  //Vertical
  for (let i = 0; i < 3; i++){
    if (equals3(board[i][0],board[i][1],board[i][2])){
     winner = board[i][0];
    }
  }
  //horizontal
  for (let i = 0; i < 3; i++){
    if (equals3(board[0][i],board[1][i],board[2][i])){
     winner = board[0][i];
    }
  }
  //Diagonal
  
  if (equals3(board[2][0],board[1][1],board[0][2])){
    winner = board[2][0];
  }
  //From this side it doesn't work
  if (equals3(board[0][0],board[1][1],board[2][2])){
    winner = baord[1][1];
  }
  
  if(winner == null && available.length == 0){
    return 'tie';
  }else {
    return winner;
  }  
}

function mousePressed(){
  nextTurn();
  let result = checkWinner();
  
  if (result != null){
    noLoop();
    createP(result).style('color', '#FFF');
    console.log("Game over, the winner is:", result);
  }
  
}
function draw(){
	background(255);
	let w = width / 3;
	let h = height / 3;
  
    line(w,0, w, height);
    line(2 * w, 0, 2 * w, height);
    line(0,h, width, h);
    line(0,2 * h, width, 2*h); 
    
  
	for( let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			let x = w * i + w/2;
			let y = h * j + h/2;
			let spot = board[i][j];
            textSize(32);
            strokeWeight(4);
            if (spot == players[0]){
              noFill();
              ellipseMode(CORNER);
              ellipse(x - w/4,y - w/4,w/2);
            }
            else if (spot == players[1]){
              let xr = w/4;
              line(x-xr, y-xr, x+xr, y+xr);
              line(x+xr, y-xr, x-xr, y+xr);
            }
			
		}
	}
}
