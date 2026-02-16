import fs from 'fs';
import path from 'path';

export function generateRandomUserName() {
  const timestamp = Date.now();
  return `qa_${timestamp}`;
}

export function generateRandomPassword() {
  const timestamp = Date.now();
  const specials = "!@#$%^&*()_+";
  // Elegimos dos caracteres especiales al azar
  const randomSpecials = specials[Math.floor(Math.random() * specials.length)] + specials[Math.floor(Math.random() * specials.length)];
  
  return `Pass_${timestamp}${randomSpecials}`;
}

export function saveUserCredentials(username, password) {
    const filePath = path.join(process.cwd(), 'users.csv');
    const date = new Date().toLocaleString();
    
    // Formato: Fecha, Usuario, Password
    const line = `${date}, ${username}, ${password}\n`;

    try {
        // 'a' es por "append", si el archivo no existe, lo crea automáticamente
        fs.appendFileSync(filePath, line, 'utf8');
        console.log(`✅ Usuario ${username} guardado en historial.`);
    } catch (err) {
        console.error('❌ Error guardando el usuario:', err);
    }
}
