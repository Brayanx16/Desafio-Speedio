import { SettingsState, Disciplina } from "./types";

export default {
  disciplinas(state: SettingsState): Disciplina[] {
    return state.disciplinas;
  },
  errorStatus(state: SettingsState): boolean {
    return state.error;
  }
};
