import type { Resident } from "../../../generated/prisma/browser";

export type CreateResident = Pick<Resident, "first_name" | "middle_name" | "last_name" | "address" | "contact_number" | "sex">
export type UpdateResident = Partial<CreateResident>