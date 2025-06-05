import DialogContainer from "@/features/game/components/dialog-container";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-screen w-screen">
      <DialogContainer />
    </div>
  );
}
