import { test as mytest } from "../../ui/fixture/fixture";
import Createtoken from "../pages/Createtoken";
import Booking from "../pages/Booking";

export const test = mytest.extend<{ createtoken: Createtoken, createbooking: Booking, updatebooking: Booking }>({
    createtoken: async ({ request }, use) => {
        const createtoken = new Createtoken(request);
        await use(createtoken);
    },
    createbooking: async ({ request }, use) => {
        const createbooking = new Booking(request);
        await use(createbooking);
    },
    updatebooking: async ({ request }, use) => {
        const updatebooking = new Booking(request);
        await use(updatebooking);

    }
})