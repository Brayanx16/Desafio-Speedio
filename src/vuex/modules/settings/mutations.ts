import { SettingsState, User } from "./types";

export default {
  setUsers(state: SettingsState, data: User[]) {
    state.users = data;
    state.error = false;
  },
  settingError(state: SettingsState) {
    state.error = true;
  }
};
