import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  if (!event.path.startsWith("/dashboard"))
    return;

  const session = await auth.api.getSession({
    headers: event.headers,
  });
  // event.context.user = session?.user as unknown as UserWithId;
  if (session?.user)
    return;

  await sendRedirect(event, "/", 302);
});
