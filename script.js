function flip(){
  let i = 1;
  if (i = 1){
    i = i * (-1);
    document.getElementById('settings').style.display = 'block';
    alert(document.getElementById('settings').style.display);
  } else {
    i = i * (-1);
    document.getElementById('settings').style.display = 'none';
    alert(document.getElementById('settings').style.display);
  }
}
               
function theme(){
  for (i = 0; i < (document.getElementsByClassName('theme').length); i++){
    document.getElementsByClassName('theme')[i].style.background = document.getElementById('background').value;
    document.getElementsByClassName('theme')[i].style.color = document.getElementById('color').value;
  }
}

function save(){
  localStorage.setItem('background', document.getElemtentById('background').value)
  localStorage.setItem('background', document.getElemtentById('color').value)
}
