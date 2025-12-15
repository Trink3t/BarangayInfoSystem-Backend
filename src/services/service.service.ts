import { Request } from "express";
import { prisma } from "../prisma/client";
import type { CreateService, UpdateService } from "../types/requests";
import { queryOptions } from "../utils/queryOptions";

export class ServiceService {
    async getServices(req?: Request) {
        return await prisma.service.findMany({
            ...queryOptions(req)
        });
    }

    async getServiceById(id: string) {
        return await prisma.service.findUnique({
            where: {
                id: id
            }
        });
    }

    async createService(service: CreateService) {
        return await prisma.service.create({
            data: service
        });
    }

    async updateService(id: string, service: UpdateService) {
        return await prisma.service.update({
            where: {
                id: id
            },
            data: service
        });
    }

    async deleteService(id: string) {
        return await prisma.service.delete({
            where: {
                id: id
            }
        });
    }
}