import { SettingsState, User } from "./types";

export default {
  users(state: SettingsState): User[] {
    return state.users;
  },
  user(state: SettingsState): User {
    return state.user;
  },
  errorStatus(state: SettingsState): boolean {
    return state.error;
  }
};
