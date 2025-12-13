## ✅ Casos de Prueba Challenge 1

### **Scenario: CP01 - Realizar un registro completo en el formulario**
*   **Given:** el usuario navega a la página principal de registro utilizando un email válido.
*   **When:** el usuario completa todos los campos obligatorios del formulario
*   **And:** hace click en el botón "Submit"
*   **Then:** la página muestra la confirmación de registro

### **Scenario: CP02 - Verificar validación cuando el campo email está vacío**
*   **Given:** el usuario navega a la página principal de registro utilizando un email válido.
*   **When:** el usuario completa todos los campos obligatorios del formulario a excepción del campo email
*   **And:** hace click en el botón "Submit"
*   **Then:** el formulario no debe enviar la información
*   **And:** el campo "Email" debe mostrar el mensaje de validación nativo del navegador indicando que el campo debe ser completado.

### **Scenario: CP03 - Ingresar numero de teléfono con formato inválido**
*   **Given:** el usuario navega a la página principal de registro utilizando un email válido.
*   **When:** el usuario completa el campo telefono con un formato inválido
*   **And:** el usuario completa el resto de los campos obligatorios
*   **And:** hace click en el botón "Submit"
*   **Then:** el formulario no debe enviar la información
*   **And:** el campo "Telefono" debe mostrar el mensaje de validación nativo del navegador indicando que el formato de telefono es inválido.

### **Scenario: CP04 - Verificar validación cuando el campo nombre está vacío**
*   **Given:** el usuario navega a la página principal de registro utilizando un email válido.
*   **When:** el usuario completa todos los campos obligatorios del formulario a excepción del campo nombre
*   **And:** hace click en el botón "Submit"
*   **Then:** el formulario no debe enviar la información
*   **And:** el campo "nombre" debe mostrar el mensaje de validación nativo del navegador indicando que el campo debe ser completado.


