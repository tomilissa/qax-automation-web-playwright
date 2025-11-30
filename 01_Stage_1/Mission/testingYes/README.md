# Proyecto de Automatización con Playwright

Este proyecto automatiza pruebas E2E de la página TestingYES utilizando Playwright.

## Historia de usuario

Como usuario nuevo de la tienda online, 
quiero poder registrarme, buscar una prenda específica, agregarla al carrito y completar una compra 
para recibir una confirmación del pedido.


## ✅ Casos de Prueba

## registro (spec) - Registrar nuevo usuario

### **Scenario: CP01 - Abrir página de Login**
*   **Given:** el usuario abre la página principal de Testing Yes
*   **When:** hace click en el enlace "Sign In"'
*   **Then:** la pagina muestra el título "Log in to your account"

### **Scenario: CP02 - Seleccionar opción de crear nueva cuenta**
*   **Given:** el usuario abre la página de login
*   **When:** hace clic en el enlace "No account? Create one here"
*   **Then:** la pagina muestra el título "Create an account"

### **Scenario: CP03 - Completar formulario de Registro**
*   **Given:** el usuario abre la página de Register
*   **When:** completa todos los datos y hace clic en el boton Save
*   **Then:** la página debe mostrar el título "My e-commerce"
*   **And:** el botón de Sign Out está disponible


## inicioSesion (spec) - Inicio de sesión del usuario

### **Scenario: CP01 - Inicio de sesion del usuario**
*   **Given:** el usuario abre la página de Login
*   **When:** completa el email / password con datos válidos y hace clic en el boton Sign in
*   **Then:** la pagina muestra el título "My account"


## catalogoProductos (spec) - Navegación por el catálogo de productos

### **Scenario: CP01 - Realizar una busqueda utilizando el buscador**
*   **Given:** el usuario se encuentra loggeado
*   **And:** abre la página principal
*   **When:** el usuario hace una búsqueda en el buscador
*   **Then:** la pagina muestra un listado de productos filtrado de acuerdo a la opción ingresada

### **Scenario: CP02 - Realizar una busqueda de productos navegando en el menu principal**
*   **Given:** el usuario se encuentra loggeado
*   **And:** abre la página principal
*   **When:** el usuario navega utlizando el menu principal
*   **Then:** la pagina muestra un listado de productos filtrado de acuerdo a la opción seleccionada


## agregarProducto (spec) - Agregar producto al carrito

### **Scenario: CP01 - Seleccionar producto del search y ver detalle**
*   **Given:** el usuario se encuentra loggeado
*   **And:** abre la página principal
*   **And:** realiza una búsqueda
*   **When:** seleeciona un producto específico
*   **Then:** la pagina muestra el detalle del producto

### **Scenario: CP02 - Agregar producto al carrito**
*   **Given:** el usuario se encuentra loggeado
*   **And:** selecciona un producto específico
*   **When:** el usuario elige la cantidad y da click en "Add to Cart"
*   **Then:** Entonces la pagina indica que el producto fue agregado exitosamente
*   **When:** La cantidad se corresponde con la indicada


## checkout (spec) - Finalización de compra

### **Scenario: CP01 - Finalización de compra (checkout)**
*   **Given:** el usuario se encuentra loggeado
*   **And:** abre la página principal
*   **And:** agregó un producto al carrito
*   **When:** el usuario elige proceder con el checkout
*   **Then:** la página debe mostrar la confimación de compra



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