## ✅ Casos de Prueba Accessories.spec

### **Scenario: CP01 - Navegar y filtrar productos**
*   **Given:** el usuario selecciona "Accessories > Home Accessories" del menu principal
*   **When:** el usuario filtra por color de producto
*   **Then:** la página muestra solo productos que cumplan el filtro aplicado.

### **Scenario: CP02 - Verificar que los productos sin stock no se pueden añadir al carrito**
*   **Given:** el usuario selecciona "Accessories > Home Accessories" del menu principal
*   **When:** el usuario filtra por tipo de producto
*   **And:** el usuario hace click en botón "Quick View" de un producto sin stock
*   **Then:** la página muestra el mensaje de error indicando que no hay stock
*   **And:** el botón "Add to Cart" se encuentra deshabilitado.

### **Scenario: CP03 - Agregar productos con stock al carrito**
*   **Given:** el usuario selecciona "Accessories > Home Accessories" del menu principal
*   **When:** el usuario filtra por tipo de producto
*   **And:** el usuario hace click en botón "Quick View" de un producto con stock
*   **And:** el usuario elige la cantidad y hace click en "Add to Cart"
*   **Then:** el producto se agrega correctamente al carrito.




## ✅ Casos de Prueba Login.spec

### **Scenario: CP01 - Crear nuevo usuario & Sign In en el e-commerce**
*   **Given:** el usuario hace click en los botones de "Sign In" y luego "Create an Account"
*   **When:** el usuario completa todos los campos obligatorios del formulario
*   **And:** hace click en el botón "Save"
*   **Then:** la página muestra la confirmación de creación del nuevo usuario
*   **And:** el usuario se logea correctamente con las credeciales válidas.

### **Scenario: CP02 - Validar mensaje de error de login con credenciales inválidas**
*   **Given:** el usuario hace click en el botón de "Sign In"
*   **When:** el usuario ingresa credenciales inválidas
*   **And:** hace click en el botón "Sing In"
*   **Then:** la página muestra el mensaje de error indicando que las credenciales son inválidas.







