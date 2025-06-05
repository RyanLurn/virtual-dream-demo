import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/v4";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_GROQ_API_KEY: z.string().min(1),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
