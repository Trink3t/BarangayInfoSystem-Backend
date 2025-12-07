import type { BarangaySecretary } from "../../../generated/prisma/browser";

export type CreateBarangaySecretary = Omit<BarangaySecretary, "id">
export type UpdateBarangaySecretary = Partial<CreateBarangaySecretary>