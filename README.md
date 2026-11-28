# GlucoCare API

[Español](README.md) | [English](README.en.md)

API REST desarrollada con Node.js y Express para consultar información de pacientes, dosis de insulina y medicamentos. Los datos se almacenan en memoria.

Este proyecto se desarrolla para la asignatura Fundamentos DevOps de la Maestría en Arquitectura de Software de la Universidad de La Sabana.

## Instalación

Se utiliza Node.js 24.

```bash
npm ci
npm start
```

## Endpoints

- `GET /`: estado de la API.
- `GET /patients`: listado de pacientes.
- `GET /patients/:id`: información de un paciente.
- `GET /patients/:id/insulin-shots`: dosis de insulina.
- `GET /patients/:id/medications`: medicamentos.

## Pruebas y análisis de código

```bash
npm run lint
npm test
npm test -- --coverage
```

## Integración continua (CI)

El pipeline está configurado en `.github/workflows/ci.yml` y se ejecuta con los push a `main` y los pull requests hacia esta rama.

Se instala Node.js y las dependencias, se ejecuta ESLint y se realizan las pruebas con Jest. Los reportes de cobertura se publican como artefactos de GitHub Actions y se conservan durante siete días.

También se utiliza SonarQube Cloud para analizar la calidad del código y validar el Quality Gate. Su configuración se encuentra en `sonar-project.properties` y requiere el secreto `SONAR_TOKEN`. El análisis se omite en pull requests provenientes de forks.

CodeQL se ejecuta en un job independiente para detectar posibles vulnerabilidades.

## Entrega continua (CD)

El pipeline de Jenkins está definido en el archivo `Jenkinsfile` y cuenta con tres etapas:

1. Clone repository: clona el repositorio.
2. Build Docker image: construye la imagen Docker y la etiqueta con el identificador del commit y el número de build.
3. Publish image: publica la imagen en Google Cloud Artifact Registry.

Las credenciales de Google Cloud se gestionan desde Jenkins.

## Autores

- Camilo Andrés Ibarra Yepes
- Diego Fernando Vidal Illera
