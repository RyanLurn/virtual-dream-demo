import { dialogStyle } from "@/components/game/styles";

function Dialog({ dialog }: { dialog: string }) {
  return <div className={dialogStyle}>{dialog}</div>;
}

export default Dialog;
