export interface Disciplina {
  id: number;
  nome: String;
  carga_horaria: number;
}
export interface SettingsState {
  disciplinas: Disciplina[];
  error: boolean;
}
