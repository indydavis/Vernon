// JavaScript Document

function openmenu(menu){
	
	var men = document.getElementById(menu);	
	var td = document.getElementById('enc');
	var p = document.getElementById(menu+'pic');
	if(men.style.display == "none"){
		men.style.display = "block";
		p.src = "http://www.brainvoyage.com/includes/menu/menu_big_open.gif";		
	}
	else{
		men.style.display = "none";	
		p.src = "http://www.brainvoyage.com/includes/menu/menu_big_closed.gif";
	}
}

function changepic(menu,state){
	var p = document.getElementById(menu+'pic');
	var men = document.getElementById(menu);
		
	if(state == "on"){
		if(men.style.display == "none")
			p.src = "http://www.brainvoyage.com/includes/menu/menu_big_hover.gif";
		else
			p.src = "http://www.brainvoyage.com/includes/menu/menu_big_open.gif";
	}
	else
		p.src = "http://www.brainvoyage.com/includes/menu/menu_big_closed.gif";
			
}
