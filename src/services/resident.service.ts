import { Request } from "express";
import { prisma } from "../prisma/client";
import type { CreateResident, UpdateResident } from "../types/requests";
import { queryOptions } from "../utils/queryOptions";

export class ResidentService {
    async getResidents(req?: Request) {
        return await prisma.resident.findMany({
            ...queryOptions(req),
        });
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