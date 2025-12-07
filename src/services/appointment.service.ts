import type { Appointment } from "../../generated/prisma/browser";
import { prisma } from "../prisma/client";
import type { CreateAppointment, UpdateAppointment } from "../types/requests";

export class AppointmentService {
    async getAppointments() {
        return await prisma.appointment.findMany();
    }

    async getAppointmentById(id: number) {
        return await prisma.appointment.findUnique({
            where: {
                id: id
            }
        });
    }

    async createAppointment(appointment: CreateAppointment) {
        return await prisma.appointment.create({
            data: appointment
        });
    }

    async updateAppointment(id: number, appointment: UpdateAppointment) {
        return await prisma.appointment.update({
            where: {
                id: id
            },
            data: appointment
        });
    }

    async deleteAppointment(id: number) {
        return await prisma.appointment.delete({
            where: {
                id: id
            }
        });
    }
}