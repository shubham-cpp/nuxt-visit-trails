import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth-schema";
import { location } from "./location-table";

export const locationLog = sqliteTable("location_log", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),

  lat: real().notNull(),
  long: real().notNull(),

  locationId: int().notNull().references(() => location.id, { onDelete: "cascade" }),
  userId: int().notNull().references(() => user.id, { onDelete: "cascade" }),

  startedAt: int().notNull(),
  endedAt: int().notNull(),

  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export type LocationLogInsert = typeof locationLog.$inferInsert;
export type LocationLog = typeof locationLog.$inferSelect;
