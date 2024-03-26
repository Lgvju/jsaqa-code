const { clickElement, getText } = require('./lib/commands.js');
const puppeteer = require('puppeteer');

let page;

beforeEach(async () => {
	page = await browser.newPage();
	await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
	page.close();
});

describe('Ticket booking tests', () => {
	beforeEach(async () => {
		page = await browser.newPage();
		await page.goto('http://qamid.tmweb.ru/client/index.php');
	});

	test('Should successfully book one ticket', async () => {
		await clickElement(page, '.page-nav > a:nth-child(5)');
		await clickElement(page, 'a.movie-seances__time');
		await clickElement(page, 'div.buying-scheme__wrapper> div:nth-child(2) > span:nth-child(1)');
		await clickElement(page, 'button.acceptin-button');
		await clickElement(page, 'button.acceptin-button');
		const actual = await getText(page, 'p.ticket__hint');
		expect(actual).toContain(
			'Покажите QR-код нашему контроллеру для подтверждения бронирования.');
	 });
	test('Should successfully book two tickets', async () => {
		await clickElement(page, '.page-nav > a:nth-child(5)');
		await clickElement(page, 'a.movie-seances__time');
		await clickElement(page, 'div.buying-scheme__wrapper> div:nth-child(2)> span:nth-child(2)');
		await clickElement(page, 'div.buying-scheme__wrapper> div:nth-child(2)> span:nth-child(3)');
		await clickElement(page, 'button.acceptin-button');
		await clickElement(page, 'button.acceptin-button');
		const actual = await getText(page, 'p.ticket__hint');
		expect(actual).toContain(
			'Покажите QR-код нашему контроллеру для подтверждения бронирования.');
 });
	test('Should unsuccessful to book already booked ticket', async () => {
		await clickElement(page, '.page-nav > a:nth-child(5)');
		await clickElement(page, 'a.movie-seances__time');
		await clickElement(page, 'div.buying-scheme__wrapper> div:nth-child(2)> span:nth-child(1)');
		expect(String(await page.$eval("button", (button) => {
		return button.disabled;}))).toContain("true");
 });
});