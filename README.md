# ReactApp-Test-Automation-Cypress
This is a test automation framework that test the main core functionalities of react app demo website: https://react-shopping-cart-67954.firebaseapp.com/

- For easy documentation, tests are written using Cypress/TypeScript with BDD approach (Cucmumber + Gherkin)

**Automated Tests**
1) Navigate to demo website
2) Filter products by size
3) Filter products by price
4) Add products to Cart
5) Update products in Cart
6) Delete products from Cart

**Steps to run the tests**
- Clone the repository to your local machine
- Install NodeJS & NPM
- Install an IDE (Ex: Visual Studio)
- Install Cypress from command line (npm install cypress OR yarn add cypress)
- Install Cucumber to be used with Cypress tests (npm install cypress-cucumber-preprocessor-single-steps)
- Make sure all dependenices in package.json file are installed

 **COMMAND LINE**
- run the actual tests from command line -> yarn cypress run OR npx cypress run
- run the actual tests from cypress dashboard -> npx cypress open or yarn run cy:open

**Test Report**
- view test report -> cypress/reports
- view test report in json format -> cypress/cucumber-json

NOTE: When running tests from command line: Screenshots are taken on test failures only.
- To run test from command line: npx cypress run OR yarn cypress run
- To view screenshots on failed tests -> cypress/screenshots
- To view videos for all test run -> cypress/videos (you will need to run the following command: yarn cypress run)
