function zoomIn()
{
   var theImgTag = document.getElementById("myImgId");
   theImgTag.width = 1000;
   theImgTag.height = 2000;
}
function CheckValue()
{
  var theFirst = document.getElementById("First").value;
  var theSecond = document.getElementById("Second").value;

    if (theFirst.length < 8)
    {
      alert("Passwords must be 8 characters or more")
    }

    if(theFirst != theSecond)
    {
      alert("Passwords do not match");
    }

}
