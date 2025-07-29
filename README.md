Proyecto Final Backend - Módulo 2

Este proyecto es el resultado final del Módulo 2 del curso de Backend. Se trata de una aplicación backend desarrollada con Node.js que incluye autenticación de usuarios, gestión de productos, carrito de compras, generación de tickets de compra, administración de usuarios y recuperación de contraseñas por correo electrónico.

---------------------------------------------------------

Funcionalidades Principales

- Registro e inicio de sesión de usuarios (con JWT)
- Protección de rutas para usuarios y administradores
- Gestión de productos
- Carrito de compras por usuario
- Generación de tickets de compra
- Envío de correos para recuperación de contraseña
- Administración de usuarios

---------------------------------------------------------

Tecnologías Utilizadas

- Node.js
- Express 5
- MongoDB + Mongoose
- JWT para autenticación
- Passport (estrategias Local y JWT)
- Bcrypt para hasheo de contraseñas
- Express Handlebars para vistas
- Nodemailer para recuperación de contraseña
- dotenv-cli para manejo de variables de entorno

---------------------------------------------------------

Estructura del proyecto

src/
├── config/            => Configuración de Passport y MongoDB
├── controllers/       => Lógica de manejo de rutas
├── dao/               => Acceso a datos (MongoDB)
├── middleware/        => Autenticación, autorización, validaciones
├── models/            => Esquemas de Mongoose
├── routes/            => Rutas agrupadas (users, products, carts, tickets, etc.)
├── services/          => Servicios de negocio y envío de mails
├── utils/             => Utilidades generales (token, hash, etc.)
├── views/             => Vistas con Handlebars
└── app.js             => Punto de entrada principal

--------------------------------------------------------

Instalación y Ejecución

1. Cloná el repositorio:
   git clone https://github.com/ExeDessole/BackEnd2.git

2. Ingresa a la carpeta del proyecto:
    cd BackEnd2
3. Instalá las dependencias:
    npm install
4. Creá un archivo .env con las siguientes variables:

PORT=8080
SECRET=tu_clave_secreta
#URI_DB=mongodb+srv://<usuario>:<contraseña>@<cluster>/<baseDeDatos>
MONGO_URI=mongodb:mongodb+srv://<usuario>:<contraseña>@<cluster>/<baseDeDatos>
DB_NAME=practicaIntegradora
JWT_SECRET=tu_clave_secreta
ADMIN_EMAIL=tu_correo@gmail.com
ADMIN_PASSWORD=tu_contraseña

5. Inicia el servidor:
    npm start

Autor: Exequiel Dessole
Git: https://github.com/ExeDessole