import type { Request, Response } from "express";
import { ActivityLogService } from "../services/activity-log.service";

const service = new ActivityLogService();

export class ActivityLogController {
    async getAll(req: Request, res: Response) {
        await service.getActivityLogs().then((result) => {
            res.status(200).json({
                message: "Successfully retrieved activity logs",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async getById(req: Request, res: Response) {
        await service.getActivityLogById(parseInt(req.params.id || "")).then((result) => {
            res.status(200).json({
                message: "Successfully retrieved activity log",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async create(req: Request, res: Response) {
        await service.createActivityLog(req.body).then((result) => {
            res.status(200).json({
                message: "Successfully created activity log",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async update(req: Request, res: Response) {
        await service.updateActivityLog(parseInt(req.params.id || ""), req.body).then((result) => {
            res.status(200).json({
                message: "Successfully updated activity log",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async delete(req: Request, res: Response) {
        await service.deleteActivityLog(parseInt(req.params.id || "")).then((result) => {
            res.status(200).json({
                message: "Successfully deleted activity log",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }
}