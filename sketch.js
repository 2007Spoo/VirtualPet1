//Create variables here
var dog, happyDog, database;
var foodS, foodStock;
var dogImg, dogImg1;
function preload()
{
  //load images here
  dogImg= loadImage( "images/dogImg.png")
  dogImg1= loadImage( "images/dogImg1.png");

  
}

function setup() {
  
  database = firebase.database();
  //console.log(database);
	createCanvas(500, 500);
  dog.addImage(dogImg);
  
  happyDog.addImage(dogImg1);

  
 // reference to the location of the database 
 var petposition = database.ref( "food");

 // to read the value from the database 
 petposition.on("value",readavaibility,showError)
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW))
  {
    writeStock(food6);
    dog.addImage(happyDog)
  }
  drawSprites();
}

text("Note: Press upArrow to feed pinky with milk", 100, 20);
textSize(6);
fill("white");
stroke("red");


function writeStock(x)
{
  if(x<=0)
  {
    x=0;
  }
  else
  {
    x= x-1;
  }
  database.ref('').update({
      
})
}

function readavaibility(data)
{
    position = data.val();
}

function showError()
{
    console.log ("Error in writing to the database ");
}
