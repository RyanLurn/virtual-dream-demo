import Dialog from "@/features/gameplay/components/dialog";
import Name from "@/features/gameplay/components/name";
import database from "@/features/gameplay/database";
import { gameStore$ } from "@/features/gameplay/stores";
import { streamStore$ } from "@/features/gameplay/stores";
import { use$ } from "@legendapp/state/react";
import { useLiveQuery } from "dexie-react-hooks";
import DialogInput from "./dialog-input";

function DialogContainer() {
  const isPlayerTurn = use$(gameStore$.isPlayerTurn);
  const isStreaming = use$(streamStore$.isStreaming);
  const response = use$(streamStore$.response);
  const avaDialog = useLiveQuery(() => database.dialogs.reverse().first());

  return (
    <div className="absolute bottom-10 w-full max-w-4xl left-1/2 -translate-x-1/2 flex flex-col">
      {isPlayerTurn ? (
        <>
          <Name name="You" />
          <DialogInput />
        </>
      ) : (
        <>
          <Name name="Ava" />
          {isStreaming ? (
            <Dialog dialog={response} />
          ) : (
            <Dialog dialog={avaDialog?.content || "Hello, what's your name?"} />
          )}
        </>
      )}
    </div>
  );
}

export default DialogContainer;
