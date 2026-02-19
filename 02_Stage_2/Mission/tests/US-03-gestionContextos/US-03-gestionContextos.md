# US - 03 - Gestion de Contextos

Como un usuario de prueba avanzado, 
Quiero Poder iniciar, interactuar y cerrar correctamente todos los elementos que cambian el foco del driver (ventanas, pestañas, alertas, iFrames y modales), 
Para Asegurar que el sistema maneja la transición de contexto y que la información se intercambia o persiste correctamente en la página principal.

## ✅ Casos de Prueba

## BrowserWindow

### **Scenario: CP01 - Validar la apertura de una nueva pestaña**
*   **Given:** el usuario ingresa al módulo de Alert Frame & Window - Browser Window de la página DemoQA
*   **When:** el usuario hace click en el botón "New Tab"
*   **Then:** se abre una nueva pestaña con la URL y el contenido esperados

### **Scenario: CP02 - Validar la apertura de una nueva ventana**
*   **Given:** el usuario ingresa al módulo de Alert Frame & Window - Browser Window de la página DemoQA
*   **When:** el usuario hace click en el botón "New Window"
*   **Then:** se abre una nueva ventana con la URL y el contenido esperados

### **Scenario: CP03 - Validar la apertura de una nueva ventana con mensaje incluido**
*   **Given:** el usuario ingresa al módulo de Alert Frame & Window - Browser Window de la página DemoQA
*   **When:** el usuario hace click en el botón "New Window Message"
*   **Then:** se abre una nueva ventana con la URL y el mensaje esperados


## Alerts

### **Scenario: CP01 - Validar la apertura de una alerta simple**
*   **Given:** el usuario ingresa al módulo de Alert Frame & Window - Alerts de la página DemoQA
*   **When:** el usuario hace click en el botón correspondiente al primer alert
*   **Then:** se abre una alerta del navegador con el mensaje esperado

### **Scenario: CP02 - Validar la apertura de una alerta de prompt**
*   **Given:** el usuario ingresa al módulo de Alert Frame & Window - Alerts de la página DemoQA
*   **When:** el usuario hace click en el botón correspondiente al último alert
*   **And:** el usuario completa el prompt en el alert y hace click en "Aceptar"
*   **Then:** la alerta se cierra


## Frames

### **Scenario: CP01 - Validar contenido en iframe simple**
*   **Given:** el usuario ingresa al módulo de Alert Frame & Window - Frames de la página DemoQA
*   **When:** el usuario hace foco en el iframe
*   **Then:** el iframe tiene el contenido esperado

### **Scenario: CP01 - Validar contenido en iframes anidados**
*   **Given:** el usuario ingresa al módulo de Alert Frame & Window - Nested Frames de la página DemoQA
*   **When:** el usuario hace foco los iframes
*   **Then:** el usuario puede validar el contenido de ambos iframes


## modalDialogs

### **Scenario: CP01 - Validar contenido en iframe simple**
*   **Given:** el usuario ingresa al módulo de Alert Frame & Window - Modal Dialogs de la página DemoQA
*   **When:** el usuario hace click en el botón "Small modal"
*   **Then:** el modal muestra la información esperada









