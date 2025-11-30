## 🚀 Test Cases Katalon page

### TC01: Verificar el título de la página Login

Given que el usuario abre la página principal "https://katalon-demo-cura.herokuapp.com/"
When hace clic en el enlace "Make Appointment"
Then la URL de la página contiene 'profile.php#login'
And el encabezado de la página es "Login"
And la pantalla de Login contiene los campos "Usuario", "Contraseña" y el botón de "Iniciar Sesión".
