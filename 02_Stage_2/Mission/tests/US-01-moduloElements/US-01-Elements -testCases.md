
# US - 01 - Modulo - Elements

Como un usuario de prueba, 
Quiero Interactuar y validar correctamente cada subsección del módulo "Elements" (TextBox, CheckBox, RadioButton, WebTables, Buttons, Links, Broken Links, Upload/Download, Dynamic Properties),
Para Asegurar que todos los elementos de entrada, selección, formularios, navegación y acciones dinámicas del sitio funcionan según lo esperado


## ✅ Casos de Prueba

## 01 - TextBox

### **Scenario: CP01 - Completar exitosamente el formulario**
*   **Given:** el usuario ingresa al módulo de Elements - Textbox de la página DemoQA
*   **When:** el usuario completa todos los campos habilitados del formulario
*   **And:** hace click en el botón "Submit"
*   **Then:** el campo Output contiene exactamente la misma información ingresada previamente

### **Scenario: CP02 - Validar formulario con email incorrecto**
*   **Given:** el usuario ingresa al módulo de Elements - Textbox de la página DemoQA
*   **When:** el usuario carga un email incorrecto
*   **And:** hace click en el botón "Submit"
*   **Then:** el campo email se marca en rojo indicando que existe un error


## 02 - TextBox

### **Scenario: CP01 - Selección de Nivel Superior**
*   **Given:** el usuario ingresa al módulo de Elements - Checkbox de la página DemoQA
*   **When:** el usuario hace click en el checkBox 'Home'
*   **Then:** se muestra un mensaje indica que todos los subelementos se seleccionaron automaticamente

### **Scenario: CP02 - Selección parcial**
*   **Given:** el usuario ingresa al módulo de Elements - Checkbox de la página DemoQA
*   **When:** el usuario hace click en el checkbox de 'Desktop' y 'Downloads'
*   **Then:** el checkbox de 'Home' muestra el estado de selección parcial (guion o cuadro gris)


## 03 - Radio Buttons

### **Scenario: CP01 - Seleccionar opción YES**
*   **Given:** el usuario ingresa al módulo de Elements - Radio Button de la página DemoQA
*   **When:** el usuario hace click en el radio button 'YES'
*   **Then:** se muestra un mensaje indica que la opción YES fue seleccionada

### **Scenario: CP02 - Seleccionar opción IMPRESSIVE**
*   **Given:** el usuario ingresa al módulo de Elements - Radio Button de la página DemoQA
*   **When:** el usuario hace click en el radio button 'IMPRESSIVE'
*   **Then:** se muestra un mensaje indica que la opción IMPRESSIVE fue seleccionada

### **Scenario: CP03 - Verificar que la opción NO esté deshabilitada**
*   **Given:** el usuario ingresa al módulo de Elements - Radio Button de la página DemoQA
*   **When:** el usuario intenta hacer click en el radio button 'NO'
*   **Then:** la opción 'No' está deshabilitada y no se puede seleccionar.


## 04 - Web Tables

### **Scenario: CP01 - Añadir Nuevo Registro**
*   **Given:** el usuario ingresa al módulo de Elements - Web Tables de la página DemoQA
*   **When:** el usuario hace click en el botón 'Add'
*   **And:** el usuario completa todos los campos
*   **And:** el usuario hace click en el botón 'Submit'
*   **Then:** el nuevo registro es incorporado a la tabla

### **Scenario: CP02 - Editar primer registro de la tabla**
*   **Given:** el usuario ingresa al módulo de Elements - Web Tables de la página DemoQA
*   **When:** el usuario hace click en el botón 'Edit' correspondiente al primer registro de la tabla
*   **And:** el usuario actualiza el campo email
*   **And:** el usuario hace click en el botón 'Submit'
*   **Then:** el campo Email del primer registro de la tabla contiene el valor actualizado

### **Scenario: CP03 - Eliminar ultimo registro de la tabla**
*   **Given:** el usuario ingresa al módulo de Elements - Web Tables de la página DemoQA
*   **When:** el usuario hace click en el botón 'Delete' correspondiente al ultimo registro de la tabla
*   **Then:** el ultimo registro no aparece en la tabla


## 05 - Web Tables

