import { expect} from "@playwright/test";
import { test } from "../src/api/fixture/fixture";
import Booking from "../src/api/pages/Booking";
import data from "../src/api/testdata/token.json";
import { headersforupdatebooking } from "../src/api/testdata/headers";

let bookingid;
test.describe.configure({ mode: 'serial' });
test('Create Booking', async ({ request, createbooking }) => {
    bookingid = await createbooking.createbooking('/booking');
    expect(bookingid).toBeGreaterThan(1);
})

test('Update Booking', async ({ request, updatebooking }) => {
    headersforupdatebooking.Cookie = headersforupdatebooking.Cookie + data.token
    const firstname = await updatebooking.updatebooking('/booking/' + bookingid);
    expect(firstname).toMatch(/James/)
})