import { Request } from "express";
import { prisma } from "../prisma/client";
import type { CreateBarangaySecretary, UpdateBarangaySecretary } from "../types/requests";
import { queryOptions } from "../utils/queryOptions";

export class BarangaySecretaryService {
    async getAllBarangaySecretaries(req?: Request) {
        return await prisma.barangaySecretary.findMany({
            ...queryOptions(req),
            omit: {
                password: true
            }
        });
    }

    async getBarangaySecretaryById(id: string) {
        return await prisma.barangaySecretary.findUnique({
            where: {
                id: id
            }, 
            omit: {
                password: true
            }
        });
    }

    async createBarangaySecretary(barangaySecretary: CreateBarangaySecretary) {
        return await prisma.barangaySecretary.create({
            data: barangaySecretary,
        });
    }

    async updateBarangaySecretary(id: string, barangaySecretary: UpdateBarangaySecretary) {
        return await prisma.barangaySecretary.update({
            where: {
                id: id
            },
            data: barangaySecretary,
            
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