import type { Request, Response } from "express";
import { ServiceService } from "../services/service.service";

const service = new ServiceService();

export class ServiceController {
    async getAll(req: Request, res: Response) {
        await service.getServices().then((result) => {
            res.status(200).json({
                message: "Successfully retrieved services",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async getById(req: Request, res: Response) {
        await service.getServiceById(req.params.id || "").then((result) => {
            res.status(200).json({
                message: "Successfully retrieved service",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async create(req: Request, res: Response) {
        await service.createService(req.body).then((result) => {
            res.status(201).json({
                message: "Successfully created service",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async update(req: Request, res: Response) {
        await service.updateService(req.params.id || "", req.body).then((result) => {
            res.status(200).json({
                message: "Successfully updated service",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async delete(req: Request, res: Response) {
        await service.deleteService(req.params.id || "").then((result) => {
            res.status(200).json({
                message: "Successfully deleted service",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }
}