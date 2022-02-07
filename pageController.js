const pageScraper = require("./pageScraper");

async function scrapeAll(browserInstance) {
  let browser;
  try {
    browser = await browserInstance;
    await pageScraper.scraper(browser);
  } catch (err) {
    console.log("Got problem during scraping: ", err);
  }
}
module.exports = (browserInstance) => {
  scrapeAll(browserInstance);
};
