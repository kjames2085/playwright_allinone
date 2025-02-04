import { test } from "../src/api/fixture/fixture";
import jsondata from "../src/ui/testdata/jsondata.json";
import { data } from "../src/ui/testdata/data";
import ENV from "../src/ui/testdata/environments/env"
import Launch from "../src/ui/pages/Launch";
import Login from "../src/ui/pages/Login";
import Homepage from "../src/ui/pages/Homepage";
import Logout from "../src/ui/pages/Logout";

test.slow();

test('Homepage 1', { tag: '@ui' }, async ({ page, launch, homepage }) => {
  await test.step('Go to Homepage and Click Admin and PIM links', async () => {
    await homepage.homepage1();
  })
})
test('Homepage 2', { tag: '@ui' }, async ({ page, launch, homepage }) => {
  await test.step('Go to Homepage and click Leave and Time links', async () => {
    await homepage.homepage2();
  })

})

test('Homepage 3', { tag: '@ui' }, async ({ page, launch, homepage }) => {
  await homepage.homepage1();

})

test('Homepage 4', { tag: '@ui' }, async ({ page, launch, homepage }) => {

  await homepage.homepage2();

})
test('Homepage 5', { tag: '@ui' }, async ({ page, launch, homepage }) => {
  await homepage.homepage1();

})

test('Homepage 6', { tag: '@ui' }, async ({ page, launch, homepage }) => {

  await homepage.homepage2();

})
test('Homepage 7', { tag: '@ui' }, async ({ page, launch, homepage }) => {
  await homepage.homepage1();

})

test('Homepage 8', { tag: '@ui' }, async ({ page, launch, homepage }) => {

  await homepage.homepage2();

})

test('Homepage 9', { tag: '@ui' }, async ({ page, launch, homepage }) => {
  await homepage.homepage1();

})

test('Homepage 10', { tag: '@ui' }, async ({ page, launch, homepage }) => {

  await homepage.homepage2();

})