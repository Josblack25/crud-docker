CRUD de Usuarios - Prueba Técnica
Aplicación construida con React Flask para la prueba técnica de Desarrollador Full Stack. Permite realizar operaciones CRUD sobre una tabla de usuarios, incluyendo búsqueda, truncar exceso de caracteres.

🚀 Demo en Vercel
([https://vercel-ract-flask.vercel.app/])

✨ Funcionalidades
✅ Crear usuarios con los campos requeridos.
✅ Visualizar lista de usuarios.
✅ Eliminar usuario.
✅ Paginación (4 productos en vista card, 10 en vista tabla).
✅ Interfaz totalmente responsiva (móvil y desktop).
✅ Estilo moderno con TailwindCSS.
🧠 Decisiones Técnicas
🪄 ¿Por qué python - flask?
Elegí [Flask] para el manejo de estado por su:

API simple y directa.
Levantar flask desde el backend.
Excelente rendimiento para apps pequeñas y escalables.
🎨 ¿Por qué TailwindCSS?
Usé [TailwindCSS] porque:

Permite una construcción rápida y flexible de la UI.
Facilita crear una interfaz profesional con clases utilitarias.
Compatible con diseño responsivo y animaciones CSS avanzadas.
💾 ¿Por qué lista de python?
Se especifica en la prueba que no debe haber base dato.
Es la forma más rápida y limpia de garantizar persistencia mientras el servidor esta activo.
📂 Estructura del Proyecto
src/
├── api/
    ├── index.py           # Backend python - flask
├── crus-react/            # Archivos estáticos
     ├── dist/             # Archivos estaticos para levantar el frontend desde index.py
     ├──src/
        ├── assests/           # Recursos e img
        ├── components/        # Componentes reutilizables
        ├── pages              # Paginas de la web
        ├── App.jsx            # Componente principal
        ├── index.css          # Estilos css y variables fijos
        ├── main.jsx           # Entrada principal
⚙️ Instalación local
Clona el proyecto:

git clone https://github.com/Josblack25/vercel-ract-flask.git
cd vercel-ract-flask/api
Instalar librerias del server-flask: se recominda instalar entorno virtual para evitar conflictos en librerias y entorno global

pip install requirements.txt
Corre el proyecto en desarrollo:

python3 index.py
🧪 Al editar el proyecto se recomienda:
en la carpeta crud-react ejecutar npm run buils remplazar los archivos que estan el carpeta dist para que los cambios se muestren

npm run buils
📝 Autor
Adonis Daller
🐙 GitHub

✔️ Checklist de requisitos cumplidos
 Crear usuario
 Ver lista de usuarios
 ver total de usuarios
 Eliminar usuario
 buscar usuario
 actualizar usuario
 truncar el exeso de caracteres a max 10
 vercel sin base de datos
¡Gracias por revisar este proyecto! 🚀
