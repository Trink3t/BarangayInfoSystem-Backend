import type { Request, Response } from "express";
import { BarangaySecretaryService } from "../services/barangay-secretary.service";

const service = new BarangaySecretaryService();

export class BarangaySecretaryController {
    async getAll(req: Request, res: Response) {
        await service.getAllBarangaySecretaries().then((result) => {
            res.status(200).json({
                message: "Successfully fetched barangay secretaries",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async getById(req: Request, res: Response) {
        await service.getBarangaySecretaryById(req.params.id || "").then((result) => {
            res.status(200).json({
                message: "Successfully fetched barangay secretary",
                data: result
            });
        }).catch((error) => {
            res.status(404).json(error);
        })
    }

    async create(req: Request, res: Response) {
        await service.createBarangaySecretary(req.body).then((result) => {
            res.status(201).json({
                message: "Successfully created barangay secretary",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async update(req: Request, res: Response) {
        await service.updateBarangaySecretary(req.params.id || "", req.body).then((result) => {
            res.status(200).json({
                message: "Successfully updated barangay secretary",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }

    async delete(req: Request, res: Response) {
        await service.deleteBarangaySecretary(req.params.id || "").then((result) => {
            res.status(200).json({
                message: "Successfully deleted barangay secretary",
                data: result
            });
        }).catch((error) => {
            res.status(500).json(error);
        })
    }
}