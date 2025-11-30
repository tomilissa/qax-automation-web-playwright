# Proyecto de Automatización con Playwright

Este proyecto automatiza pruebas E2E de la página herokuapp utilizando Playwright.

## Historia de usuario

Como usuario que desea agendar una cita médica, 
quiero hacer clic en “Make Appointment” desde la página principal 
para ser dirigido al formulario de inicio de sesión y continuar con mi reserva.

## Criterios de Aceptación

- La página principal https://katalon-demo-cura.herokuapp.com/ carga correctamente.
- El botón/enlace “Make Appointment” es visible e interactuable.
- Al hacer clic, el sistema redirige a la pantalla de login.
- En la pantalla de login se muestran campo usuario #txt-username, campo contraseña #txt-password y botón iniciar sesión #btn-login.
- La URL contiene profile.php#login
- El encabezado “Login” es visible.


## 🚀 Instalación
    ```bash
    npm install -D @playwright/test
    npx playwright install
    ```

## ▶️ Ejecutar pruebas
    ```bash
    npx playwright test
    ```

## 🧪 Ver reporte
    ```bash
    npx playwright show-report
      ```

