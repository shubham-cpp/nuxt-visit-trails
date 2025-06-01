import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const locationTable = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  slug: text().notNull().unique(),

  lat: real().notNull(),
  long: real().notNull(),

  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export type LocationInsert = typeof locationTable.$inferInsert;
export type Location = typeof locationTable.$inferSelect;
