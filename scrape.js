const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["disable-setuid-sandbox"],
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.awesomegti.com/shop-by-car/volkswagen/golf-mk7/milltek-non-valved-race-cat-back-exhaust-vw-golf-r-mk7/"
  );
  await page.waitForSelector('input[type="radio"]');
  const radios = await page.$$eval('input[type="radio"]', (inputs) => {
    return inputs.length;
  });
  let result = [];
  for (let i = 0; i < radios; i++) {
    let evaluate = await page.evaluate((i) => {
      let radio = document.querySelectorAll("input[type=radio]");
      radio[i].click();
      let price = document.querySelector(".productView-price").innerText;
      return price;
    }, i);
    result.push(evaluate);
    await page.waitForTimeout(1500);
  }
  console.log(result);
  await browser.close();
})();
