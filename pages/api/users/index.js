import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
    const allUsers = await prisma.cliente.findMany();
    console.log(allUsers);
    res.json(allUsers);
}
