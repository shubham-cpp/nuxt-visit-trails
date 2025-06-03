import { int, real, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";

import { userTable } from "./auth-schema";

export const locationTable = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  slug: text().notNull().unique(),

  lat: real().notNull(),
  long: real().notNull(),

  userId: int().notNull().references(() => userTable.id, { onDelete: "cascade" }),

  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
}, t => [
  unique().on(t.name, t.userId),
]);

export type LocationInsert = typeof locationTable.$inferInsert;
export type Location = typeof locationTable.$inferSelect;
