// Global variable declaration
var box;

function setup() {
	createCanvas(600, 600);
    
    var a=5;  //local variable

    // creating the box sprite
    box = createSprite(100,150,50,50);
    box.shapeColor= "#f005ec";
}
function draw() {
    // changing the background
	background(180);

    // adding color for text
    fill("black");
    // increasing text size
    textSize(25);

    // Conditional Programming
    if(3<2){
        text("I am in IF Block",200,250);
    }
    else{
        text("I am in ELSE Block",200,250);
    }

    var studName="AMAN";  //local variable


    // function Call
    displayLine();
    displayName(studName);
    // displaying the Sprites
    drawSprites();
}


// function definition
function displayLine(){
    // for(initialization expression; conditional expression;incremental expression){}
    for(var i = 0; i <= 10; i=i+1){
        text(i, 500,i*50);
    }
}

// function definition
function displayName(name){
    text(name,300,400);
}