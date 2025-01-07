import { User } from "@prisma/client";
import { action, Action } from "easy-peasy";

export interface UserStore {
    data?: User;
    setUserData: Action<UserStore, User | undefined>;
    updateUserData: Action<UserStore, Partial<User | undefined>>;
}

const user: UserStore = {
    data: undefined,
    setUserData: action((state, payload) => { state.data = payload }),
    updateUserData: action((state, payload) => {
        // @ts-ignore
        state.data = { ...state.data, ...payload }
    })
}

export default user;