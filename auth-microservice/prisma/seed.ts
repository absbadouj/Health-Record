const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            {
                id: 'e1cbb2b1-9a3f-4a6a-8f9f-8b4d4c3e3f8a',
                email: 'abduh@huf.jiw',
                password: '123',

            },
            {
                id: 'e1chuuhu1-9a3f-4a6a-8f9f-8b4d4c3e3f8a',
                email: 'absbadouj@gmail.com',
                password: '123',

            }
        ],
        skipDuplicates: true
    });

    main()
        .catch((e) => {
            console.error(e);
            process.exit(1);
        })
        .finally(async () => {
            await prisma.$disconnect();
        });
}