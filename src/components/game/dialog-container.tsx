import Dialog from "@/components/game/dialog";
import Name from "@/components/game/name";

function DialogContainer() {
  return (
    <div className="absolute bottom-10 w-full max-w-4xl left-1/2 -translate-x-1/2 flex flex-col">
      <Name name="Ava" />
      <Dialog dialog="Hello" />
    </div>
  );
}

export default DialogContainer;
