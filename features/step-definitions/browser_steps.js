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

  Given('Я перехожу в систему ОПН http://test.tr.mos.ru', function() {
    return this.driver.get('http://test.tr.mos.ru');
  });

  // When('Я авторизовываюсь под логином "autotester" и паролем "WXic085aem35yw6t"', function () {
  //   this.driver.findElement({id:'username'}).then(function(element) {
  //     return element.sendKeys('autotester');
  //   });
  //   this.driver.findElement({id:'password'}).then(function(element) {
  //     return element.sendKeys('WXic085aem35yw6t');
  //   })
  //   this.driver.findElement({id:'enterBtn'}).then(function(element) {
  //     return element.click();
  //   });
  // });

  // Then('Я попадаю на страницу выбора подсистем', function () {
  //   var str = 'УНИО';
  //   var xpath = "//*[contains(text(),'" + str + "')]";
  //   var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
  //   return this.driver.wait(condition, 2000);
  // });
  // When('Я перехожу по ссылке "Торговый сбор"', function () {
  //   var str = 'Торговый сбор';
  //   var xpath = "//a[div[contains(text(),'" + str + "')]]";
  //   this.driver.findElement({xpath: xpath}).click();   
  // });

  // Then('Я ожидаю, что на странице содержится текст "У Вас нет доступа к этой странице"', function () {
  //   var str = 'У Вас нет доступа к этой странице';
  //   var xpath = "//*[contains(text(),'" + str + "')]";
  //   var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
  //   return this.driver.wait(condition, 5000);
  // });

  // When('Я выбираю в меню раздел "ОТЧЕТЫ"', function () {
  //   var str = 'ОТЧЕТЫ';
  //   var xpath = "//*[contains(text(),'" + str + "')]";
  //   return this.driver.findElement({xpath: xpath}).click();  
  // });
  // When('Я выбираю в меню раздел "Отчеты о проведении обходов"', function () {
  //   var str = 'Отчеты о проведении обходов';
  //   var xpath = "//*[contains(text(),'" + str + "')]";
  //   elem = this.driver.findElement({xpath: xpath}); 
  //   this.driver.actions().mouseMove(elem).perform();
  // });

  //   When('Я выбираю в меню раздел "Отчеты о состоянии обходов за период"', function () {
  //   var str = 'Отчеты о состоянии обходов за период';
  //   var xpath = "//*[contains(text(),'" + str + "')]";
  //   this.driver.findElement({xpath: xpath}).click(); 
  //   this.driver.sleep(1000);
  // });
  //  Then('Я ожидаю, что на странице содержится текст "Статистический отчет о количестве объектов, находящихся на этапах бизнес - процесса за период c <текущая дата> по <текущая дата>"', function () {
  //   var xpath = "//*[contains(text(),'Статистический')]";
  //   var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
  //   return this.driver.wait(condition, 5000);
  // });
  //   Then('Я ожидаю, что на странице содержится текст "Всего объектов на уровне обходчиков ГКУ МКМЦН"', function () {
  //   var str = 'Всего объектов на уровне обходчиков ГКУ МКМЦН';
  //   var xpath = "//*[contains(text(),'" + str + "')]";
  //   var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
  //   this.driver.wait(condition, 5000); 
  // });


});