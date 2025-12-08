import { prisma } from "../prisma/client";
import type { CreateBarangaySecretary } from "../types/requests";
import type { LoginUser } from "../types/requests/Auth";
import { BarangaySecretaryService } from "./barangay-secretary.service";

const barangaySecretaryService = new BarangaySecretaryService();

export class AuthService {
    async register(createBarangaySecretary: CreateBarangaySecretary) {
        return await barangaySecretaryService.createBarangaySecretary(createBarangaySecretary);
    }

    async getByEmail(email: string) {
        const res = await prisma.barangaySecretary.findUnique({
            where: {
                email: email
            }
        });

        if (!res) {
            return false;
        }

        return res;
    }

    async getByUsername(username: string) {
        const res = await prisma.barangaySecretary.findUnique({
            where: {
                username: username
            }
        });


        if (!res) {
            return false;
        }

        return res;
    }

}