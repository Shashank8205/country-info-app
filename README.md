# 🌍 Country Info App

A simple web application that lets users search for any country and view detailed information like flag, capital, population, currency, languages, and timezone.

Built as a **DevOps subject project** to demonstrate a complete **CI/CD pipeline** using GitHub Actions and Netlify.

---

## 🔗 Live Demo

👉 [View Live App](https://jocular-platypus-171624.netlify.app/) 

---

## 📸 Screenshot

> Search for any country and instantly see its details!

---

## ✨ Features

- 🔍 Search any country by name
- 🏳️ Displays country flag
- 🏛️ Shows capital city
- 👥 Population count
- 🌍 Region and subregion
- 💰 Currency name and symbol
- 🗣️ Languages spoken
- 🕐 Timezone information
- ⌨️ Press Enter key to search

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML | Structure of the app |
| CSS | Styling and layout |
| JavaScript | App logic and API calls |
| RestCountries API | Country data (free, no key needed) |
| Jest | Unit testing |
| GitHub Actions | CI — runs tests automatically |
| Netlify | CD — deploys the app automatically |

---

## 📁 Project Structure

```
country-info-app/
│
├── index.html              # Main HTML page (UI)
├── style.css               # Styling
├── app.js                  # JavaScript logic
├── app.test.js             # Unit tests (Jest)
├── package.json            # Node.js config
├── README.md               # Project documentation
└── .github/
    └── workflows/
        └── cicd.yml        # GitHub Actions CI/CD pipeline
```

---

## 🔄 CI/CD Pipeline

This project uses a fully automated CI/CD pipeline:

```
Developer pushes code to GitHub
            ↓
GitHub Actions is triggered automatically
            ↓
Installs dependencies (npm install)
            ↓
Runs all unit tests (npm test)
            ↓
If tests pass → Netlify auto-deploys live ✅
If tests fail → Deployment is stopped ❌
```

### Pipeline File: `.github/workflows/cicd.yml`

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

---

## 🧪 Running Tests

```bash
# Install dependencies
npm install

# Run tests
npm test
```

### Test Results:
```
PASS ./app.test.js
  ✓ getCurrency returns currency name and symbol
  ✓ getCurrency returns N/A when undefined
  ✓ getLanguages returns language list
  ✓ getLanguages returns N/A when undefined

Tests: 4 passed, 4 total ✅
```

---

## 🚀 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/country-info-app.git
```

2. Open the folder:
```bash
cd country-info-app
```

3. Open `index.html` in your browser — that's it! No server needed.

---

## 🌐 API Used

This app uses the **RestCountries API** — completely free, no API key required.

- API Endpoint: `https://restcountries.com/v3.1/name/{country}`
- Documentation: [restcountries.com](https://restcountries.com)

---

## 📦 Deployment

This app is deployed on **Netlify** with automatic deployments:

- Every push to the `main` branch triggers a new deploy
- Netlify detects changes and rebuilds the site automatically
- Live URL is updated within 1-2 minutes of pushing code

---

## 👨‍💻 Author

**Shashank**
- GitHub: [@Shashank8205](https://github.com/Shashank8205)

---

## 📚 Project Purpose

This project was created as part of a **DevOps subject assignment** to demonstrate:

1. Version control with **Git & GitHub**
2. Automated testing with **Jest**
3. Continuous Integration with **GitHub Actions**
4. Continuous Deployment with **Netlify**


