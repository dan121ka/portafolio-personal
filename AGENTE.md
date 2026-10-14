# AGENTE.md - Portafolio Personal Multimedia (Evaluación Continua H3)

## 1. Datos del Estudiante
- **Nombre Completo:** Alan Daniel Canaviri Conde
- **Carrera:** Ingeniería de Sistemas
- **Universidad:** Universidad Privada Franz Tamayo (UNIFRANZ)
- **Ciudad / País:** Cochabamba, Bolivia
- **Teléfono / WhatsApp:** +591 69433231
- **Correo Electrónico:** somoseldia27@gmail.com

---

## 2. Entregables de la Evaluación Continua H3

| # | Entregable | Estado | Ubicación en el Proyecto |
|---|------------|--------|--------------------------|
| **1** | **Agente md** | Completado | Archivo `AGENTE.md` en la raíz del proyecto con la especificación técnica, prompts y arquitectura. |
| **2** | **Template de referencia iPortfolio** | Completado | Referencia arquitectónica basada en [iPortfolio](https://builder.bootstrapmade.com/demo/iPortfolio/). Template base guardado en `template-referencia.html`. |
| **3** | **Imágenes personales** | Completado | Fotografía real del estudiante Alan Daniel Canaviri Conde integrada en `public/assets/img/my-profile-img.jpg` y `public/assets/img/alan.png`. |
| **4** | **Subir todo el proyecto al portal** | Listo | Estructura completa del proyecto Angular lista para compilar y empaquetar para el portal universitario. |
| **Extra** | **Desplegar el proyecto en GitHub** | Configurado | Repositorio Git local inicializado, listo para sincronizar con GitHub y desplegar vía GitHub Pages. |

---

## 3. Arquitectura y Tecnologías del Proyecto

- **Framework:** Angular 22 (Standalone Components, Signals/Properties, Control Flow `@if` / `@for`)
- **Estilos:** Bootstrap 5.3.3, Bootstrap Icons 1.11.3, CSS3 personalizado (`src/app/app.css` y `public/assets/css/main.css`)
- **Multimedia e Interactividad:**
  - Efecto máquina de escribir reactivo en tiempo real (TypeScript puro).
  - Filtrado dinámico de portafolio por categorías (`Todos`, `Web`, `Mobile/IoT`, `Redes`).
  - Ventana modal interactiva de detalles de proyectos con soporte para cierre por backdrop y teclado.
  - Formulario de contacto interactivo con control de estados (`idle`, `loading`, `success`, `error`).
  - Navegación suave (*smooth scrolling*) y detección de sección activa mediante `@HostListener('window:scroll')`.
- **Estructura de Assets:**
  - `public/assets/css/`: Hojas de estilo del template.
  - `public/assets/img/`: Imágenes del portafolio e imagen de perfil personal del estudiante.
  - `public/assets/vendor/`: Librerías de soporte (Bootstrap, Bootstrap Icons, AOS, GLightbox, Swiper).

---

## 4. Secciones Implementadas

1. **Header / Sidebar (`#header`):**
   - Fotografía personal de Alan Daniel Canaviri Conde con recorte circular proporcional.
   - Nombre y enlaces a redes sociales (GitHub, LinkedIn, Instagram, Facebook, X).
   - Menú de navegación interactivo con selector de secciones y responsive toggle para dispositivos móviles.

2. **Hero Banner (`#hero`):**
   - Imagen de fondo panorámica de ingeniería.
   - Título principal y animación de roles: *"Estudiante de Ingeniería de Sistemas"*, *"Desarrollador Web & Móvil"*, *"Entusiasta de IoT & Robótica"*, *"Especialista en Redes Cisco"*.

3. **Sobre Mí (`#about`):**
   - Perfil profesional detallado de Alan Daniel Canaviri Conde.
   - Datos biográficos, teléfono de contacto directo (+591 69433231), correo electrónico y universidad.

4. **Estadísticas Técnicas (`#stats`):**
   - Indicadores numéricos de proyectos de ingeniería, horas de laboratorio y tecnologías dominadas.

5. **Habilidades (`#skills`):**
   - Barras de progreso animadas para stacks tecnológicos: Angular/HTML/CSS, Flutter/Dart/BLE, Python/Flask/ML, ESP32/IoT, SQLite/Firebase, Redes Cisco.

6. **Currículum (`#resume`):**
   - Resumen académico en UNIFRANZ.
   - Proyectos de investigación aplicada, software web distribuido y topologías de red en Cisco Packet Tracer.

7. **Portafolio Multimedia (`#portfolio`):**
   - Galería de 6 proyectos de ingeniería con filtrado reactivo por categorías y apertura de modal con descripción y fichas técnicas.

8. **Servicios & Especialidades (`#services`):**
   - Áreas de desarrollo fullstack, desarrollo móvil multiplataforma, Internet de las Cosas (IoT), biometría, telecomunicaciones y bases de datos cloud.

9. **Testimonios (`#testimonials`):**
   - Recomendaciones de docentes y colegas de proyectos de ingeniería de sistemas.

10. **Contacto (`#contact`):**
    - Tarjeta de información con ubicación (Cochabamba, Bolivia), teléfono, correo y mapa interactivo.
    - Formulario reactivo de envío de mensajes.

11. **Footer (`#footer`):**
    - Derechos de autor atribuidos a Alan Daniel Canaviri Conde e identificación de la carrera.

---

## 5. Instrucciones de Ejecución Local

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo local:
   ```bash
   npm start
   ```
   O bien:
   ```bash
   ng serve
   ```

3. Abrir en el navegador:
   ```
   http://localhost:4200/
   ```

4. Ejecutar pruebas unitarias:
   ```bash
   npm test -- --watch=false
   ```

5. Generar la compilación de producción:
   ```bash
   npm run build
   ```
   Los archivos compilados y optimizados se generarán en la carpeta `dist/portafolio-personal/`.

---

## 6. Instrucciones para Subir y Desplegar en GitHub

### Opción A: Desde Visual Studio Code (Recomendada)
Dado que Visual Studio Code ya está conectado a tu cuenta de GitHub:
1. En la barra lateral izquierda de VS Code, abre la pestaña de **Control de Código Fuente (Source Control)** (`Ctrl + Shift + G`).
2. Haz clic en el botón azul **"Publicar rama"** (o **"Publish to GitHub"**).
3. Selecciona si deseas publicarlo como repositorio **Público** o **Privado**.
4. ¡Listo! VS Code creará automáticamente el repositorio en tu cuenta de GitHub y subirá todos los archivos.

### Opción B: Mediante Línea de Comandos (Git)
Si creas el repositorio vacío en [GitHub](https://github.com/new) con el nombre `portafolio-personal`:
```bash
git remote add origin https://github.com/TU_USUARIO_GITHUB/portafolio-personal.git
git branch -M main
git push -u origin main
```