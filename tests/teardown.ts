import { test } from "../src/api/fixture/fixture";

test('Logout',{tag: "@ui"}, async ({ page, launch, logout }) => {

    await logout.logout();
})