import { Request } from "express";
import { ParsedQs } from "qs";

export const queryOptions = (req?: Request) => {
    const page = req?.query.page ? Number(req.query.page) : 1;
    const perPage = req?.query.perPage ? Number(req.query.perPage) : 10;
    const skip = (page - 1) * perPage;

    const search = req?.query.search as string | undefined;

    let fieldsRaw = req?.query['fields[]'];
    let fields: string[] | undefined;

    if (fieldsRaw) {
        if (Array.isArray(fieldsRaw)) {
        fields = fieldsRaw
            .filter((f): f is string => typeof f === "string")
            .map((f) => f.trim())
            .filter((f) => f.length > 0);
        } else if (typeof fieldsRaw === "string") {
        fields = [fieldsRaw.trim()];
        }
    }

    let where: any = undefined;

    if (search && fields && fields.length > 0) {
        where = {
        OR: fields.map((field) => ({
            [field]: { contains: search },
        })),
        };
    }

    return {
        skip: skip < 0 ? 0 : skip,
        take: perPage,
        where,
    };
};
