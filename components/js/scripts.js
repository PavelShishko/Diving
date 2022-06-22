var text = `Добро пожаловать! На страницах нашего сайта вы найдете качественную,
нужную информацию касаемо вашего увлечения. 
Более подробно о нас вам расскажут разделы нашего сайта,благодаря отзывам, отчетам, 
статьям вы познакомитесь с нами поближе, узнаете, что дайвинг в Москве этореальность.
Много полезной информации вам предоставит социальный блог «Акватика» там же,
вы можете размещать свои отчеты и отзывы о путешествиях, 
а так же находить новых друзей по увлечению.Для прямого общения он - лайн,
 приглашаем Вас на тематический форум и в соц сети,
 где "живут" участники клуба которые всегда рады новым знакомствам.`;
var delay = 10; // cкорость
var elem = document.getElementById("info-section");

var print_text = function (text, elem, delay) {
    if (text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function () {
                print_text(text.slice(1), elem, delay);
            }, delay
        );
    }
}
print_text(text, elem, delay);



let button = document.querySelector('.icon');
let menu = document.querySelector('.nav-menu-mobile');

button.onclick = () => { //накидываем на кнопку обработчик событий по клику.
    menu.classList.add('active'); // тут добавляешь класс к меню, который будет открывать это меню
}

let btnClose = document.querySelector('.close');

btnClose.onclick = () => {
    menu.classList.remove('active');
}


let modal = document.querySelector('.popup-black');
let btn = document.querySelector('.header-btn');
let span = document.getElementsByClassName("popup-close")[0];

btn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



var text1 = `Вы спросите, есть ли дайвинг в Москве? Ответ однозначный – да, есть!
Акватика предлагает обучение, как в Москве, так и за рубежом. Приятнее учиться на море скажете вы!
Наверное да, но обратите внимание на то, что многие клубы подводного плавания за рубежом могут не иметь
Русскоговорящий персонал
(инструкторов) квалификация тоже остается загадкой, к тому же вам придется тратить драгоценное время отпуска
на изучение учебников,
таблиц, отработку навыков, сдачу экзаменов. Не лучше ли пройти обучение рядом с домом в удобное время, и
спокойной обстановке,
с квалифицированными инструкторами, а во время долгожданного отпуска наслаждаться всеми прелестями океана.`;
var delay1 = 10; // cкорость
var elem1 = document.getElementById("question-text");

var print_text1 = function (text1, elem1, delay1) {
    if (text1.length > 0) {
        elem1.innerHTML += text1[0];
        setTimeout(
            function () {
                print_text1(text1.slice(1), elem1, delay1);
            }, delay1
        );
    }
}
print_text1(text1, elem1, delay1);

var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      // если у нас есть подсказка...
      let tooltipHtml = target.dataset.tooltip;
      if (!tooltipHtml) return;

      // ...создадим элемент для подсказки

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // спозиционируем его сверху от аннотируемого элемента (top-center)
      let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
      if (left < 0) left = 0; // не заезжать за левый край окна

      let top = coords.top - tooltipElem.offsetHeight - 5;
      if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };