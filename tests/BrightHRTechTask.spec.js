
const {test,expect} = require('@playwright/test')

test.only("AddEmployee", async({page})=>
{
  await page.goto("https://sandbox-app.brighthr.com/lite");
  await page.getByRole('link', {name : 'Log in'}).click();
  await page.locator("#email").fill('dhara.2103@gmail.com');
  await page.locator("#password").fill('Brighthr@2103');
  await page.getByRole('button', {name : 'Login'}).click();
  await page.getByRole('link', { name: 'Employees' }).click();
  //await page.pause();
  await page.getByRole('button', { name: 'Add employee' }).click();
  await page.locator('#firstName').fill('System');
  await page.locator('#lastName').fill('Test');
  await page.locator('#email').fill('Systestenv04@gmail.com');
  await page.locator('#phoneNumber').fill('0745575565');
  await page.getByTestId('input-selector').getByRole('img').click();
  await page.getByTestId('daypicker-panel').getByRole('img').nth(1).click();
  await page.getByLabel('Thu Apr 04').locator('div').nth(1).click();
  await page.locator('#jobTitle').fill('Software tester');
  await page.getByRole('button', { name: 'Save new employee' }).click();
  await page.getByRole('button', { name: 'Add another employee' }).click();
  await page.locator('#firstName').fill('Bright');
  await page.locator('#lastName').fill('HR');
  await page.locator('#email').fill('BrightHR@gmail.com');
  await page.locator('#phoneNumber').fill('0745575566');
  await page.getByTestId('input-selector').getByRole('img').click();
  await page.getByTestId('daypicker-panel').getByRole('img').nth(1).click();
  await page.getByLabel('Fri Apr 05').locator('div').nth(1).click();
  await page.locator('#jobTitle').fill('Software tester');
  await page.getByRole('button', { name: 'Save new employee' }).click();
  await page.getByLabel('Close modal').click();
 

  
  expect(await page.getByRole('heading', {name : 'System Test'}).isVisible());

  expect(await page.getByRole('heading', {name : 'Bright HR'}).isVisible());
  
  //await page.pause();
})

