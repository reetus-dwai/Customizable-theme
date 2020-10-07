function flip(){
  if (document.getElementById('settings').style.display = 'none'){
    document.getElementById('settings').style.display = 'block';
    alert(document.getElementByI('settings').style.display);
  } else {
    document.getElementById('settings').style.display = 'none';
    alert(document.getElementByI('settings').style.display);
  }
}
               
function theme(){
  for (i = 0; i < (document.getElementsByClassName('theme').length); i++){
    document.getElementsByClassName('theme')[i].style.background = document.getElementById('background').value;
    document.getElementsByClassName('theme')[i].style.color = document.getElementById('color').value;
  }
}
