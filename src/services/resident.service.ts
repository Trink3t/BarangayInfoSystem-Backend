import { prisma } from "../prisma/client";
import type { CreateResident, UpdateResident } from "../types/requests";

export class ResidentService {
    async getResidents() {
        return await prisma.resident.findMany();
    }

    async getResidentById(id: string) {
        return await prisma.resident.findUnique({
            where: {
                id: id
            }
        });
    }

    async createResident(resident: CreateResident) {
        return await prisma.resident.create({
            data: resident
        });
    }

    async updateResident(id: string, resident: UpdateResident) {
        return await prisma.resident.update({
            where: {
                id: id
            },
            data: resident
        });
    }

    async deleteResident(id: string) {
        return await prisma.resident.delete({
            where: {
                id: id
            }
        });
    }
}