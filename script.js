function ready() {
    if (localStorage.length > 0){
      for (i = 0; i < (document.getElementsByClassName('theme').length); i++){
        document.getElementsByClassName('theme')[i].style.background = localStorage.getItem('background');
        document.getElementsByClassName('theme')[i].style.color = localStorage.getItem('color');
      }
      document.getElementById('background').value = localStorage.getItem('background');
      document.getElementById('color').value = localStorage.getItem('color');
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
            
function apply(){
  for (i = 0; i < (document.getElementsByClassName('theme').length); i++){
    document.getElementsByClassName('theme')[i].style.background = document.getElementById('background').value;
    document.getElementsByClassName('theme')[i].style.color = document.getElementById('color').value;
  }
  document.getElementById('imgSettings').style.opacity = document.getElementById('opacity').value + '%';
  document.getElementById('imgSettings').style.right = document.getElementById('hp').value + 'vw';
  document.getElementById('imgSettings').style.top = document.getElementById('vp').value + 'vw';
  document.getElementById('imgSettings').style.width = document.getElementById('size').value + 'vw';
  document.getElementById('imgSettings').style.height = document.getElementById('size').value + 'vw';
  document.getElementById('settings').style.top = (document.getElementById('size').value + 1) + 'vw';
  document.getElementById('settings').style.right = document.getElementById('hp').value + 'vw';
}

function save(){
  for (i = 0; i < (document.getElementsByClassName('theme').length); i++){
    document.getElementsByClassName('theme')[i].style.background = document.getElementById('background').value;
    document.getElementsByClassName('theme')[i].style.color = document.getElementById('color').value;
  }
  localStorage.clear();
  localStorage.setItem('background', (document.getElementById('background').value));
  localStorage.setItem('color', (document.getElementById('color').value));
}

function reset(){
  localStorage.clear();
  localStorage.setItem('background', '#ffffff');
  localStorage.setItem('color', '#000000');
  ready();
}
