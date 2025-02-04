import { APIRequestContext, expect } from "@playwright/test";
import { defaultheaders } from "../testdata/headers";
import { dataforcreatetoken } from "../testdata/data";
import { baseurl } from "../testdata/baseurl";
import fs from "fs";

export default class Createtoken {

    request: APIRequestContext
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createtoken(resources: string) {
        const response = await this.request.post(baseurl.url + resources, {
            headers: defaultheaders,
            data: dataforcreatetoken
        })
        const token = (await response.json()).token
        const data = {
            "token": token
        }
        fs.writeFile('./src/api/testdata/token.json', JSON.stringify(data),()=>{});
        return (await response.json()).token
    }
}