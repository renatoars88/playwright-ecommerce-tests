# Playwright E2E Testing Framework 🚀

This repository contains an **E2E testing framework** using **Playwright** with **Page Object Model (POM)**, environment variables, and a **GitHub Actions CI/CD pipeline**.  
The project demonstrates testing workflows for a sample e-commerce site: [https://www.saucedemo.com](https://www.saucedemo.com).

---

## 🧩 Features

- Page Object Model (POM) structure for scalable tests.
- Custom fixtures to avoid repeating code.
- Environment variables for sensitive data.
- GitHub Actions pipeline to run tests on push, pull request, or manually.
- HTML reports and trace/screenshots/videos on failures.
- Tests included:
  - Login test
  - Add to cart test

---

## 🔧 Setup

1. **Clone the repository**:

```bash
git clone https://github.com/renatoars88/playwright-ecommerce-tests.git
cd playwright-ecommerce-tests
```
2. **Install dependencies:**:

```
npm install
npx playwright install
```
3. **Run tests**:

```
npx playwright test
```
## 🧪 GitHub Actions Pipeline

The pipeline is configured in `.github/workflows/playwright.yml` and runs on:

- Push to the main branch
- Pull requests targeting the main branch
- Manual workflow dispatch

The pipeline steps include:

1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Install Playwright browsers
5. Run tests
6. Upload HTML report artifact

You can view the pipeline status and run history directly in the GitHub repository under the **Actions** tab.

## 💡 Contact

Created by Renato Silva.  
Feel free to reach out if you have any questions or would like a demo of the pipeline.


