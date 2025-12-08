import type { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { formatYupErrors } from "../../utils/yup-validation";

const loginSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required")
});

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await loginSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (err: any) {
        return res.status(400).json({
            errors: formatYupErrors(err)
        });
    }
};