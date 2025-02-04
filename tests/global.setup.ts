import { expect } from "@playwright/test";
import { test } from "../src/api/fixture/fixture";
import { defaultheaders } from "../src/api/testdata/headers";
import { dataforcreatetoken } from "../src/api/testdata/data";
import { baseurl } from "../src/api/testdata/baseurl";
import Createtoken from "../src/api/pages/Createtoken";
import { create } from "domain";

test.slow();

test('Login', { tag: "@ui" }, async ({ page, launch, login }) => {
    await test.step('Login to Orange HRM', async () => {
        await login.login();
    })
})


test('Create Token', { tag: "@api" }, async ({ request, createtoken }) => {
    await test.step('Create token', async () => {
        const token = await createtoken.createtoken('/auth');
        expect(token).toMatch(/[0-9a-z]{15}/)

    })
})