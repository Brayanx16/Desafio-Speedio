<template>
  <v-content>
    <v-container fluid>
      <v-card>
        <v-card-title class="headline">
          <v-row>
            <v-col class="style-mobile-font" align-self="center" cols="6">
              Lista de Usuários
            </v-col>
            <v-col align-self="center" class="text-right" cols="6">
              <c-btn
                type="button"
                @click="insertRouter"
                text_button="Cadastrar"
              />
            </v-col>
          </v-row>
        </v-card-title>
        <v-container>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Nome Completo</th>
                  <th v-show="width >= 500" class="text-left">E-mail</th>
                  <th v-show="width >= 500" class="text-left">CPF</th>
                  <th v-show="width >= 500" class="text-center">Idade</th>
                  <th class="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" :key="index">
                  <td>{{ user.name }}</td>
                  <td v-show="width >= 500">{{ user.email }}</td>
                  <td v-show="width >= 500">{{ user.cpf }}</td>
                  <td v-show="width >= 500" class="text-center">
                    {{ user.age }}
                  </td>
                  <td class="text-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          x-small
                          @click.prevent="editUser(user)"
                          class="mr-2"
                          color="primary"
                          v-on="on"
                          ><v-icon :small="true"
                            >mdi-pencil-outline</v-icon
                          ></v-btn
                        >
                      </template>
                      <span>Editar</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          @click.prevent="openModalDelete(user)"
                          x-small
                          color="error"
                          v-on="on"
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
        </v-container>
      </v-card>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">Confirmação</v-card-title>
          <v-card-text>Deseja excluir o usuário?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" small @click.prevent="eliminateUser"
              >Confirmar</v-btn
            >
            <v-btn color="error" small @click.prevent="dialog = false"
              >Cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar
        v-model="snackbar"
        color="success"
        :top="true"
        :multi-line="true"
        :timeout="2000"
      >
        Usuário excluido com sucesso
        <v-icon dark>mdi-checkbox-marked-circle-outline</v-icon>
      </v-snackbar>
      <v-snackbar
        v-model="snackbarError"
        color="error"
        :top="true"
        :multi-line="true"
        :timeout="2000"
      >
        Erro inesperado, tente novamente mais tarde
        <v-icon dark>mdi-checkbox-marked-circle-outline</v-icon>
      </v-snackbar>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import { User } from "@/vuex/modules/settings/types";
import Button from "../shared/components/button.custom.vue";
const namespace: string = "settings";

@Component({ components: { "c-btn": Button } })
export default class Listagem extends Vue {
  public dialog = false;
  public snackbar = false;
  public snackbarError = false;
  public user = { id: "", name: "", email: "", cpf: "", age: "" };
  public width = screen.width;

  @Action("fetchUsers", { namespace }) fetchUsers: any;
  @Mutation("setUser", { namespace }) setUser: any;
  @Action("deleteUser", { namespace }) deleteUser: any;
  @Getter("users", { namespace }) users!: User[];
  @Getter("errorStatus", { namespace }) errors!: User[];

  mounted() {
    this.fetchUsers();
  }

  openModalDelete(user: any) {
    this.user = user;
    this.dialog = true;
  }

  eliminateUser() {
    const user: any = this.user;
    this.deleteUser(user.id)
      .then(() => {
        let pos_user = this.users.indexOf(user);
        this.users.splice(pos_user, 1);
        this.snackbar = true;
        this.dialog = false;
      })
      .catch((error: any) => {
        this.snackbarError = true;
        this.dialog = false;
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  editUser(user: User) {
    this.setUser(user);
    this.$router.push(`usuario/editar/${user.id}/`);
  }

  insertRouter() {
    this.$router.push(`usuario/cadastro`);
  }
}
</script>

<style lang="css" scoped>
@media only screen and (max-width: 499px) {
  .style-mobile-font {
    font-size: 18px;
  }

  .style-mb-20 {
    margin-bottom: 20px !important;
  }
}
</style>
