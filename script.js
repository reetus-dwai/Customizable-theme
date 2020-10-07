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
  localStorage.setItem('background', document.getElemtentById('background').value)
  localStorage.setItem('background', document.getElemtentById('color').value)
}
