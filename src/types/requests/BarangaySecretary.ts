import type { BarangaySecretary } from "../../../generated/prisma";

export type CreateBarangaySecretary = Omit<BarangaySecretary, "id">
export type UpdateBarangaySecretary = Partial<CreateBarangaySecretary>