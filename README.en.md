# GlucoCare API

[Español](README.md) | [English](README.en.md)

REST API built with Node.js and Express to retrieve patient information, insulin doses and medications. Data is stored in memory.

This project is part of the DevOps Fundamentals course in the Master's in Software Architecture at Universidad de La Sabana.

## Installation

The project uses Node.js 24.

```bash
npm ci
npm start
```

## Endpoints

- `GET /`: API status.
- `GET /patients`: list of patients.
- `GET /patients/:id`: patient information.
- `GET /patients/:id/insulin-shots`: insulin doses.
- `GET /patients/:id/medications`: medications.

## Testing and code analysis

```bash
npm run lint
npm test
npm test -- --coverage
```

## Continuous integration (CI)

The pipeline is configured in `.github/workflows/ci.yml` and runs on pushes to `main` and pull requests targeting this branch.

It sets up Node.js, installs dependencies, runs ESLint and executes tests with Jest. Coverage reports are uploaded as GitHub Actions artifacts and retained for seven days.

SonarQube Cloud is used to analyze code quality and check the Quality Gate. Its configuration is in `sonar-project.properties` and requires the `SONAR_TOKEN` secret. The analysis is skipped for pull requests from forks.

CodeQL runs as a separate job to detect potential vulnerabilities.

## Continuous delivery (CD)

The Jenkins pipeline is defined in the `Jenkinsfile` and has three stages:

1. Clone repository: clones the repository.
2. Build Docker image: builds the Docker image and tags it with the commit identifier and build number.
3. Publish image: publishes the image to Google Cloud Artifact Registry.

Google Cloud credentials are managed in Jenkins.

## Authors

- Camilo Andrés Ibarra Yepes
- Diego Fernando Vidal Illera
