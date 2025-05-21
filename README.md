
# CRUD de Usuarios - Prueba Técnica 

Aplicación construida con **React** **Flask** para la prueba técnica de Desarrollador Full Stack. Permite realizar operaciones CRUD sobre una tabla de usuarios, incluyendo búsqueda, truncar exceso de caracteres.

---

## 🚀 Demo en Vercel

> ([http://13.220.160.160:5000/])

---

## ✨ Funcionalidades

- ✅ Crear usuarios con los campos requeridos.
- ✅ Visualizar lista de usuarios.
- ✅ Eliminar usuario.
- ✅ Interfaz totalmente **responsiva** (móvil y desktop).
- ✅ Estilo moderno con **TailwindCSS**.

---

## 🧠 Decisiones Técnicas

### 🪄 ¿Por qué python - flask?
Elegí [Flask] para el manejo de estado por su:
- API simple y directa.
- Levantar flask desde el backend.
- Excelente rendimiento para apps pequeñas y escalables.

### 🎨 ¿Por qué TailwindCSS?
Usé [TailwindCSS] porque:
- Permite una construcción rápida y flexible de la UI.
- Facilita crear una interfaz profesional con clases utilitarias.
- Compatible con diseño responsivo y animaciones CSS avanzadas.

### 💾 ¿Por qué docker?
- Se especifica en la prueba que debe haber base dato.
- Es la forma más rápida y limpia de garantizar persistencia mientras el servidor esta activo.
- Uso de EC2 de AWS para descar docker y crear una base de datos de posgres.

---

## 📂 Estructura del Proyecto

```
crud-docker/
├── backend/
    ├── dist/             # Archivos estaticos para levantar el frontend desde app.py
    ├── app.py           # Backend python - flask
├── frontend/            # Archivos estáticos
     
     ├──src/
        ├── assests/           # Recursos e img
        ├── components/        # Componentes reutilizables
        ├── pages              # Paginas de la web
        ├── App.jsx            # Componente principal
        ├── index.css          # Estilos css y variables fijos
        ├── main.jsx           # Entrada principal
```

---

## ⚙️ Instalación local

1. Clona el proyecto:
   ```bash
   git clone https://github.com/Josblack25/vercel-ract-flask.git
   cd vercel-ract-flask/api
   ```

2. Instalar librerias del server-flask:
   se recominda instalar entorno virtual para evitar conflictos en librerias y entorno global
   ```bash
   pip install requirements.txt
   ```
   

4. Corre el proyecto en desarrollo:
   ```bash linux
   python3 app.py
   ```

---

## 🧪 Al editar el proyecto se recomienda:

en la carpeta crud-react ejecutar npm run buils
remplazar los archivos que estan el carpeta dist para que los cambios se muestren

```bash
npm run buils
```

---

## 📝 Autor

**Adonis Daller**  
🐙 [GitHub](https://github.com/josblack25)

---


### ✔️ Checklist de requisitos cumplidos

- [x] Crear usuario
- [x] Ver lista de usuarios
- [x] ver total de usuarios  
- [x] Eliminar usuario
- [x] buscar usuario
- [x] actualizar usuario
- [x] truncar el exeso de caracteres a max 10
- [x] base datos aws


---

¡Gracias por revisar este proyecto! 🚀



