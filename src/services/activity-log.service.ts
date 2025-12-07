import type { ActivityLog } from "../../generated/prisma/browser";
import { prisma } from "../prisma/client";
import type { CreateActivityLog, UpdateActivityLog } from "../types/requests";

export class ActivityLogService {
    async getActivityLogs() {
        return await prisma.activityLog.findMany();
    }

    async getActivityLogById(id: number) {
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

    async updateActivityLog(id: number, activityLog: UpdateActivityLog) {
        return await prisma.activityLog.update({
            where: {
                id: id
            },
            data: activityLog
        });
    }

    async deleteActivityLog(id: number) {
        return await prisma.activityLog.delete({
            where: {
                id: id
            }
        });
    }
}