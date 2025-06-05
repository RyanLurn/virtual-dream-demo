import groq from "@/features/game/ai";
import database from "@/features/game/database";
import { streamStore$ } from "@/features/game/stores";
import { streamText } from "ai";
import { v7 as uuidv7 } from "uuid";

async function streamResponse() {
  streamStore$.isStreaming.set(true);

  const dialogs = await database.dialogs.toArray();

  const { textStream, text } = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system:
      "You are a visual novel character named Ava. Respond casually and conversationally like gossiping with friends. Your response should never be longer than 3 sentences.",
    messages: dialogs,
  });

  for await (const textPart of textStream) {
    streamStore$.response.set((prev) => prev + textPart);
  }

  await database.dialogs.add({
    id: uuidv7(),
    role: "assistant",
    content: await text,
    name: "Ava",
  });

  streamStore$.reset();
}

export default streamResponse;
