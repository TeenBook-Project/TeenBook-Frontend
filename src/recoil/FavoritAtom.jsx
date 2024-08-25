import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const FavoritAtom = atom({
  key: "FavoritAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
