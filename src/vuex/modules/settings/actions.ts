import axios from "../../../router/http";
import { ActionContext } from "vuex";
import { SettingsState, User } from "./types";

export default {
  fetchUsers(store: ActionContext<SettingsState, any>): void {
    axios
      .get("/api/v2/usuario/lista")
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
    return new Promise((resolve, reject) => {
      axios.post("/api/v2/usuario/cadastro", user).then(
        () => {
          resolve();
        },
        error => {
          store.commit("settingError");
          reject(error);
        }
      );
    });
  },

  updateUser(store: ActionContext<SettingsState, any>, user: User) {
    axios
      .put(`/api/v2/usuario/editar/${user.id}`, user)
      .then(() => {})
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },

  deleteUser(store: ActionContext<SettingsState, any>, user: User) {
    axios
      .delete(`/v2/disciplina/deletar/${user}`)
      .then(() => {})
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },

  login(store: ActionContext<SettingsState, any>, user: User) {
    return new Promise((resolve, reject) => {
      axios.post("/api/v2/login", user).then(
        response => {
          const user = response.data;
          store.commit("setLoginUser", user);
          resolve();
        },
        error => {
          store.commit("settingError");
          reject(error);
        }
      );
    });
  },

  logout(store: ActionContext<SettingsState, any>): void {
    store.commit('setLogoutUser');
  }
};
