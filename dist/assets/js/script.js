//preloader
$(document).ready(() => {
  setTimeout(() => {
    $('.preloader').css('display', 'none');
  }, 1000);
});
function showPreloader() {
  $('.preloader').css('display', 'flex');
}
function hidePreloader() {
  $('.preloader').css('display', 'none');
}

//sidebar functions

$('.sidebar .container a').click((e) => {
  if ($('.menuMobile').hasClass('menuMobile--clickOut')) {
    $('.menuMobile').toggleClass('menuMobile--clickOut');
    $('.menuMobile').toggleClass('menuMobile--clickIn');
  }
  else {
    $('.menuMobile').toggleClass('menuMobile--clickOut');
    $('.menuMobile').toggleClass('menuMobile--clickIn');
  }
  if ($('.sidebar_bloor').hasClass('sidebar_bloor--clickIn')) {
    $('.sidebar_bloor').toggleClass('sidebar_bloor--clickIn');
    $('.sidebar').toggleClass('sidebar_bloor--clickIn');
    $('.sidebar_bloor').toggleClass('sidebar_bloor--clickOut');
    setTimeout(() => {
      if ($('.sidebar_bloor').hasClass('sidebar_bloor--clickOut')) {
        $('.sidebar_bloor').toggleClass('sidebar_bloor--clickOut');
      }
    }, 600);
  }
  $('body').css('overflow', 'auto');
});

if ($('.catalogBtn').length != 0) {
  if ($(window).width() > 576) {
    $('.catalogBtn').click(() => {
      if ($('.catalog').css('display') === 'block') {
        $('.catalog').css('display', 'none');
      } else {
        $('.catalog').css('display', 'block');
      }
    });
    $('.catalog').mouseleave(() => {
      $('.catalog').css('display', 'none');
    });
  }
  else {
    $('.catalogBtn').click(() => {
      if ($('.catalogBtn img').attr('src') === './assets/img/icons/menu-icon-white.svg') {
        $('.catalogBtn img').attr('src', './assets/img/icons/close.svg');
        $('.catalogBtn img').css('width', '18px');
        $('.sidebar').toggleClass('sidebar_bloor--clickIn');
        $('body').css('overflow', 'hidden');
      }
      else {
        $('.catalogBtn img').attr('src', './assets/img/icons/menu-icon-white.svg');
        $('.catalogBtn img').css('width', '10px');
        $('.sidebar').toggleClass('sidebar_bloor--clickIn');
        $('body').css('overflow', 'auto');
      }
    });
  }
}

function lazyScroll(id) {
  $('html,body').animate({
    scrollTop: $(id)[0].offsetTop - 90
  }, 500);
}
function scrollUp() {
  $('html,body').animate({
    scrollTop: 0
  }, 500);
}

//custom select
if ($('.select').length != 0) {
  $('.select').click(() => {
    if ($('.select_list').css('display') === 'none') {
      $('.select_list').css('display', 'block');
      $('.select img').css('rotate', '180deg');
    } else {
      $('.select_list').css('display', 'none');
      $('.select img').css('rotate', '0deg');
    }
  });
  $('.select_list').mouseleave(() => {
    $('.select_list').css('display', 'none');
    $('.select img').css('rotate', '0deg');
  });
  for (let i = 0; i < $('.select_list li').length; i++) {
    $('.select_list li').eq(i).click(() => {
      $('.select input').val($('.select_list li a').eq(i).html());
    });
  }
}
if ($('.select2').length != 0) {
  $('.select2').click(() => {
    if ($('.select2_list').css('display') === 'none') {
      $('.select2_list').css('display', 'block');
      $('.select2 img').css('rotate', '180deg');
    } else {
      $('.select2_list').css('display', 'none');
      $('.select2 img').css('rotate', '0deg');
    }
    console.log($('.select2 input').val())
    // сюда можно было аякс написать для отправки зачем селект если форма все равно нету
  });
  $('.select2_list').mouseleave(() => {
    $('.select2_list').css('display', 'none');
    $('.select2 img').css('rotate', '0deg');
  });
  for (let i = 0; i < $('.select2_list li').length; i++) {
    $('.select2_list li').eq(i).click(() => {
      $('.select2 input').val($('.select2_list li a').eq(i).html());
    });
  }
}

if ($('.accordion').length != 0) {
  // Targetting all the .accordion classes
  let acc = document.getElementsByClassName('accordion');
  // Creating a loop to add eventListener to all .accordion classes
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      //targetting sibling of every .accordion class named .panel class
      let panel = this.nextElementSibling
      //if panel is open, then this block will close it on mouse click
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove('open');
        this.getElementsByClassName('icon')[0].innerHTML = '+';
      }
      //if panel is closed, then this block will open it on mouse click
      else {
        //Removes everthing on previous accordion on new mouse click
        //by this for loop
        for (let x = 0; x < acc.length; x++) {
          acc[x].classList.remove('open');
          acc[x].nextElementSibling.style.maxHeight = null;
          acc[x].getElementsByClassName('icon')[0].innerHTML = '+';
        }
        //if panel is closed, then these codes will open it on mouse click & set those specific rules mentioned below.
        panel.style.maxHeight = panel.scrollHeight + 'px';
        this.classList.toggle('open');
        this.getElementsByClassName('icon')[0].innerHTML = '−';
      }
    })
  }
}

// Задается отступ слева для фото директора на странице о компании 

