# WebdriverIO TypeScript Framework

This repository provides a basic framework setup using WebdriverIO with TypeScript for end-to-end (E2E) automation testing.

## Architecture

- **actions:** Contains the action classes to execute different methods. These methods can either be common or page-specific.

- **pages:** Contains the Page Object Model (POM) for different pages of the application. Each page file includes the locators for elements on that specific page.

- **fixtures:** Contains the data files for individual pages.

- **specs:** Contains the main test scripts.

- **reports:** After test execution, logs and reports will be generated and stored in this folder.

## Prerequisites

Ensure to have the following items installed on your machine:

- Git
- Visual Studio Code
- NodeJS (20.x.x or up)
- Java (1.8.x)

## Setup Instructions

Follow these steps to set up the framework locally:

- **Clone the Repository:** Clone this repository using the following command in the terminal:

  ```bash
  git clone https://github.com/sizer-ahmad/webdriverio-ts-framework.git
  ```

- **Open the Repository:** Open the cloned repository in the Visual Studio Code.
- **Install Dependencies:** Open the terminal and run the following command:

  ```bash
  npm install
  ```

- **WebdriverIO Configuration:** Initialize the WebdriverIO configuration by running:

  ```bash
  npm init wdio .
  ```

## Start Execution:

- To execute the test scripts and generate the report, run the following command:

  ```bash
  npm start
  ```

## Reporting

Once the execution is completed, a HTML report will be generated and opened. Reports and logs can be found under the `reports` folder. These provide insights into the test execution and any encountered issues.
