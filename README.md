# 💼 Portafolio Profesional 

Portafolio moderno, animado y totalmente responsivo desarrollado con **Next.js 14**, **React**, **Tailwind CSS** y **Framer Motion**.  
Diseñado para mostrar mi experiencia, habilidades, proyectos y logros con una presentación atractiva, profesional y fluida.

---

## 🚀 Tecnologías Principales

- ⚛️ **Next.js 14 (App Router)**
- 💅 **Tailwind CSS**
- 🌀 **Framer Motion**
- 💫 **React Parallax Tilt**
- 🧠 **TypeScript**
- 🎯 **React Icons**
- 🌙 **Theme Provider Client (Modo oscuro/claro)**

---

## 🧱 Estructura del Proyecto

src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
│
├── components/
│ ├── AboutSection.tsx # Sección "Sobre mí"
│ ├── AchievementsSection.tsx # Carrusel de logros y certificaciones
│ ├── AnimatedBackground.tsx # Fondo animado con movimiento sutil
│ ├── BubbleNav.tsx # Navegación inferior tipo burbuja
│ ├── ClientLayout.tsx # Layout del cliente (envoltorio de la app)
│ ├── ContactSection.tsx # Sección de contacto
│ ├── ExperienceSection.tsx # Experiencia laboral o académica
│ ├── Footer.tsx # Pie de página con créditos
│ ├── HeroSection.tsx # Presentación principal (inicio)
│ ├── Navbar.tsx # Barra de navegación superior
│ ├── ProjectModal.tsx # Modal con información ampliada del proyecto
│ ├── ProjectsSection.tsx # Tarjetas de proyectos con efecto 3D
│ ├── SocialSidebar.jsx # Barra lateral con redes y botón “ir arriba”
│ ├── TechSection.tsx # Tecnologías principales
│ ├── TechSkillsSection.tsx # Habilidades técnicas
│ └── ThemeProviderClient.tsx # Control de tema (oscuro/claro)
│
└── public/
└── images/ # Imágenes de proyectos, logros, etc.
---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio
Abre tu terminal y ejecuta:
git clone https://github.com/patriciomardones/portafolio.git
cd portafolio

2️⃣ Instalar dependencias
Con npm:
npm install

3️⃣ Ejecutar en modo desarrollo

npm run dev
Esto iniciará el servidor de desarrollo en:
👉 http://localhost:3000

4️⃣ Compilar para producción

npm run build
npm start
Esto genera los archivos optimizados en la carpeta .next/
y ejecuta la versión de producción del portafolio.

✨ Características Principales
🏠 Hero Section
Presenta tu nombre, profesión y una animación de bienvenida.

👨‍💻 About Section
Información sobre ti, tu enfoque profesional y tus objetivos.

🏆 Achievements Section
Carrusel automático con tus logros, premios o certificaciones.
Pausa automática al pasar el mouse y animaciones con Framer Motion.

💼 Projects Section
Galería interactiva con tarjetas 3D (efecto Tilt) para mostrar tus proyectos.
Cada tarjeta puede incluir:

Imagen

Descripción

Enlace a demo

Enlace a repositorio GitHub

⚙️ Experience & Tech Skills
Muestra tu experiencia y tecnologías dominadas, con animaciones de entrada y hover.

📬 Contact Section
Formulario y enlaces directos para contactarte fácilmente.

🧭 Navegación fluida
La barra de navegación detecta la sección activa y el desplazamiento es suave y preciso.

🌙 Modo oscuro / claro
Automático según preferencia del usuario, configurable manualmente.

🔝 Social Sidebar
Botones fijos de redes sociales y “volver arriba” con efecto de aparición suave.

🧩 Personalización
🎨 Editar tus proyectos
Archivo:
src/components/ProjectsSection.tsx

tsx
Copiar código
{
  id: "p1",
  title: "Gestor de Pagos",
  description: "Aplicación web para la gestión de pagos y reportes.",
  image: "/images/pagos.jpg",
  demo: "https://example.com/demo",
  repo: "https://github.com/usuario/proyecto",
  tech: ["Next.js", "Laravel", "MySQL"]
}
Agrega, elimina o modifica los proyectos según tus necesidades.

🏅 Agregar logros o certificados
Archivo:
src/components/AchievementsSection.tsx

Agrega elementos con su icono, título, descripción y enlace.

👤 Modificar datos personales
Archivo:
src/components/AboutSection.tsx

Edita tu biografía, especialización, intereses y habilidades blandas.

🌐 Editar redes sociales
Archivo:
src/components/SocialSidebar.jsx

Reemplaza tus enlaces de:

GitHub

LinkedIn

Correo electrónico

🦶 Editar el Footer
Archivo:
src/components/Footer.tsx
