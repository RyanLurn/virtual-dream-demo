import { gameStore$ } from "@/features/game/stores";
import { dialogStyle } from "@/features/game/styles";

function Dialog({ dialog }: { dialog: string }) {
  function handleClick() {
    if (gameStore$.isPlayerTurn.get()) return;
    gameStore$.isPlayerTurn.set(true);
  }

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className={dialogStyle} onClick={handleClick}>
      {dialog}
    </div>
  );
}

export default Dialog;
