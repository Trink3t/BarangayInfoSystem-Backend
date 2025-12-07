import type { Request, Response } from "express";
import type { CreateBarangaySecretary } from "../types/requests";
import { AuthService } from "../services/auth.service";
import bcrypt from "bcryptjs";
import { BarangaySecretaryController } from "./barangay-secretary.controller";

const service = new AuthService();
const barangaySecretaryController = new BarangaySecretaryController();

export class AuthController {
    async login(req: Request, res: Response) {
        return 'login';
    }

    async register(req: Request, res: Response) {
        const body: CreateBarangaySecretary = req.body;

        const emailExists = await service.emailExists(body.email);

        if (emailExists) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);

        return await barangaySecretaryController.create({
            ...req,
            body
        } as Request, res);
    }

    async logout(req: Request, res: Response) {
        return 'logout';
    }
}