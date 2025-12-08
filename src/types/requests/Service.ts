import type { Service } from "../../../generated/prisma";

export type CreateService = Omit<Service, "id">
export type UpdateService = Partial<CreateService>