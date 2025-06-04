import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth-schema";
import { locationLog } from "./location-log-table";

export const locationLogImage = sqliteTable("location_log_image", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull().unique(),

  locationLogId: int().notNull().references(() => locationLog.id, { onDelete: "cascade" }),
  userId: int().notNull().references(() => user.id, { onDelete: "cascade" }),

  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export type LocationLogImageInsert = typeof locationLogImage.$inferInsert;
export type LocationLogImage = typeof locationLogImage.$inferSelect;
