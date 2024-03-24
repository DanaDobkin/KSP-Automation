import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    projects: [
        {
            name: "chromium",
            use: { ...devices['Desktop Chrome'] },
        },
        // {
        //     name: "firefox",
        //     use: { ...devices['Desktop Firefox'] },
        // }
    ],
    use: {
        headless: false,
        //channel: "chrome",
        //baseURL: "https://ksp.co.il/web/",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        launchOptions: {
            args: ["--start-maximized"]
        }
    },
    testMatch: ["ShoppingProductsValidation.test.ts"],
    retries: 0,
    reporter: [
        ["dot"], 
        ["json", {
            outputFile: "test-result.json"
        }], 
        ["html", {
            open: "always"
        }]
    ]
};

export default config;