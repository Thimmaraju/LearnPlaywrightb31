import { test, expect } from '@playwright/test';

import data from "../../testData/APIData/addemp.json"

let employeeNumber 


test("Verify Add Employee APIs", async ({ request }) => {

    const randomChars = Math.random().toString(36).substring(2, 7);

    const URL = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"

    const payload = data
    data.employeeId = randomChars
    const addemp = await request.post(URL, {

        headers: {

            "cookie": "orangehrm="+process.env.CooKiValue
        },
        data: payload
    })

    expect(addemp.status()).toBe(200);

    const addempjson = await addemp.json()

    employeeNumber = addempjson.data.empNumber

    console.log(addempjson)
    
    expect(addempjson).toHaveProperty('data');

    expect(addempjson.data.lastName).toBe(data.lastName)

    expect(addempjson.data.firstName).toBe(data.firstName)

    expect(addempjson.data.employeeId).toBe(randomChars)

    expect(addempjson).toHaveProperty('meta');
    expect(addempjson).toHaveProperty('rels');


})


test("Verify Get Employee APIs", async ({ request }) => {



    const URL = `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/${employeeNumber}/personal-details`

    const getEMP = await request.get(URL, {

        headers: {

            "cookie": "orangehrm="+process.env.CooKiValue
        }
    })

    expect(getEMP.status()).toBe(200);

    const getEMPjson = await getEMP.json()

    console.log("Employee Details")
    console.log(getEMPjson)
    
   


})