// alert("Привет");
function fun1() {
	alert("Мы нажали кнопку");
}
function fun2() {
	alert("Доброе утро");
	document.title = "1 новое сообщение";
}
function fun3() {
	alert("Добрый вечер");
	document.title = "2 новых сообщения";
}

function fortext() {
	document.getElementById("mytext").innerHTML="Текст изменен";
	document.getElementById("mytext").style.fontSize='80px';
	document.getElementById("mytext").style.color='green';
}
function plus(){
	document.getElementById("resca1").style.fontSize='23px';
	document.getElementById("resca2").style.fontSize='23px';
	document.getElementById("resca3").style.fontSize='23px';
	document.getElementById("resca4").style.fontSize='23px';
}
function minus(){
	document.getElementById("resca1").style.fontSize='20px';
	document.getElementById("resca2").style.fontSize='20px';
	document.getElementById("resca3").style.fontSize='20px';
	document.getElementById("resca4").style.fontSize='20px';
}