const {Builder, By, Key, until} = require('selenium-webdriver');
 

export async function registerSuccess() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:8100/login');
      await driver.wait(until.titleIs('Alcancia.io'), 3000);
      await driver.findElement(By.name('register')).click();
      await driver.findElement(By.name('ion-input-2')).sendKeys('Manolo Ozuna');
      await driver.findElement(By.name('ion-input-3')).sendKeys('Perez Lopez');
      await driver.findElement(By.name('ion-input-4')).sendKeys('srestituyo@alcancia.io');
      await driver.findElement(By.name('ion-input-5')).sendKeys('P@ssw0rd');
      await driver.findElement(By.name('ion-input-6')).sendKeys('P@ssw0rd', Key.RETURN);
    } finally {
      await driver.quit();
    }
}; 

export async function registerPasswordNotMatch() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:8100/login');
      await driver.wait(until.titleIs('Alcancia.io'), 3000);
      await driver.findElement(By.name('register')).click();
      await driver.findElement(By.name('ion-input-2')).sendKeys('Manolo Ozuna');
      await driver.findElement(By.name('ion-input-3')).sendKeys('Perez Lopez');
      await driver.findElement(By.name('ion-input-4')).sendKeys('srestituyo@alcancia.io');
      await driver.findElement(By.name('ion-input-5')).sendKeys('P@ssw0rd');
      await driver.findElement(By.name('ion-input-6')).sendKeys('P@ssw0rd1', Key.RETURN);
    } finally {
      await driver.quit();
    }
}; 

export async function registerEmailAlreadyExist() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:8100/login');
      await driver.wait(until.titleIs('Alcancia.io'), 3000);
      await driver.findElement(By.name('register')).click();
      await driver.findElement(By.name('ion-input-2')).sendKeys('Manolo Ozuna');
      await driver.findElement(By.name('ion-input-3')).sendKeys('Perez Lopez');
      await driver.findElement(By.name('ion-input-4')).sendKeys('sebastianrestituyo@gmail.com');
      await driver.findElement(By.name('ion-input-5')).sendKeys('P@ssw0rd');
      await driver.findElement(By.name('ion-input-6')).sendKeys('P@ssw0rd', Key.RETURN);
    } finally {
      await driver.quit();
    }
}; 
