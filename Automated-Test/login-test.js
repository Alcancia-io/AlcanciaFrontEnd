const {Builder, By, Key, until} = require('selenium-webdriver');
 

export async function loginSuccess() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:8100/login');
      await driver.wait(until.titleIs('Alcancia.io'), 3000);
      await driver.findElement(By.name('ion-input-0')).sendKeys('sebastianrestituyo@gmail.com');
      await driver.findElement(By.name('ion-input-1')).sendKeys('P@ssw0rd', Key.RETURN);
    } finally {
      await driver.quit();
    }
}; 

export async function loginWithOutCredentials() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:8100/login');
      await driver.wait(until.titleIs('Alcancia.io'), 3000); 
      await driver.findElement(By.name('ion-input-1')).sendKeys(Key.RETURN);
    } finally {
      await driver.quit();
    }
}; 


export async function LoginWrongPassword() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:8100/login');
      await driver.wait(until.titleIs('Alcancia.io'), 3000);
      await driver.findElement(By.name('ion-input-0')).sendKeys('sebastianrestituyo@gmail.com');
      await driver.findElement(By.name('ion-input-1')).sendKeys('P@ssw0rd111', Key.RETURN);
    } finally {
      await driver.quit();
    }
}; 

export async function LoginWrongEmail() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://localhost:8100/login');
      await driver.wait(until.titleIs('Alcancia.io'), 3000);
      await driver.findElement(By.name('ion-input-0')).sendKeys('sebastianrestituyofds@gmail.com');
      await driver.findElement(By.name('ion-input-1')).sendKeys('P@ssw0rd', Key.RETURN);
    } finally {
      await driver.quit();
    }
}; 

