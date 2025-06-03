import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { userTable } from "./auth-schema";
import { locationTable } from "./location-table";

export const locationLogTable = sqliteTable("location_log", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),

  lat: real().notNull(),
  long: real().notNull(),
  locationId: int().notNull().references(() => locationTable.id, { onDelete: "cascade" }),
  userId: int().notNull().references(() => userTable.id, { onDelete: "cascade" }),

  startedAt: int().notNull(),
  endedAt: int().notNull(),

  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export type LocationLogInsert = typeof locationLogTable.$inferInsert;
export type LocationLog = typeof locationLogTable.$inferSelect;
