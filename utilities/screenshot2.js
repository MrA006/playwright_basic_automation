import { test } from '@playwright/test';

export async function attachStepScreenshot(page, name){

    await test.info().attach(name, {
        body: await page.screenshot(),
        contentType: 'image/png'
    })
}

export async function attachFinalScreenshot(page, testinfo){

    await test.info().attach("Final Screenshot", {
        body: await page.screenshot(),
        contentType: 'image/png'
    })

    if( testinfo.status !== testinfo.expectedStatus){
        await testinfo.attach("Failure Screenshot", {
            body: await page.screenshot(),
            contentType: 'image/png'
        })
    }
}