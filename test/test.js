const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");


async function example() {

    //Esperamos a que se abra la ventana de Chrome
    let driver = await new Builder().forBrowser("chrome").build();

     //Accedemos a http://localhost:3000 en una petición get
    await driver.get("http://localhost:3000");

    // await driver.findElement(By.id('button-login')).click();
    let button = await driver.findElement(By.xpath('//*[@id="button-login"]'));
    await button.click();

    //Cerramos el navegador
    //await driver.quit();
}

example();