function containerWidth() {
  let containerWidth = $('#containerW').width();
  let windowWidth = $(window).width();
  let marginLeft = ((windowWidth - containerWidth) / 2) + 'px';
  $('.director__photo').css('marginLeft', marginLeft);
  if ($(window).width() < 768) {
    $('.director__photo').css('marginLeft', 0);
  }

}
containerWidth();

// Раскрывание регистрационных данных на странице контакты
if ($('#hiddenData').length != 0) {
  $('#hiddenData').click(() => {
    $('#hiddenData').toggleClass('opened');
    $('.contacts__bot-text').toggleClass('opened');
  })
}

// Раскрывание фильтров на странице каталог
if ($('.catalog__option').length != 0) {
  for (let index = 0; index < $('.catalog__option').length; index++) {
    $('.catalog__option').eq(index).children('.catalog__option-title').click(() => {
      if (!$('.catalog__option').eq(index).hasClass('active')) {
        $('.catalog__option').eq(index).toggleClass('active');
      }
      else {
        $('.catalog__option').eq(index).toggleClass('active');
      }
    });
  }
}

// Активирование фильтров на странице каталог
if ($('.catalog__filter').length != 0) {
  for (let index = 0; index < $('.catalog__filter').length; index++) {
    $('.catalog__filter').eq(index).click(() => {
      if ($('.catalog__filter').eq(index).hasClass('active')) {
        $('.catalog__filter').removeClass('active');
      }
      else {
        $('.catalog__filter').removeClass('active');
        $('.catalog__filter').eq(index).toggleClass('active');
      }
    });
  }
}

// Связка фильтров и категорий 

let categoryCount = $('.catalog__filter').length
console.log(categoryCount);
for (let index = 0; index < $('.catalog__filter').length; index++) {
  $('.catalog__filter').eq(index).click(() => {
    for (i = 0; i < categoryCount; i++) {
      if ($(`.category${i}`).length > 0) {
        if ($(`#category${i}`).hasClass('active')) {
          $(`.category${i}`).css('display', 'block')
        }
        else {
          $(`.category${i}`).css('display', 'none')
        }
      }
      else {

      }
    }
  });
}

// Табы на странице карточка товара

$(function () {
  var tab = $('#tabs-c .tabs__items-c > div');
  tab.hide().filter(':first').show();

  // Клики по вкладкам.
  $('#tabs-c .tabs__nav-c a').click(function () {
    tab.hide();
    tab.filter(this.hash).show();
    $('#tabs-c .tabs__nav-c a').removeClass('active-c');
    $(this).addClass('active-c');
    return false;
  }).filter(':first').click();
});


// Ползунок для диапазона цен в странице каталог 

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 10;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);
    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});


// Отступ сверху для блока партнеры

if ($('.homePage').length === 0) {
  $('.homePage_block4.partners .container').css('paddingTop', 10);
  $('.homePage_block4.partners').css('height', 400 + 'px');
  $('.homePage_block4.partners ').css('margin-top', 10 + 'px');
}


// Открытие и закрытие модалки "Спасибо"

function openThanks() {
  $('#thanks-modal').css('display', 'block');
  $('body').css('overflow', 'hidden');
}

function closeThanks() {
  $('#thanks-modal').css('display', 'none');
  $('body').css('overflow', 'unset');
}

$('.thanks__wrapper').click(function (event) {
  if (!$(event.target).is('review__content')) {
    $('#thanks-modal').css('display', 'none');
    $('body').css('overflow', 'unset');
  }
});


// Открытие и закрытие модалки "Заказа консультации"

function openRequest() {
  $('#request-modal').css('display', 'block');
  $('body').css('overflow', 'hidden');
}

function closeRequest() {
  $('#request-modal').css('display', 'none');
  $('body').css('overflow', 'unset');
}

$('.request__wrapper').click(function (event) {
  if (!$(event.target).is('request__content')) {
    $('#request-modal').css('display', 'none');
    $('body').css('overflow', 'unset');
  }
});

function pressSubmit() {
  closeRequest();
  setTimeout(openThanks(), 2000)
}


// Фильтры выскакивают слева в мобильной версий

if ($('.catalog__filterMobile-name').length != 0) {
  $('.catalog__filterMobile-name').click(() => {
    $('.catalog__filterMobile-name').toggleClass('active');
    $('.catalog__filterDesktop').toggleClass('active');
    if ($('.catalog__categoriesMobile-name').hasClass('active')) {
      $('.catalog__categoriesMobile-name').toggleClass('active');
      $('.catalog__categoriesDesktop').toggleClass('active');
    }
  })
}


// Категории выскакивают справа в мобильной версий

if ($('.catalog__categoriesMobile-name').length != 0) {
  $('.catalog__categoriesMobile-name').click(() => {
    $('.catalog__categoriesMobile-name').toggleClass('active');
    $('.catalog__categoriesDesktop').toggleClass('active');
    if ($('.catalog__filterMobile-name').hasClass('active')) {
      $('.catalog__filterMobile-name').toggleClass('active');
      $('.catalog__filterDesktop').toggleClass('active');
    }
  })
}


// Очистка диапазона цен

if ($('.catalog__clear').length != 0) {
  $('.catalog__clear').click(() => {
    $('.slider .progress').css('left', '0');
    $('.slider .progress').css('right', '0');
    rangeInput[0].value = 0;
    rangeInput[1].value = rangeInput[1].max;
    $('.price-input .field .input-min')[0].value = 10;
    $('.price-input .field .input-max')[0].value = rangeInput[1].max;
  })
}

// if($('.dropdown').length != 0) {
//   for (let i = 0; i < $('.dropdown').length; i++) {
//     $('.dropdown').mouseenter()
//   }
// }

