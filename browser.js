const puppeteer = require("puppeteer");

async function startBrowser() {
  let browser;
  try {
    console.log("starting browser...");
    browser = await puppeteer.launch({
      headless: false,
      args: ["disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch {
    console.log("error starting browser");
  }
  return browser;
}

module.exports = { startBrowser };
