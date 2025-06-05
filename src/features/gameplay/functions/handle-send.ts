import database from "@/features/gameplay/database";
import { gameStore$ } from "@/features/gameplay/stores";
import { v7 as uuidv7 } from "uuid";
import streamResponse from "./stream-response";

async function handleSend() {
  const playerInput = gameStore$.playerInput.get();

  if (playerInput.trim() === "") return;

  await database.dialogs.add({
    id: uuidv7(),
    role: "user",
    content: playerInput,
    name: "You",
  });

  gameStore$.playerInput.set("");

  gameStore$.isPlayerTurn.set(false);

  streamResponse();
}

export default handleSend;
