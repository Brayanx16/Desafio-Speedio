import axios from "../../../router/http";
import { ActionContext } from "vuex";
import { SettingsState, Disciplina } from "./types";

export default {
  fetchDisciplinas(store: ActionContext<SettingsState, any>): void {
    axios
      .get("/v2/disciplina/")
      .then(response => {
        const disciplinas = response.data;
        store.commit("setDisciplinas", disciplinas);
      })
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },

  insertDisciplina(store: ActionContext<SettingsState, any>, disciplina: any) {
    axios
      .post("/v2/disciplina/", disciplina.disciplina)
      .then(response => {
        delete response.data.updatedAt;
        delete response.data.createdAt;
        const { disciplinas } = disciplina;
        disciplinas.push(response.data);
      })
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },

  updateDisciplina(
    store: ActionContext<SettingsState, any>,
    disciplina: Disciplina
  ) {
    axios
      .put(`/v2/disciplina/${disciplina.id}`, disciplina)
      .then(() => {})
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },

  deleteDisciplina(
    store: ActionContext<SettingsState, any>,
    disciplina: Disciplina
  ) {
    axios
      .delete(`/v2/disciplina/deletar/${disciplina}`)
      .then(() => {})
      .catch(error => {
        store.commit("settingError");
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }
};
