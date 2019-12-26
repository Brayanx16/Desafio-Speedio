import { SettingsState, User } from "./types";

export default {
  setUsers(state: SettingsState, data: User[]) {
    state.users = data;
    state.error = false;
  },
  setLoginUser(state: SettingsState, data: User) {
    state.loginUser = data;
    state.error = false;
  },
  setLogoutUser(state: SettingsState) {
    state.loginUser = {
      id: 0,
      name: "",
      email: "",
      password: "",
      cpf: "",
      age: 0
    };
  },
  settingError(state: SettingsState) {
    state.error = true;
  }
};