### **Scenario: CP01 - Verificar el comportamento del doble click**
*   **Given:** el usuario ingresa al módulo de Elements - Buttons de la página DemoQA
*   **When:** el usuario hace doble click en el botón 'Double Click Me'
*   **Then:** Se muestra un mensaje indicando que el usuario hizo doble click sobre el botón

### **Scenario: CP02 - Verificar el comportamento del click derecho**
*   **Given:** el usuario ingresa al módulo de Elements - Buttons de la página DemoQA
*   **When:** el usuario hace click derecho en el botón 'Right Click Me'
*   **Then:** Se muestra un mensaje indicando que el usuario hizo click derecho sobre el botón

### **Scenario: CP03 - Verificar el comportamento del click simple**
*   **Given:** el usuario ingresa al módulo de Elements - Buttons de la página DemoQA
*   **When:** el usuario hace click en el botón 'Click Me'
*   **Then:** Se muestra un mensaje indicando que el usuario hizo click sobre el botón


## 06 - Links

### **Scenario: CP01 - Validación de links que abren en una nueva pestaña**
*   **Given:** el usuario ingresa al módulo de Elements - Links de la página DemoQA
*   **When:** el usuario hace doble click en el link 'Home'
*   **Then:** se abre una nueva pestaña con la URL correspondiente

### **Scenario: CP02 - Validación de links de API**
*   **Given:** el usuario ingresa al módulo de Elements - Links de la página DemoQA
*   **When:** el usuario hace doble click en el link 'Created'
*   **Then:** se obtiene la respuesta de la API


## 07 - Broken Links

### **Scenario: CP01 - Validar que la Valid image carga correctamente**
*   **Given:** el usuario ingresa al módulo de Elements - Broken Links - Images de la página DemoQA
*   **When:** el usuario scrollea hasta la sección de Valid image
*   **Then:** la imagen ToolsQA carga correctamente

### **Scenario: CP02 - Validar que la Broken image no carga**
*   **Given:** el usuario ingresa al módulo de Elements - Broken Links - Images de la página DemoQA
*   **When:** el usuario scrollea hasta la sección de Broken image
*   **Then:** la imagen no carga correctamente

### **Scenario: CP03 - Verificar que el valid link redirecciona a una página válida**
*   **Given:** el usuario ingresa al módulo de Elements - Broken Links - Images de la página DemoQA
*   **When:** el usuario hace click en 'Click Here for Valid Link'
*   **Then:** el link redirecciona a una página válida

### **Scenario: CP04 - Verificar que el broken link devuelve un error 500**
*   **Given:** el usuario ingresa al módulo de Elements - Broken Links - Images de la página DemoQA
*   **When:** el usuario hace click en 'Click Here for Broken Link'
*   **Then:** el status de la página es 500


## 08 - Upload and Download

### **Scenario: CP01 - Validar que la carga de archivos funciona correctamente**
*   **Given:** el usuario ingresa al módulo de Elements - Upload and Download de la página DemoQA
*   **When:** el usuario sube un nuevo archivo
*   **Then:** el archivo se carga correctamente

### **Scenario: CP02 - Validar que la descarga de archivos funciona correctamente**
*   **Given:** el usuario ingresa al módulo de Elements - Upload and Download de la página DemoQA
*   **When:** el usuario hace click en el botón 'Download'
*   **Then:** el archivo 'sampleFile.jpeg' se descarga correctamente

## 09 - Dynamic Properties

### **Scenario: CP01 - Verificar que el primer botón se habilite luego de la espera**
*   **Given:** el usuario ingresa al módulo de Elements - Dynamic Properties de la página DemoQA
*   **When:** el usuario scrollea hasta el primer botón y el estado original es deshabilitado 
*   **Then:** el primer botón habilita luego de 5 segundos

### **Scenario: CP02 - Verificar que el color del texto del botón cambia luego de la espera**
*   **Given:** el usuario ingresa al módulo de Elements - Dynamic Properties de la página DemoQA
*   **When:** el usuario scrollea hasta el segundo botón y color del texto originalmente es blanco
*   **Then:** el color del texto del segundo botón cambia a rojo luego de 5 segundos

### **Scenario: CP03 - Verificar que el botón sea visible luego de la espera**
*   **Given:** el usuario ingresa al módulo de Elements - Dynamic Properties de la página DemoQA
*   **When:** el usuario scrollea hasta el tercer botón y el mismo se encuetra oculto
*   **Then:** el tercer botón es visible luego de 5 segundos





