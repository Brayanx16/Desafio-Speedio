<template>
  <v-content>
    <v-container fluid>
      <v-card>
        <v-card-title class="headline">
          <v-row>
            <v-col align-self="center" cols="6">
              Lista de Usuários
            </v-col>
            <v-col align-self="center" class="text-right" cols="6">
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <router-link :to="{ name: 'Usuario' }">
                    <v-btn color="primary" dark v-on="on">Cadastrar</v-btn>
                  </router-link>
                </template>
                <span>Novo Usuário</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          class="elevation-1"
          no-data-text="Não há dados disponíveis"
        />
      </v-card>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { User } from "@/vuex/modules/settings/types";
const namespace: string = "settings";

@Component
export default class Listagem extends Vue {
  public dialog = false;
  public user = { id: "", name: "", email: "", cpf: "", age: "" };
  private headers = [
    { text: "Nome Completo", value: "name" },
    { text: "E-mail", value: "email" },
    { text: "CPF", value: "cpf" },
    { text: "Idade", value: "age" }
  ];

  @Action("fetchUsers", { namespace }) fetchUsers: any;
  @Action("updateUser", { namespace }) updateUser: any;
  @Action("deleteUser", { namespace }) deleteUser: any;
  @Getter("users", { namespace }) users!: User[];
  @Getter("errorStatus", { namespace }) errors!: User[];

  mounted() {
    this.fetchUsers();
  }

  modalDelete(user: any) {
    this.user = user;
    this.dialog = true;
  }

  changeUser() {
    this.updateUser(this.user);
    this.dialog = false;
  }

  eliminateUser(user: any) {
    let pos_user = this.users.indexOf(user);
    this.users.splice(pos_user, 1);
    this.deleteUser(user.id);
  }
}
</script>
