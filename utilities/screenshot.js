import { test } from '@playwright/test';


export async function attachStepScreenshot(page, name){

    await test.info().attach(name,{
        body: await page.screenshot(),
        contentType: 'image/png'
    })
}

export async function attachScreenshotAfterEach(page, testInfo){

    await test.info().attach('Final screenshot',{
        body: await page.screenshot(),
        contentType: 'image/png'
    })

    if (testInfo.status !== testInfo.expectedStatus) {
        await testInfo.attach('Failure Screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png',
        });
    }
}