export interface User {
  id: number;
  name: String;
  email: String;
  password: String;
  cpf: String;
  age: number;
}
export interface SettingsState {
  users: User[];
  loginUser: User;
  user: User;
  error: boolean;
}
