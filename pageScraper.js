const scraperObject = {
  timeout: function () {
    setTimeout(() => {
      console.log("timeout");
    }, 1500);
  },
  url: "https://www.awesomegti.com/shop-by-car/volkswagen/golf-mk7/milltek-non-valved-race-cat-back-exhaust-vw-golf-r-mk7/",
  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    await page.waitForSelector(".productView-price");
    let price = await page.$$eval(".productView-price", (elements) => {
      let radio = document.querySelectorAll("input[type=radio]");
      let price = [];
      for (let i = 0; i < radio.length; i++) {
        radio[i].click();
        price.push(elements[0].innerText);
        setTimeout(() => {
          console.log(`Delaying for ${i} seconds...`);
        }, 2000);

        // console.log(this);
      }
      return price;
    });
    console.log(`Price: ${price}`);
  },
};
function delay(i) {
  setTimeout(() => {
    console.log(`Delaying for ${i} seconds...`);
  }, 2000);
}
module.exports = scraperObject;
