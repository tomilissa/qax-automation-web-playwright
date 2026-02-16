import { defineConfig } from '@playwright/test';

/**
 * 📝 Configuración de Playwright
 * 
 * Este archivo configura cómo se ejecutarán los tests
 * 
 * Conceptos clave:
 * - testDir: Dónde están los tests
 * - timeout: Tiempo máximo por test
 * - reporter: Formato de resultados
 */
const ENV = process.env.ENV || 'qa';
const environments = {
  qa: 'https://parabank.parasoft.com/parabank/qa',
  prod: 'https://parabank.parasoft.com/parabank/'
};

// ✅ VALIDACIÓN DEL AMBIENTE
if (!environments[ENV]) {
  throw new Error(`❌ Ambiente "${ENV}" no soportado. Usa: ${Object.keys(environments).join(', ')}`);
}
console.log(`🚀 Ejecutando tests en el ambiente: ${ENV} (${environments[ENV]})`);

export default defineConfig({
  // 📂 Carpeta donde están los tests
  testDir: './tests',
  // ⏱️ Timeout por test (30 segundos)
  timeout: 30 * 1000,
  reporter: 'html',
  use: {
    // 🌐 URL base del sitio a probar
    baseURL: environments[ENV],
    
    // 📸 Captura de pantalla en fallos
    screenshot: 'only-on-failure',
    
    // 🎬 Video solo en fallos (ahorra espacio)
    video: 'retain-on-failure',
    
    // 📊 Trace solo en fallo (para debugging)
    trace: 'on-first-retry',
    
  }

  
});

