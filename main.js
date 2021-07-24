Canvas= document.getElementById("myC")
ctx= Canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add()
{
    bgImgTag= new Image();
    bgImgTag.src= bgImg;
    bgImgTag.onload= bgImgLoad;

   roverImgTag= new Image();
    roverImgTag.src= roverImg;
  roverImgTag.onload= roverImgLoad;

}
function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed the Alphabet key";
	
}

function aplhabetkey()
{
img_image="Alpkey.png";
add();
}
function numberkey()
{
	img_image="numkey.png";
add();
}
function arrowkey()
{
	img_image="Arrkey.png";
add();
}
function specialkey()
{
	img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
