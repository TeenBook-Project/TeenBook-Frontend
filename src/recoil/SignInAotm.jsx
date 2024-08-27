import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const signInState = atom({
  key: "signIn",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
