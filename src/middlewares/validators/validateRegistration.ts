import type { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { formatYupErrors } from "../../utils/yup-validation";
import { AuthService } from "../../services/auth.service";

const authService = new AuthService();

export const registerSchema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    middle_name: yup.string().optional(),
    username: yup.string().required("Username is required").test(
            "username-exists",
            "Username already exists",
            async (username: string) => {
                const user = await authService.getByUsername(username);
                return !user;
            }
    ),
    email: yup.string().email("Must be a valid email").required("Email is required").test(
            "email-exists",
            "Email already exists",
            async (email: string) => {
                const user = await authService.getByEmail(email);
                return !user;
            }
        ),
    password: yup.string().required("Password is required")
});

export const validateRegistration = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await registerSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err: any) {
        return res.status(400).json({
            errors: formatYupErrors(err)
        });
    }
};