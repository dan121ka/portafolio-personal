# AGENTE.md - Portafolio Personal Multimedia (Evaluación Continua H3)

## 1. Datos del Estudiante
- **Nombre Completo:** Alan Daniel Canaviri Conde
- **Carrera:** Ingeniería de Sistemas
- **Universidad:** Universidad Privada Franz Tamayo (UNIFRANZ)
- **Ciudad / País:** Cochabamba, Bolivia
- **Teléfono / WhatsApp:** +591 69433231
- **Correo Electrónico:** somoseldia27@gmail.com
- **Repositorio Oficial en GitHub:** [https://github.com/dan121ka/portafolio-personal](https://github.com/dan121ka/portafolio-personal)

---

## 2. Entregables de la Evaluación Continua H3

| # | Entregable | Estado | Ubicación en el Proyecto |
|---|------------|--------|--------------------------|
| **1** | **Agente md** | Completado | Archivo `AGENTE.md` en la raíz del proyecto con la especificación técnica, prompts, arquitectura y enlace al repositorio. |
| **2** | **Template de referencia iPortfolio** | Completado | Referencia arquitectónica basada en [iPortfolio](https://builder.bootstrapmade.com/demo/iPortfolio/). Template base guardado en `template-referencia.html`. |
| **3** | **Imágenes personales** | Completado | Fotografía real del estudiante Alan Daniel Canaviri Conde integrada en `public/assets/img/my-profile-img.jpg` y `public/assets/img/alan.png`, más fondo tecnológico binario en `public/assets/img/hero-bg.jpg`. |
| **4** | **Subir todo el proyecto al portal** | Listo | Estructura completa del proyecto Angular lista para compilar y empaquetar para el portal universitario. |
| **Extra** | **Desplegar el proyecto en GitHub** | Completado | Repositorio activo y sincronizado en [https://github.com/dan121ka/portafolio-personal](https://github.com/dan121ka/portafolio-personal). |

---

## 3. Arquitectura y Tecnologías del Proyecto

- **Framework:** Angular 22 (Standalone Components, Signals/Properties, Control Flow `@if` / `@for`)
- **Estilos:** Bootstrap 5.3.3, Bootstrap Icons 1.11.3, CSS3 personalizado con **Temática Futurista Cyber Tech**:
  - Paleta de color oscura espacial (`#070d19`, `#0d1627`).
  - Acentos y resplandor neón cian / azul eléctrico (`#00e5ff`, `#00b4d8`).
  - Efectos glassmorphism, sombras luminosas y bordes tecnológicos interactivos.
- **Multimedia e Interactividad:**
  - Efecto máquina de escribir reactivo en tiempo real (TypeScript puro) con inicialización fluida para garantizar textos completos desde el primer instante.
  - Filtrado dinámico de portafolio por categorías (`Todos`, `Web`, `Mobile/IoT`, `Redes`).
  - Ventana modal interactiva de detalles de proyectos con soporte para cierre por backdrop y teclado.
  - Formulario de contacto interactivo con control de estados (`idle`, `loading`, `success`, `error`).
  - Navegación suave (*smooth scrolling*) y detección de sección activa mediante `@HostListener('window:scroll')`.
- **Estructura de Assets:**
  - `public/assets/css/`: Hojas de estilo del template adaptadas al tema futurista.
  - `public/assets/img/`: Imágenes del portafolio, foto personal del estudiante y fondo cibernético.
  - `public/assets/vendor/`: Librerías de soporte (Bootstrap, Bootstrap Icons, AOS, GLightbox, Swiper).

---

## 4. Secciones Implementadas

1. **Header / Sidebar (`#header`):**
   - Fotografía personal de Alan Daniel Canaviri Conde con marco neón cian y recorte circular proporcional.
   - Nombre y enlaces a redes sociales (GitHub, LinkedIn, Instagram, Facebook, X).
   - Menú de navegación lateral interactivo con resaltado de sección activa.

2. **Hero Banner (`#hero`):**
   - Fondo tecnológico de matriz y código binario en azul cibernético.
   - Título principal y animación de roles enriquecidos:
     - *"Futuro Ingeniero de Sistemas"*
     - *"Desarrollador Full Stack & Móvil"*
     - *"Especialista en Redes Cisco & IoT"*
     - *"Creador de Soluciones Tecnológicas"*

3. **Sobre Mí (`#about`):**
   - Perfil profesional detallado de Alan Daniel Canaviri Conde.
   - Datos biográficos, teléfono de contacto directo (+591 69433231), correo electrónico y universidad.

4. **Estadísticas Técnicas (`#stats`):**
   - Indicadores numéricos de proyectos de ingeniería, horas de laboratorio y tecnologías dominadas.

5. **Habilidades (`#skills`):**
   - Barras de progreso con degradado cian neón para stacks: Angular/HTML/CSS, Flutter/Dart/BLE, Python/Flask/ML, ESP32/IoT, SQLite/Firebase, Redes Cisco.

6. **Currículum (`#resume`):**
   - Resumen académico en UNIFRANZ.
   - Proyectos de investigación aplicada, software web distribuido y topologías de red en Cisco Packet Tracer.

7. **Portafolio Multimedia (`#portfolio`):**
   - Galería de 6 proyectos de ingeniería con filtrado reactivo por categorías y apertura de modal con descripción y fichas técnicas.

8. **Servicios & Especialidades (`#services`):**
   - Áreas de desarrollo fullstack, desarrollo móvil multiplataforma, Internet de las Cosas (IoT), biometría, telecomunicaciones y bases de datos cloud.

9. **Testimonios (`#testimonials`):**
   - Recomendaciones de docentes y colegas de proyectos de ingeniería de sistemas adaptadas a tarjetas tecnológicas.

10. **Contacto (`#contact`):**
    - Tarjeta de información con ubicación (Cochabamba, Bolivia), teléfono, correo y mapa interactivo.
    - Formulario reactivo de envío de mensajes con inputs futuristas.

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

## 6. Enlace a GitHub e Instrucciones para Entrega Docente

### Enlace Oficial del Repositorio
👉 **[https://github.com/dan121ka/portafolio-personal](https://github.com/dan121ka/portafolio-personal)**

> [!IMPORTANT]
> **Aviso de Visibilidad para Calificación:**
> Si tu repositorio se encuentra actualmente en modo **Privado** (*Private*), tu docente no podrá abrir el enlace a menos que lo cambies a **Público** (*Public*).
> **Pasos para hacerlo Público en 20 segundos:**
> 1. Ingresa a [https://github.com/dan121ka/portafolio-personal/settings](https://github.com/dan121ka/portafolio-personal/settings).
> 2. Baja hasta el final de la página a la sección **"Danger Zone"**.
> 3. En **"Change repository visibility"**, haz clic en **"Change visibility"** y selecciona **"Make public"**.
> 4. Confirma el cambio y listo: tu docente podrá ver y evaluar todo el proyecto con el enlace directo.