import { SettingsState, User } from "./types";

export default {
  users(state: SettingsState): User[] {
    return state.users;
  },
  errorStatus(state: SettingsState): boolean {
    return state.error;
  }
};
