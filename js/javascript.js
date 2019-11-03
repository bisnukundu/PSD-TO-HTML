var icon_btn = document.querySelector(".menu_icon");
var menu = document.querySelector(".menu");

icon_btn.addEventListener("click",()=>{
	if(menu.style.display === "block"){
		menu.style.display="none"
	}else{
		menu.style.display="block"
	}
})


	
