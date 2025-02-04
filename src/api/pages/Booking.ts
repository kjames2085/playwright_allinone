import { APIRequestContext } from "@playwright/test";
import { baseurl } from "../testdata/baseurl";
import { defaultheaders, headersforupdatebooking } from "../testdata/headers";
import { dataforcreatebooking, dataforupdatebooking } from "../testdata/data";

export default class Booking {
    request: APIRequestContext;

    constructor(request: APIRequestContext){
        this.request = request;
    }

    async createbooking(resources: string){
        const response = await this.request.post(baseurl.url + resources,{
            headers: defaultheaders,
            data: dataforcreatebooking
        })

        return ((await response.json()).bookingid)
    }

    async updatebooking(resources: string){
        const response = await this.request.put(baseurl.url + resources,{
            headers: headersforupdatebooking,
            data: dataforupdatebooking
        })

        return (await response.json()).firstname;
    }

}