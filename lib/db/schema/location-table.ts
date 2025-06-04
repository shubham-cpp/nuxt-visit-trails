import { int, real, sqliteTable, text, unique } from "drizzle-orm/sqlite-core";

import { user } from "./auth-schema";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  slug: text().notNull().unique(),

  lat: real().notNull(),
  long: real().notNull(),

  userId: int().notNull().references(() => user.id, { onDelete: "cascade" }),

  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
}, t => [
  unique().on(t.name, t.userId),
]);

export type LocationInsert = typeof location.$inferInsert;
export type Location = typeof location.$inferSelect;
