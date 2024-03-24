# KSP-Automation

[Overview]
Hello Everyone!
This project I'm about to show you is an automation infrastructure, which purpose is to validate and measure the quality of the KSP internet store. 
The project is written in typescript, using the modern automation tool - playwright.
The main features of the store are:
* searching for items in the catalog
* finding one and adding it to the store
* logging to our personal account
* buying the chosen products
This project's target is to validate the functionality of the most common user-experience steps in that shop.

[Table_Of_Contents]
Installation
Usage
Features
Config Managment
Personal Notes
Playwright Bug

[Installation]
1. Clone the project into your local computer from the GitHub repository: "https://github.com/DanaDobkin/KSP-Automation"
2. make sure you have nodejs installed on your computer. If not, follow by:
    a. install nodejs from here: "https://nodejs.org/en/download"
    b. make sure to have a proper PATH to that package: on your local machine, go to "environment variables", 
    and add to the PATH variable your nodejs path (usually it is "C:\Program Files (x86)\nodejs")  
3. make sure you set a proper environment for dealing with your project (VSCode for node languages prefferably).
4. make sure you have all the desired browsers needed for running tests (chromium, firefox, ect.)
5. open the terminal (ctrl+J), and type "npm i" - this will download all the needed packages (from the package.json file) to run the application.

[Usage]
* the file 'playwright.config.ts' is our config file for running test with playwright.
* to run the tests, simply type the commant: "npm run test" (all scripts can be found in the package.json file)
* to run the tests in a debug mode, run the command: "npm run debug"
* to run codegen tool (playwright's built-in ability to open a local browser and catch element in live-time only by manual user-steps) type the next command: "npx playwright codegen"
* if you want to use codegen on a page where you need to be logged-in as a specific user, type: " --save-storage=auth.json" (will be explained later on)

[Config_Managment]
In my project I have provided a basic config for test-running. Of corse, there are so many opportunities of changing the runnings, the configurations, the reports and more capabilities of an automation environment - but I believe what I have included is the perfect match for the current framework. 
In the playwright.config.ts I did the following:
* run the tests in 'chromium' and 'firefox' browsers under "projects" property.
* run the tests in headless mode (browser opens ap and seen locally while running the scripts). type the value 'false' if you dont want the browser to be initialized in live-time running.
* the "screenshot" property provides us an image of the browser when a test had a faliure (this allows us another way of finding the reason fot the break beside debugging or thrown-errors)
* video - same as images but a short screen film.
* in the launchOptions args I want the tests to run on a maximized-sized browser.
* "testMatch" - run a specific test file (for me it was easier since all my tests are placed in one file).
* "reporter" - there are many ways of showing tests results. I chose to focus on three - dot, JSON and HTML. the dor=t reporter shows in the console "....." if all tests have passed, and "..F.." if something has failed. good for local running an on-time writing test and executing them. the JSON file is good for CI/CD tools (like GitLabCI) that uses JUnit frameworks for reporting. And finally, the HTML report that clearly shows all tests and thier posr-running status. 

[Features]
* The project is written in typescript (as opposed to javascript that's been requested on the assignment).
The reason behind that decision was the understanding that typeScript introduces static typing, allowing developers (and automation engineers) to define types for variables, function parameters, and return values. This helps catch type-related errors during development or execution, leading to more robust and reliable code.
* The project uses Playwright's built-in Test-Runner. I've chosen that over jest for the following reason:
Playwright Test Runner is built specifically for browser automation testing. It offers native support for multiple browsers without requiring additional setup or plugins (anlike Jest that demands more plugins, frameworks, configs and additional setups). This native support can lead to more reliable and accurate tests compared to Jest, which primarily focuses on unit and integration testing.
* In the assignment I was asked to validate the log-in process. I could write that test, but then when I would need to write another test that focuses on managing the shopping cart - I would need to be logged in to perforem tasks there - which will leave me with two tests that perform same steps. To overcome that, I used playwright's ability to store local coockies (I logged in as a personal user), and use them whenever I perform an action that requiers being logged-in. That what the constants --> auth.json file is for.
* For selectors, I used the xpath expressions. Why not css? because the ksp store uses the materialUI library for managing ui components. The elements and DOM there are not static - they change by different actions. Css locators usually are used when the developer is sure the DOM is stable and general. Xpath is used when we need to locate an element in a more specific order, to make sure we can catch it.

[Personal_Note]
I know I havn't fulfilled all the assignments requirements. Despite the busy time I spend daily in the military, it is important for me to show that I do know this project is far from being complete or perfect. There's still a long way to go to make it perfect. Unfortunately, due to military rquierments, I couldn't make everything on time. Instead of that, let me tell you what my vision of a "perfect automation project" would look like if I had enough time:
- of cours there would be more tests, coveraging all user-experience regression prosseces. 
- I would pay more attension to page details (commersials for example, that appear on the screan while running - I saw it didn't disturbed the running so I left it untouched due to time shortance)
- more configuration. Working on a team with different testing environment, each expects different variables, url's, parameters, so there must be a specific config file (under App.config) for each environment.
- generic. for a project with lots of tests, utills functions and wide component-coverage for re-using in tests or scripts are a must. (in my implementation, each page/layout/component class initializes a "page" object. I know I should have did a generic elementUser class [for example] that would store the page object, and all other classes would inherit/use it whenever needed.)
- locators. find better expressions. maybe discuss with the developers about changing the DOM.
- in the future if we would need to connect this project to a running CI/CD platform, there will be lots of configurations: dockerfile, testing environments and db per one, mocks (for users for example), nodes/agents for running them and more.


To sum up everything that has been saied above, due to time constraints in the army, I did not have time to fulfill all the requirements of the mission, but nevertheless I am satisfied with what I have achieved so far. 
Thank you for understading the situation!

# p.s: there is a bug in playwright's coockies saving functionality that I have encountered, tried to resolve and then found on google: when we run a test that uses an authentication context (like in the "validate cart capacity" test), while opening the main browser, it also opens another blank browser and focuse on it. the main browser then cannot navigate to the desired elements, and failes. 
# bug discussion on google: "https://github.com/microsoft/playwright/issues/22240" and "https://github.com/microsoft/playwright/issues/24134". I unfortunately could not resolve this. If I had more time, I would choose another solution: to directly store personal data in the localStorage/localSession ad beforeAll function for being able to run tests while ligged-in from the start.
# How i found that it was a bug and can prove that my test actually works:
# if you navige to "additional --> useContext open two pages" - I have a screenshot of my test running in debug mode, showing that the "locator.isVisible()" stage have passed (which is the assert for succession) 
