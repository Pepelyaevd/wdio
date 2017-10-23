var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(10000);
});

defineSupportCode(function({Given, When, Then}) {
	
  Given('opened page', function() {
    browser.url('https://yandex.ru/');
  });

  When('I click on {string}', function (text) {
    var xpath = "//*[text()="+text+"]";
    return browser.click(xpath)
  });

  Then('I should see {string}', function (text) {
    var xpath = "//*[text()="+text+"]";
    return browser.getText(xpath);
  });

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
    browser.pause(5000);
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


});