/* eslint-disable node/no-process-env */
import type { ZodObject, ZodRawShape } from "zod/v4";

import { z, ZodError } from "zod/v4";

export default function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    EnvSchema.parse(buildEnv);
  }
  catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env:\n";
      message += z.flattenError(error);
      const e = new Error(message);
      e.stack = "";
      throw e;
    }
    else {
      console.error(error);
    }
  }
}
