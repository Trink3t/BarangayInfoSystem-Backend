import type { Request } from "express"
import jwt, { verify } from "jsonwebtoken"
import { BarangaySecretaryService } from "../services/barangay-secretary.service"

const service = new BarangaySecretaryService();

type JWTPayload = {
    id: string
}

const JWT_SECRET = process.env.JWT_SECRET || "secret"

export const jwtUtil = {
    sign: (payload: JWTPayload) => {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" })
    },

    verify: (token: string) => {
        try {
            return jwt.verify(token, JWT_SECRET) as JWTPayload
        } catch  {
            return null
        }
    },

    decode: (token: string) => {
        return jwt.decode(token) as JWTPayload
    },

    authUser: async (id: string) => {
        return await service.getBarangaySecretaryById(id);
    }
}