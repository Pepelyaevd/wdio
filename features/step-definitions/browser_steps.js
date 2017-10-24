var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(30000);
});

defineSupportCode(function({Given, When, Then}) {
	
  Given('Я перехожу в систему ОПН ({string})', function(text) {
    browser.url('http://test.tr.mos.ru');
  });

  When('Я авторизовываюсь под логином "autotester" и паролем "WXic085aem35yw6t"', function () {
    browser.keys('autotester')
      .click("#password")
      .keys('WXic085aem35yw6t')
      .click("#enterBtn");
  });

  Then('Я попадаю на страницу выбора подсистем', function () {
    browser.waitForText('.system-title', 5000)  
  });

  When('Я перехожу по ссылке "Торговый сбор"', function () {
    var text = "Торговый сбор";
    var xpath = "//a/div[text()='"+text+"']/..";
    browser.click(xpath);
  });

  Then('Я ожидаю, что на странице содержится текст "У Вас нет доступа к этой странице"', function () {
    var str = "У Вас нет доступа к этой странице";
    var xpath = "//*[text()='" + str + "']";
    browser.pause(6000);
    browser.waitForText(xpath, 7000);
  });

  When('Я выбираю в меню раздел "ОТЧЕТЫ"', function () {
    var str = 'ОТЧЕТЫ';
    var xpath = "//*[text()='" + str + "']";
    browser.click(xpath); 
  });

  When('Я выбираю в меню раздел "Отчеты о проведении обходов"', function () {
    var str = 'Отчеты о проведении обходов';
    var xpath = "//*[text()='" + str + "']";
    browser.moveToObject(xpath); 
  });

  When('Я выбираю в меню раздел "Отчеты о состоянии обходов за период"', function () {
    var str = 'Отчеты о состоянии обходов за период';
    var xpath = "//*[text()='" + str + "']";
    browser.click(xpath);
  });

  Then('Я ожидаю, что на странице содержится текст "Статистический отчет о количестве объектов, находящихся на этапах бизнес - процесса за период c <текущая дата> по <текущая дата>"', function () {
    var str = "Статистический отчет о количестве объектов, находящихся на этапах бизнес";
    var xpath = "//label[contains(.,'" + str + "')]";
    browser.waitForText(xpath, 7000);
  });

  Then('Я ожидаю, что на странице содержится текст "Всего объектов на уровне обходчиков ГКУ МКМЦН"', function () {
    var str = 'Всего объектов на уровне обходчиков ГКУ МКМЦН';
    var xpath = "//*[text()='" + str + "']";
    browser.waitForText(xpath, 1000); 
  });

  When('Я нажимаю кнопку "Экспорт"', function () {
    browser.click(".export");
  });

  Then('Я ожидаю, что происходит скачивание файла', function () {
    console.log("Check the downloaded file");
  });

  When('Я выбираю вкладку "Этап ЦНД"', function () {
    var str = 'Этап ЦНД';
    var xpath = "//*[text()='" + str + "']";
    browser.click(xpath);
  });
  
  Then('Я ожидаю, что на странице содержится текст "Всего объектов на уровне утверждающих ГБУ ЦНД"', function () {
    var str = 'Всего объектов на уровне утверждающих ГБУ ЦНД';
    var xpath = "//*[text()='" + str + "']";
    browser.waitForText(xpath, 1000); 
  });
  When('Я выбираю вкладку "Этап ДЭПиР"', function () {
    var str = 'Этап ДЭПиР';
    var xpath = "//*[text()='" + str + "']";
    browser.click(xpath);
  });
  
  When('Я ввожу в поле "Период от" значение "16.10.2017"', function () {
    var str = '16.10.2017';
    browser.clearElement("#startDateBox");
    browser.setValue("#startDateBox",str);
  });
   When('Я ввожу в поле "Период до" значение "17.10.2017"', function () {
    var str = '17.10.2017';
    browser.clearElement("#endDateBox");
    browser.setValue("#endDateBox",str);
  });

  When('Я нажимаю кнопку "Показать"', function () {
    var str = 'Показать';
    var xpath = "//*[text()='" + str + "']";
    browser.click(xpath);
    browser.pause(14000);
  });

  Then('Я ожидаю, что на странице содержится текст "Статистический отчет о количестве объектов, находящихся на этапах бизнес - процесса за период c 16.10.2017 по 17.10.2017"', function () {
    var str = 'c 16.10.2017 по 17.10.2017';           
    var xpath = "//label[contains(.,'" + str + "')]";
    browser.waitForText(xpath, 15000); 
  });

  Then('Я ожидаю, что на странице содержится текст "Всего объектов на уровне сотрудника ДЭПиР"', function () {
    var str = 'Всего объектов на уровне сотрудника ДЭПиР';
    var xpath = "//*[text()='" + str + "']";
    browser.waitForText(xpath, 2000); 
  });       
});
