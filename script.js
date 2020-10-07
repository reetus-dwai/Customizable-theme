function ready() {
    if (localStorage.length > 0){
      for (i = 0; i < (document.getElementsByClassName('theme').length); i++){
        document.getElementsByClassName('theme')[i].style.background = localStorage.getItem('background');
        document.getElementsByClassName('theme')[i].style.color = localStorage.getItem('color');
    }
    } else {
      alert('You have 0 saved styles.');    
    }
  }
document.addEventListener("DOMContentLoaded", ready);

function flip(){
  if (document.getElementById('settings').style.display == 'none'){
    document.getElementById('settings').style.display = 'block';
  } else {
    document.getElementById('settings').style.display = 'none';
  }
}
            
function theme(){
  for (i = 0; i < (document.getElementsByClassName('theme').length); i++){
    document.getElementsByClassName('theme')[i].style.background = document.getElementById('background').value;
    document.getElementsByClassName('theme')[i].style.color = document.getElementById('color').value;
  }
}

function save(){
  for (i = 0; i < (document.getElementsByClassName('theme').length); i++){
    document.getElementsByClassName('theme')[i].style.background = document.getElementById('background').value;
    document.getElementsByClassName('theme')[i].style.color = document.getElementById('color').value;
  }
  localStorage.clear();
  localStorage.setItem('background', document.getElemtentById('background').value);
  localStorage.setItem('color', document.getElemtentById('color').value);
}
