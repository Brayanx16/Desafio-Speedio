export interface User {
  id: number;
  name: String;
  email: String;
  cpf: String;
  age: number;
}
export interface SettingsState {
  users: User[];
  error: boolean;
}
