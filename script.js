var numSquare = 6;
var colors = [];
var pickedColor; 
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}


function reset(){
	colors = generateRandomColors(numSquare);
	//pick new random color from an array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent= "New Colors";

	messageDisplay.textContent = "";
	//change colors of sqaure
	for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	if(colors[i]){
	squares[i].style.display = "block"; // make blocks visible
	squares[i].style.background = colors[i];
	} else{
		squares[i].style.display ="none";
	}
	}
	h1.style.background = "steelblue";
}

function setupModeButtons(){
	for(var i =0; i <modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquare = 3 : numSquare = 6;
			/*if(this.textContent === "Easy"){
				numSquare =3;
			}
			else{
				numSqua re = 6;
			}*/ 
			reset();
	});
}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent ="Play Again?";
			changeColors(clickedColor);
			h1.style.background = pickedColor;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}
resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < colors.length; i++){
	//change each color to match given color
	squares[i].style.background = color;
}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" +r+ ", "+g+ ", "+b+")";

}
/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquare =3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	if(colors[i]){
	squares[i].style.background = colors[i];
	} else{
		squares[i].style.display = "none";
	}
	}

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquare =6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];
	squares[i].style.display = "block";
	}

}); */

