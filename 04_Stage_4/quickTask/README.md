# 🧪 QAXpert – Playwright Automation Project - Quick Task Stage 3

Este proyecto contiene pruebas automatizadas con Playwright usando JavaScript y el Playwright Test Runner, siguiendo buenas prácticas como estructura por tests y reutilización de utilidades.

----

## 📦 Package – ¿para qué sirve?

**El archivo `package.json` define:**
- Dependencias del proyecto (Playwright)
- Scripts para ejecutar comandos comunes
- Metadatos básicos del proyecto

Playwright necesita dos pasos:
1.	Instalar la librería (npm)
2.	Instalar los navegadores (Playwright)

----

## ▶️ Scripts disponibles

```json
"scripts": {
  "test": "playwright test",
  "install:browsers": "playwright install",
  "test:ui": "playwright test --ui",
  "test:headed": "playwright test --headed"
}
```

### 📖 ¿Qué hace cada script?

## ▶️ Scripts disponibles

| Script | Comando | ¿Para qué sirve? |
|------|--------|------------------|
| `test` | `npm test` | Ejecuta todos los tests en modo headless |
| `test:headed` | `npm run test:headed` | Ejecuta los tests con navegador visible |
| `test:ui` | `npm run test:ui` | Abre el Test Runner UI de Playwright |
| `test:debug` | `npm run test:debug` | Ejecuta los tests en modo debug paso a paso |
| `test:trace` | `npm run test:trace` | Ejecuta tests grabando trace de la ejecución |
| `test:report` | `npm run test:report` | Genera el reporte HTML |
| `show:report` | `npm run show:report` | Abre el último reporte HTML |
| `show:trace` | `npm run show:trace` | Abre el archivo trace.zip |
| `install:browsers` | `npm run install:browsers` | Descarga los navegadores de Playwright |
----

## 🚀 Cómo usar el proyecto (pasos básicos)

1️⃣ Instalar dependencias
```bash
npm install
```
2️⃣ Instalar navegadores (solo la primera vez)
```bash
npm run install:browsers
```
3️⃣ Ejecutar los tests
```bash
npm test
```


----

## 📊 Reportes y Debugging

### 📄 Reporte HTML
Genera y visualiza el reporte de ejecución:

```bash
npm run show:report
```
