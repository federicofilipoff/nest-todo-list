# Clonar proyecto

```bash
git clone https://github.com/federicofilipoff/nest-todo-list
```

# Dirigirse a la carpeta del proyecto

```bash
cd nest-todo-list
```

# Instalar dependencias

```bash
npm install
```

# Crear base de datos

1. Crear un archivo .env en la raiz del proyecto.
2. Incluir la siguiente línea: DATABASE_URL="file:../database/base_datos.db"
3. modificar el nombre del archivo de la base de datos.

```bash
npx prisma db push
```

# Ejecutar Script para poblar de datos la base de datos

```bash
npm run seed
```

# Ejecutar servidor en modo desarrollo

El servidor se inicia en el puerto 3000 (LocalHost: 3000)

```bash
npm run start:dev
```

# Documentación de APIS (Swagger)

Dirigirse a: http://localhost:3000/api-docs/
