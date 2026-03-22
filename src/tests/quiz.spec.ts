import { expect, test, type Page } from "@playwright/test";

const baseUrl = "http://localhost:5173/";

const correctAnswers = [
	"Hunt",
	"Jupiter",
	"Anton Hansen Tammsaare",
	"Sinine, must ja valge",
	"7",
	"React",
	"H2O",
];

const wrongAnswers = [
	"Karu",
	"Maa",
	"Eduard Vilde",
	"Punane, valge ja sinine",
	"5",
	"Photoshop",
	"CO2",
];

async function answerQuiz(page: Page, answers: string[]) {
	for (const answer of answers) {
		await page.getByRole("button", { name: answer, exact: true }).click();
		await expect(page.getByRole("button", { name: "Järgmine" })).toBeVisible();
		await page.getByRole("button", { name: "Järgmine" }).click();
	}
}

test("Rakenduse avamine", async ({ page }) => {
	await page.goto(baseUrl);

	await expect(page.getByRole("heading", { name: "VIKTORIIN" })).toBeVisible();
	await expect(page.getByText("Milline loom on Eesti rahvusloom?")).toBeVisible();
});

test("Küsimusele vastamine ja tagasiside kuvamine", async ({ page }) => {
	await page.goto(baseUrl);

	await page.getByRole("button", { name: "Hunt", exact: true }).click();
	await expect(page.getByRole("heading", { name: "Õige!" })).toBeVisible();
	await expect(page.getByRole("button", { name: "Järgmine" })).toBeVisible();
});

test("Vale vastuse käitumine", async ({ page }) => {
	await page.goto(baseUrl);

	await page.getByRole("button", { name: "Karu", exact: true }).click();
	await expect(page.getByRole("heading", { name: "Vale!" })).toBeVisible();
});

test("Punktisumma muutumine", async ({ page }) => {
	await page.goto(baseUrl);

	await answerQuiz(page, wrongAnswers);
	await expect(page.getByText("Skoor: 0 / 7 (0%)")).toBeVisible();

	await page.getByRole("button", { name: "Alusta uuesti" }).click();

	await answerQuiz(page, [correctAnswers[0], ...wrongAnswers.slice(1)]);
	await expect(page.getByText("Skoor: 1 / 7 (14%)")).toBeVisible();
});

test("Lõpptulemuste kuvamine", async ({ page }) => {
	await page.goto(baseUrl);

	await answerQuiz(page, correctAnswers);

	await expect(page.getByRole("heading", { name: "Tulemused" })).toBeVisible();
	await expect(page.getByText("Skoor: 7 / 7 (100%)")).toBeVisible();
	await expect(page.getByText("Suurepärane! Mõistad baasteadmisi hästi!")).toBeVisible();
});