import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding: procesando...');

  await prisma.task.createMany({
    data: [
      { descripcion: 'Aprender Flask', completada: false },
      { descripcion: 'Realizar API usando Nest', completada: true },
      { descripcion: 'Aprender Django', completada: true },
      { descripcion: 'Aprender Next', completada: false },
      { descripcion: 'Aprender Vue', completada: false },
      { descripcion: 'Aprender React', completada: false },
    ],
  });

  console.log('Seeding: completo');
}

main()
  .catch((e) => {
    console.error('Error while seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
