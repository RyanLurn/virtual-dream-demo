import handleSend from "@/features/gameplay/functions/handle-send";
import { gameStore$ } from "@/features/gameplay/stores";
import { dialogStyle } from "@/features/gameplay/styles";
import { cn } from "@/lib/utils";
import { use$ } from "@legendapp/state/react";

function DialogInput() {
  const playerInput = use$(gameStore$.playerInput);

  async function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      await handleSend();
    }
  }

  return (
    <textarea
      id="prompt"
      // biome-ignore lint/a11y/noAutofocus: <explanation>
      autoFocus
      placeholder="What would you say?"
      className={cn("resize-none focus:outline-none", dialogStyle)}
      rows={3}
      value={playerInput}
      onChange={(e) => gameStore$.playerInput.set(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default DialogInput;
