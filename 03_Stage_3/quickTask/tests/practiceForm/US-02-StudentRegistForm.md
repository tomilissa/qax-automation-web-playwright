# US - 02 - Student Registration Form

Como Un usuario de prueba, 
Quiero Rellenar y enviar todos los campos obligatorios del formulario de registro de estudiantes, incluyendo entradas de texto, selección de género, fecha, checkboxes, carga de archivos y dropdowns dependientes, 
Para Asegurar que la aplicación procesa y muestra correctamente la información compleja en la tabla de confirmación final.


## ✅ Casos de Prueba

## 01 - Registro de Estudiantes

### **Scenario: CP01 - Realizar el registro exitoso de un estudiante**
*   **Given:** el usuario ingresa al módulo de Forms de la página DemoQA
*   **When:** el usuario completa todos los campos habilitados del formulario
*   **And:** hace click en el botón "Submit"
*   **Then:** el campo Output contiene exactamente la misma información ingresada previamente


### **Scenario: CP02 - Enviar el formulario vacío**
*   **Given:** el usuario ingresa al módulo de Forms de la página DemoQA
*   **When:** el usuario deja todos los campos vacíos
*   **And:** hace click en el botón "Submit"
*   **Then:** El formulario no se envía y los campos obligatorios están resaltados en rojo