
function fun_title(){
	document.title="1 новое сообщение"
}
function fun_title2(){
	document.title="2 новых сообщения"
}


function fun1(){
alert("Вы нажали кнопку");
}


function fon1(){
	document.getElementById('content').style.backgroundImage = "url('img/white.png')";
	setTimeout("swal('Ваш фон был изменен на №1')",1000);
}

function fon2(){
	document.getElementById('content').style.backgroundImage = "url('img/kale-salad.jpg')";
	setTimeout("swal('Ваш фон был изменен на №2')",1000);
}
function fon3(){
	document.getElementById('content').style.backgroundImage = "url('img/brijan.gif')";
	setTimeout("swal('Ваш фон был изменен на №3')",1000);

}

function changeback(){
	document.getElementById('content').style.backgroundImage = "url('img/white.png')"
}



function messagebtn(){
	var messageInput = document.getElementById('message').value;
	alert("Здравствуй, " + messageInput);
}



function search(e) {
    if(event.key == 'Enter') {
        alert('Здравствуй, ' + e.value);
        if (e.value == 'Саша') {
        	alert('Уточкин ' + e.value);
        }
        if (e.value == 'Кирилл') {
        	alert('Воротынцев ' + e.value);
        }
        if (e.value == 'Илья') {
        	alert('Мартыненко ' + e.value);
        }
        if (e.value == 'поменяй фон') {
		document.getElementById('content').style.backgroundImage = "url('img/white.png')"
        }
    }
    if (event.key == 'ArrowUp') {
    	alert('Кнопка вверх');
    }
}














function fun2(){
document.getElementById('part1').innerHTML="Доброе утро";
document.getElementById('part1').style.fontSize='60px';
document.getElementById('part1').style.color='blue';
}




function fun3(){
document.getElementById("part1").innerHTML="Добрый вечер";
document.getElementById('part1').style.fontSize='60px';
document.getElementById('part1').style.color='green';
}

// function title(){
// 	document.getElementById("main_title").innerHTML="сообщение";
// }

function fun_on_led(){
document.getElementById('myImage').src='img/pic_bulbon.gif'
}
function fun_off_led(){
document.getElementById('myImage').src='img/pic_bulboff.gif'
}

function fulltime() {

	var time = new Date();

	document.clock.full.value = time.toLocaleString();

	setTimeout('fulltime()',1000)

}

 // var now = new Date();
 // alert(now.getHours());

function showPlus(a,b,c,d) {
	alert(a*b*c+d);
}