import type { Service } from "../../../generated/prisma/browser";

export type CreateService = Omit<Service, "id">
export type UpdateService = Partial<CreateService>