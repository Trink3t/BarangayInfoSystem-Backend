import type { ActivityLog } from "../../../generated/prisma/browser";

export type CreateActivityLog = Omit<ActivityLog, "id">
export type UpdateActivityLog = Partial<CreateActivityLog>