import { Request } from "express";
import { prisma } from "../prisma/client";
import type { CreateActivityLog, UpdateActivityLog } from "../types/requests";
import { queryOptions } from "../utils/queryOptions";

export class ActivityLogService {
    async getActivityLogs(req?: Request) {
        return await prisma.activityLog.findMany({
            ...queryOptions(req),
            orderBy: {
                created_at: "desc"
            }
        });
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