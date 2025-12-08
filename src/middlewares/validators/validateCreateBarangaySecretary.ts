import type { NextFunction, Response, Request } from "express";
import * as yup from "yup";
import { registerSchema } from "./validateRegistration";
import { formatYupErrors } from "../../utils/yup-validation";

const barangaySecretarySchema = yup.object().concat(registerSchema);

export const validateCreateBarangaySecretary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await barangaySecretarySchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err: any) {
        return res.status(400).json({
            errors: formatYupErrors(err)
        });
    }
};