import { prisma } from "../prisma/client";
import type { CreateService, UpdateService } from "../types/requests";

export class ServiceService {
    async getServices() {
        return await prisma.service.findMany();
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