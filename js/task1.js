function getDate() {
    var date = new Date();
    var day = date.getDay(); // день недели 1-7
    var year = date.getFullYear();
    var num =  date.getDate();
    var month = date.getMonth()

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    //Привожу к правильному формату.
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    
    //Привожу к правильному формату.
    if (num < 10) num = '0' + num;
    if (month < 10) month = '0' + month;
    if (year < 10) year = '0' + year;

    switch (day) {
        case 0:
          day = "Воскресенье";
            break;
        case 1:
            day = "Понедельник";
            break;
        case 2:
            day = "Вторник";
            break;
        case 3:
            day = "Среда";
            break;
        case 4:
            day = "Четверг";
            break;
        case 5:
            day = "Пятница";
            break;
        case 6:
            day = "Суббота";
            break;
        
        default:
          day = "Выходной";
      }

    document.getElementById('timedisplay').innerHTML =  num + '-' + 
                                                        month + '-' + 
                                                        year  + ', ' + 
                                                        day + ' ' +
                                                        hours + '-' + 
    minutes + '-' + 
    seconds;

    setInterval(getDate, 0);
}

function createCalendar(elem, year, month) {
  let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
  let d = new Date(year, mon);

  let table = "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // <td> ячейки календаря с датами
  while (d.getMonth() == mon) {

    if (getDay(d) % 7 == 6 || getDay(d) % 7 == 5) { //сб, вс, красные
      table += '<td>' + '<span class="text_red">' + d.getDate() +'</span>' + '</td>';
  }
  else {
      table += '<td>' +  d.getDate() + '</td>';
  }
    if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  // закрыть таблицу
  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}
 
function view(n) {
    style = document.getElementById(n).style;
    $("element").slideDown( "slow");
    style.display = (style.display == 'block') ? 'none' : 'block';
}

function task_3(n){
    elements = document.querySelector(n)
    document.getElementById('dom').innerHTML =  'Кол-во всех узлов дерева: ' + elements.childNodes.length;
}

$( "#hidden5" ).click(function() {
  
});

function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

function task_4()
{
  let rand_block_num =  Math.random() * (6 - 1) + 1;
  document.getElementById(rand_block_num.toFixed().toString()).style.backgroundColor = generateColor();
  setInterval(task_4, 150);
}

function task_5 () {
  let block = document.getElementById('ins_div')
  let result = prompt("Введите ссылку для вставки", "https://some_url.com");
  while (result != null){
      let elem = document.createElement("div"); // создаем элемент
      let refText = document.createTextNode(result);  // создаем текст ссылки
      let a = document.createElement('a');    // создаем эл-т ссылка
      a.text = result;
      a.href = result;

      elem.appendChild(a);
      block.insertBefore(elem, block.firstChild.nextSibling); // получаем первый элемент, перед которым будет идти добавление и вставляем
      result = prompt("Введите ссылку для вставки", "https://some_url.com");
  }
}

function imgsrc() {
  i++;i%=imgs.length;
  image.src = imgs[i];
}


function task_6 () {
  var i=0;
  var imge=document.getElementById("image");
  
  imge.addEventListener('mouseover',function(){
    var imgs=new Array('img/1.jpg','img/2.jpg', 'img/3.png');
    i++;i%=imgs.length;
    image.src = imgs[i];
  })
}

function task_8(){
  const img=document.querySelector("#photo");
    const text=document.querySelector("#textlogo");
    photo.addEventListener('mouseover',function(){
      img.style.opacity = '0';})
      photo.addEventListener('mouseout',function(){
      img.style.opacity = '1';})
  }
