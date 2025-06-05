import type { GameStore, StreamStore } from "@/features/gameplay/types";
import { observable } from "@legendapp/state";

const gameStore$ = observable<GameStore>({
  isPlayerTurn: false,
  playerInput: "",
});

const streamStore$ = observable<StreamStore>({
  isStreaming: false,
  response: "",
  reset: () => {
    streamStore$.isStreaming.set(false);
    streamStore$.response.set("");
  },
});

export { gameStore$, streamStore$ };
