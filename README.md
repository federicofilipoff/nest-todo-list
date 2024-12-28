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

# Crear variable de entorno

```bash
echo DATABASE_URL="file:../database/base_datos.db" > .env
```

1. Ejecutar comando para crear varible de entorno en la raiz del proyecto.
2. Editar el archivo para modificar el nombre de la base de datos.

# Crear base de datos

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
