function abremenu(){

	let menuArea = document.getElementById("menu-area");

	/*if (menuArea.classList.contains('menu-opened') == true) {
		menuArea.classList.remove('menu-opened');//fecha o menu

	}else{
		menuArea.classList.add('menu-opened');//abre o menu
	}
*/

	if(menuArea.style.width == '200px'){
		menuArea.style.width = '0px';
	}else{
		menuArea.style.width = '200px';
	}
}