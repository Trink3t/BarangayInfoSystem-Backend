import { prisma } from "../prisma/client";
import type { CreateActivityLog, UpdateActivityLog } from "../types/requests";

export class ActivityLogService {
    async getActivityLogs() {
        return await prisma.activityLog.findMany();
    }

    async getActivityLogById(id: string) {
        return await prisma.activityLog.findUnique({
            where: {
                id: id
            }
        });
    }

    async createActivityLog(activityLog: CreateActivityLog) {
        return await prisma.activityLog.create({
            data: activityLog
        });
    }

    async updateActivityLog(id: string, activityLog: UpdateActivityLog) {
        return await prisma.activityLog.update({
            where: {
                id: id
            },
            data: activityLog
        });
    }

    async deleteActivityLog(id: string) {
        return await prisma.activityLog.delete({
            where: {
                id: id
            }
        });
    }
}