import { prisma } from "../prisma/client";
import type { CreateBarangaySecretary, UpdateBarangaySecretary } from "../types/requests";

export class BarangaySecretaryService {
    async getAllBarangaySecretaries() {
        return await prisma.barangaySecretary.findMany();
    }

    async getBarangaySecretaryById(id: string) {
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

    async updateBarangaySecretary(id: string, barangaySecretary: UpdateBarangaySecretary) {
        return await prisma.barangaySecretary.update({
            where: {
                id: id
            },
            data: barangaySecretary
        });
    }

    async deleteBarangaySecretary(id: string) {
        return await prisma.barangaySecretary.delete({
            where: {
                id: id
            }
        });
    }

    async getActivityLogs() {
        return await prisma.activityLog.findMany();
    }
}