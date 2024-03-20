let page;

beforeEach(async () => {
  page = await browser.newPage(); 
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });
  
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  },5000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },5000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
},5000);

describe("Github about page tests", () => { 
  beforeEach(async()=>{
    await page.goto("https://github.com/about");
  });
    test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title3 = await page.title();
    expect(title3).toEqual("About · GitHub"); 
  });
  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },5000);

  test("The page contains Subscribe button", async () => {
    const subscribeBtnSelector = ".btn-muted-mktg.btn-mktg";
    await page.waitForSelector(subscribeBtnSelector, {
      visible: true,
    });
    const actual = await page.$eval(subscribeBtnSelector, link => link.textContent);
    expect(actual).toContain("Subscribe");
    },5000);
  });

 
