# US - 04 - Interacciones Avanzadas

Como: Un usuario de prueba,
Quiero: Manipular los elementos de la interfaz a través de arrastre, reordenamiento y redimensión, y registrar el éxito de cada interacción,
Para: Asegurar que las funcionalidades dinámicas de la página responden correctamente a las acciones precisas del ratón (Actions).

## ✅ Casos de Prueba

## Sortable

### **Scenario: CP01 - Verificar el reordenamiento en una lista vertical**
*   **Given:** el usuario ingresa al módulo de Interactions - Sortable de la página DemoQA
*   **When:** el usuario arrastra el Item 4 a la posición del Item 1
*   **Then:** la lista ha reordenado los elementos mostrando al Item 4 como el primer elemento

### **Scenario: CP02 - Verificar el reordenamiento Horizontal en un grid**
*   **Given:** el usuario ingresa al módulo de Interactions - Sortable (Grid Tab) de la página DemoQA
*   **When:** el usuario arrastra un elemento a una posición no adyacente (ej. mover Item 1 al lugar de Item 9)
*   **Then:** el elemento ha cambiado de posición dentro de la cuadrícula


## Selectable

### **Scenario: CP01 - Seleccion individual de elementos**
*   **Given:** el usuario ingresa al módulo de Interactions - Selectable de la página DemoQA
*   **When:** el usuario hace click en un elemento de la lista
*   **Then:** el fondo del elemento seleccionado cambia de color

### **Scenario: CP02 - Seleccion multiple de elementos en grid**
*   **Given:** el usuario ingresa al módulo de Interactions - Selectable de la página DemoQA
*   **When:** el usuario selecciona multiples elementos utilizando la tecla 'Ctrl'
*   **Then:** el fondo de los elementos seleccionados cambia de color


## Resizable

### **Scenario: CP01 - Redimensión al Tamaño Máximo**
*   **Given:** el usuario ingresa al módulo de Interactions - Resizable de la página DemoQA
*   **When:** el usuario hace el resize del cotenedor al máximo permitido
*   **Then:** las dimensiones del cuadro contenedor (ancho y alto) han aumentado según lo permitido por el viewport

### **Scenario: CP02 - Redimensión superando el Tamaño Máximo**
*   **Given:** el usuario ingresa al módulo de Interactions - Resizable de la página DemoQA
*   **When:** el usuario hace el resize del cotenedor superando el máximo permitido
*   **Then:** las dimensiones del cuadro contenedor (ancho y alto) han aumentado según lo permitido por el viewport


## Droppable

### **Scenario: CP01 - Arrastre Básico**
*   **Given:** el usuario ingresa al módulo de Interactions - Droppable de la página DemoQA
*   **When:** el usuario arrastra el elemento a la posición destino
*   **Then:** el elemento persiste en la posición destino y muestra el mensaje 'Dropped'

### **Scenario: CP02 - Arrastre Restrictivo (Prevent Propogation)**
*   **Given:** el usuario ingresa al módulo de Interactions - Droppable de la página DemoQA
*   **When:** el usuario arrastra el elemento a la posición destino
*   **Then:** el elemento persiste en la posición destino y muestra el mensaje 'Dropped'
*   **And:** el segundo dropbox no sufrió alteraciones


# Dragabble

### **Scenario: CP01 - Arrastre Libre**
*   **Given:** el usuario ingresa al módulo de Interactions - Dragabble de la página DemoQA
*   **When:** el usuario arrastra aleatoriamente un elemento
*   **Then:** la posición del elemento se modificó

### **Scenario: CP02 - Arrastre Restringido (Axis)**
*   **Given:** el usuario ingresa al módulo de Interactions - Dragabble de la página DemoQA
*   **When:** el usuario arrastra aleatoriamente un elemento
*   **Then:** solo la coordenada X ha cambiado, la coordenada Y permanece inalterada (confirmando la restricción del eje)