import type { BarangaySecretary } from "../../generated/prisma/client";
import { prisma } from "../prisma/client";
import type { CreateBarangaySecretary, UpdateBarangaySecretary } from "../types/requests";

export class BarangaySecretaryService {
    async getAllBarangaySecretaries() {
        return await prisma.barangaySecretary.findMany();
    }

    async getBarangaySecretaryById(id: number) {
        return await prisma.barangaySecretary.findUnique({
            where: {
                id: id
            }
        });
    }

    async createBarangaySecretary(barangaySecretary: CreateBarangaySecretary) {
        return await prisma.barangaySecretary.create({
            data: barangaySecretary
        });
    }

    async updateBarangaySecretary(id: number, barangaySecretary: UpdateBarangaySecretary) {
        return await prisma.barangaySecretary.update({
            where: {
                id: id
            },
            data: barangaySecretary
        });
    }

    async deleteBarangaySecretary(id: number) {
        return await prisma.barangaySecretary.delete({
            where: {
                id: id
            }
        });
    }
}