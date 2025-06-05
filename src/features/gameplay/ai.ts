import { env } from "@/lib/env";
import { createGroq } from "@ai-sdk/groq";

const groq = createGroq({
  apiKey: env.VITE_GROQ_API_KEY,
});

export default groq;
