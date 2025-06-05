interface Dialog {
  id: string;
  role: "user" | "assistant";
  content: string;
  name: string;
}

interface GameStore {
  isPlayerTurn: boolean;
  playerInput: string;
}

interface StreamStore {
  isStreaming: boolean;
  response: string;
  reset: () => void;
}

export type { Dialog, GameStore, StreamStore };
