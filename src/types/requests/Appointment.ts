import type { Appointment } from "../../../generated/prisma";

export type CreateAppointment = Omit<Appointment, "id" | "created_at">
export type UpdateAppointment = Partial<CreateAppointment>