import { test } from "../src/api/fixture/fixture";

test.slow();

test('Logout', { tag: "@ui" }, async ({ page, launch, logout }) => {
   await test.step('Logout to the application', async () => {

        await logout.logout();
    })
})