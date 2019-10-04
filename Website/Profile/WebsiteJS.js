pos = 0;
function back()
{
  var theImgTag = document.getElementById("myImgId");
  if (pos == 0) {
    theImgTag.src = "Pictures/E.png";
    pos = 4;
  }
  else if (pos == 1) {
    theImgTag.src = "Pictures/C.png";
    pos = 0;
  }
  else if (pos == 2) {
    theImgTag.src = "Pictures/H.png";
    pos = 1;
  }
  else if (pos == 3) {
    theImgTag.src = "Pictures/A.png";
    pos = 2;
  }
  else if (pos == 4) {
    theImgTag.src = "Pictures/S.png";
    pos = 3;
    }
}

function forward()
{
  var theImgTag = document.getElementById("myImgId");
  if (pos == 0) {
    theImgTag.src = "Pictures/H.png";
    pos = 1;
  }
  else if (pos == 1) {
    theImgTag.src = "Pictures/A.png";
    pos = 2;
  }
  else if (pos == 2) {
    theImgTag.src = "Pictures/S.png";
    pos = 3;
  }
  else if (pos == 3) {
    theImgTag.src = "Pictures/E.png";
    pos = 4;
  }
  else if (pos == 4) {
    theImgTag.src = "Pictures/C.png";
    pos = 0;
  }
}
