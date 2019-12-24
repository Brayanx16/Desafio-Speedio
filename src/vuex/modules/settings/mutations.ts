import { SettingsState, Disciplina } from "./types";

export default {
  setDisciplinas(state: SettingsState, data: Disciplina[]) {
    state.disciplinas = data;
    state.error = false;
  },
  settingError(state: SettingsState) {
    state.error = true;
  }
};
