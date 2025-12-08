import type { ActivityLog } from "../../../generated/prisma";

export type CreateActivityLog = Omit<ActivityLog, "id">
export type UpdateActivityLog = Partial<CreateActivityLog>