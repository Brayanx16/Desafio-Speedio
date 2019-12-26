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
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nome Completo</th>
                <th class="text-left">E-mail</th>
                <th class="text-left">CPF</th>
                <th class="text-center">Idade</th>
                <th class="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.cpf }}</td>
                <td class="text-center">{{ user.age }}</td>
                <td class="text-center">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn x-small class="mr-2" color="primary" v-on="on"
                        ><v-icon :small="true"
                          >mdi-pencil-outline</v-icon
                        ></v-btn
                      >
                    </template>
                    <span>Editar</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn x-small color="error" v-on="on"
                        ><v-icon :small="true">mdi-delete</v-icon></v-btn
                      >
                    </template>
                    <span>Deletar</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
