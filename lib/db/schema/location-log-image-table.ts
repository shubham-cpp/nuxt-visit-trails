import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { locationLogTable } from "./location-log-table";

export const locationLogImageTable = sqliteTable("location_log_image", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull().unique(),

  locationLogId: int().notNull().references(() => locationLogTable.id, { onDelete: "cascade" }),

  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export type LocationLogImageInsert = typeof locationLogImageTable.$inferInsert;
export type LocationLogImage = typeof locationLogImageTable.$inferSelect;
