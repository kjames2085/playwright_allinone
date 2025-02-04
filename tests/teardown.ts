import { test } from "../src/api/fixture/fixture";

test('Logout', async ({ page, launch, logout }) => {

    await logout.logout();
})