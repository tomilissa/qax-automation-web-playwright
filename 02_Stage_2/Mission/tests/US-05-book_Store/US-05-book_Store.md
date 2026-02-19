# US - 05 - Flujo Completo de Book Store

Como Un usuario de prueba con credenciales preexistentes (creadas vía API) 
Quiero Iniciar sesión usando credenciales enviadas por consola, buscar un libro en el catálogo, interactuar con él y acceder a mi perfil, 
Para Asegurar la funcionalidad completa de autenticación, búsqueda y navegación en el módulo Book Store.


## Login
l
### **Scenario: CP01 - Login con credenciales desde consola**
*   **Given:** el usuario ingresa al módulo de Book Store Application - Book Store de la página DemoQA
*   **When:** el usuario envia los párametros de User y Password por consola
*   **Then:** el usuario es redireccionado a la página de profile
*   **And:** el encabezado de la página muestra el Username del usuario

Comando de ejecución, una vez localizado en la carpeta: US-05-book_Store

    $env:USER_NAME="Tomilissa1"; $env:USER_PASS="Toli9190!"; npx playwright test ./login.spec.js


## Catálogo Libros

### **Scenario: CP01 - Validar la funcionalidad de búsqueda en el catálogo de libros**
*   **Given:** el usuario ingresa al módulo de Book Store Application - Login de la página DemoQA
*   **When:** el usuario realiza una búsqueda por un término especifico
*   **And:** el usuario hace click en el primer libro de la lista
*   **Then:** el usuario es redireccionado a la página especifica del libro seleccionado

## Perfil y Cierre

### **Scenario: CP01 - Validar contenido página de perfil y logout**
*   **Given:** el usuario ingresa al módulo de Book Store Application - Profile de la página DemoQA
*   **When:** el usuario hace click en el botón "Log out"
*   **Then:** el usuario es redireccionado a la página de inicio y el botón "Log in" está habilitado

