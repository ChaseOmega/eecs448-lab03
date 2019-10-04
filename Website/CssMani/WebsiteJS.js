function changeNow()
{
var para = document.getElementById("Paragraph");
var borderRed = document.getElementById("BorderRed");
var borderGreen = document.getElementById("BorderGreen");
var borderBlue = document.getElementById("BorderBlue");
var backgroundRed = document.getElementById("BackgroundRed");
var backgroundGreen = document.getElementById("BackgroundGreen");
var backgroundBlue = document.getElementById("BackgroundBlue");
para.style.borderColor = borderRed.value + borderGreen.value + borderBlue.value;
para.style.backgroundColor = backgroundRed.value + backgroundGreen.value + backgroundBlue.value;
}
