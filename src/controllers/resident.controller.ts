import type { Request, Response } from "express";
import { ResidentService } from "../services/resident.service";

const service = new ResidentService();

export class ResidentController {
    async getAll(req: Request, res: Response) {
        await service.getResidents().then((result) => {
            res.status(200).json({
                message: "Successfully retrieved residents",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async getById(req: Request, res: Response) {
        await service.getResidentById(req.params.id || "").then((result) => {
            res.status(200).json({
                message: "Successfully retrieved resident",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async create(req: Request, res: Response) {
        await service.createResident(req.body).then((result) => {
            res.status(201).json({
                message: "Successfully created resident",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async update(req: Request, res: Response) {
        await service.updateResident(req.params.id || "", req.body).then((result) => {
            res.status(200).json({
                message: "Successfully updated resident",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }
}