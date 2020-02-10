var obj = [];
var oneArr = ['name','surname','age','gender'];//для красоты, фактически в массив заносятся данные из инпутов
createTable();//ту да же к ванАрр
function createTable(){//шапка таблицы
	var table = document.createElement('table');
	document.body.append(table);
	var tr = document.createElement('tr');
	oneArr.forEach(function (item){
		var th = document.createElement('th');
		th.innerText = item;		                       
		tr.append(th);	
	})
		table.append(tr);}
var modul = document.getElementById("Mymodal");//переменная формы
var butt = document.getElementById("myBtn");//переменная кнопки вывода окна
var buttons = document.getElementsByClassName("close")[0];//переменная кнопки отправки в кеш-массив
butt.onclick = (function(){
	modul.classList.toggle('hidden')//честно прочитано и метод взят из JQery потому что понравилось
})
buttons.onclick = function(){//создаем и заполняем вводимыми данными кеш-массив
	var d = document;
	var inp = d.getElementsByClassName('inp');
	var mas = [];
	function save(value) {
	  for (var i = 0; i < inp.length; i++) {
		mas[i] = inp[i].value;
	  }}
	save();//переносим в массив кеш-даные из модального окна
	console.log(mas)
		createDablTable();//cоздаем вторую таблицу с вносимыми данными из модального окна
		function createDablTable(){
			var DablTable = document.createElement('table');
				document.body.append(DablTable);
						var newtr = document.createElement('tr');
			mas.forEach(function(item,i,value){
				var newth = document.createElement('th');
					newth.innerText = item;
						newtr.append(newth);
					})
		DablTable.append(newtr);
		}
		obj.push(JSON.parse(JSON.stringify(mas)))//добавляем в конечный массив данных разобранные данные из кеша по клику.
		console.log(obj);}