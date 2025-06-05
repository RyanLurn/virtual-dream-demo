import type { Dialog } from "@/features/gameplay/types";
import Dexie, { type EntityTable } from "dexie";

const database = new Dexie("GameDatabase1") as Dexie & {
  dialogs: EntityTable<Dialog, "id">;
};

database.version(1).stores({
  dialogs: "++id",
});

export default database;
