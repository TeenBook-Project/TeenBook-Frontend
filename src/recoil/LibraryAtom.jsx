import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const LibraryAtom = atom({
  key: "LabraryAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
