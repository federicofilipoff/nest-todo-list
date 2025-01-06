# Nest TO-DO LIST

## Clonar proyecto

```bash
git clone https://github.com/federicofilipoff/nest-todo-list
```

## Dirigirse a la carpeta del proyecto

```bash
cd nest-todo-list
```

## Instalar dependencias

```bash
npm install
```

## Crear archivo de configuración

Utilizar como referencia el archivo `.env.example` ubicado en la raiz del proyecto
para crear el archivo `.env`.

## Crear base de datos

Generar la base de datos según el esquema definido en Prisma.

```bash
npx prisma db push
```

## Poblar la base de datos con datos iniciales

Añade datos de ejemplo a la base de datos.

```bash
npm run seed
```

## Ejecutar servidor en modo desarrollo

El servidor se iniciará en el puerto 3000. Acceder desde http://localhost:3000.

```bash
npm run start:dev
```

## Documentación de APIS (Swagger)

La documentación de la API está disponible en http://localhost:3000/api-docs/.
