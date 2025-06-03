import { int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const userTable = sqliteTable("user", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: integer({ mode: "boolean" }).$defaultFn(() => false).notNull(),
  image: text(),
  createdAt: int().$default(() => Date.now()),
  updatedAt: int().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export const sessionTable = sqliteTable("session", {
  id: int().primaryKey({ autoIncrement: true }),
  expiresAt: int().notNull(),
  token: text().notNull().unique(),
  createdAt: int().$default(() => Date.now()),
  updatedAt: int().notNull(),
  ipAddress: text(),
  userAgent: text(),
  userId: int().notNull().references(() => userTable.id, { onDelete: "cascade" }),
});

export const accountTable = sqliteTable("account", {
  id: int().primaryKey({ autoIncrement: true }),
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: int().notNull().references(() => userTable.id, { onDelete: "cascade" }),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: integer(),
  refreshTokenExpiresAt: integer(),
  scope: text(),
  password: text(),
  createdAt: integer().notNull(),
  updatedAt: integer().notNull(),
});

export const verificationTable = sqliteTable("verification", {
  id: int().primaryKey({ autoIncrement: true }),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: integer().notNull(),
  createdAt: integer().$defaultFn(() => /* @__PURE__ */ Date.now()),
  updatedAt: integer().$defaultFn(() => /* @__PURE__ */ Date.now()),
});
