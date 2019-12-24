import axios from "../../../router/http";
import { ActionContext } from "vuex";
import { SettingsState, User } from "./types";

export default {
  fetchUsers(store: ActionContext<SettingsState, any>): void {
    axios
      .get("/v2/disciplina/")
      .then(response => {
        const users = response.data;
        store.commit("setUsers", users);
      })
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },

  insertUser(store: ActionContext<SettingsState, any>, user: any) {
    axios
      .post("/v2/disciplina/", user)
      .then(() => {})
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },

  updateUser(
    store: ActionContext<SettingsState, any>,
    user: User
  ) {
    axios
      .put(`/v2/disciplina/${user.id}`, user)
      .then(() => {})
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },

  deleteUser(
    store: ActionContext<SettingsState, any>,
    user: User
  ) {
    axios
      .delete(`/v2/disciplina/deletar/${user}`)
      .then(() => {})
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }
};
