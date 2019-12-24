<template>
  <v-content>
    <v-container fluid>
      <v-card class="mx-auto" tile raised>
        <v-card-title class="headline">Cadastro de Usuário</v-card-title>
        <v-form>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  id="name"
                  v-model="user.name"
                  :autofocus="true"
                  type="text"
                  :counter="150"
                  outlined
                  label="Nome Completo"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  id="email"
                  v-model="user.email"
                  type="email"
                  :counter="150"
                  outlined
                  label="Email"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col lg="6" md="6" sm="6" cols="12">
                <v-text-field
                  id="cpf"
                  v-model="user.cpf"
                  type="text"
                  outlined
                  label="CPF"
                />
              </v-col>
              <v-col lg="6" md="6" sm="6" cols="12">
                <v-text-field
                  id="age"
                  v-model="user.age"
                  type="number"
                  outlined
                  label="Idade"
                  min="1"
                />
              </v-col>
            </v-row>
            <v-row justify="center">
              <b-col>
                <v-btn
                  class="mr-2"
                  type="submit"
                  @click.prevent="postUser"
                  color="primary"
                >
                  Confirmar
                </v-btn>
              </b-col>
              <b-col>
                <v-btn @click.prevent="resetForm" class="ml-2" color="error"
                  >Cancelar</v-btn
                >
              </b-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-snackbar
        v-model="snackbar"
        color="success"
        :top="true"
        :multi-line="true"
        timeout="2000"
      >
        Cadastro realizado com sucesso <v-icon dark>mdi-check-bold</v-icon>
      </v-snackbar>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { User } from "@/vuex/modules/settings/types";
const namespace: string = "settings";

@Component
export default class Insert extends Vue {
  public user: User = { id: 0, name: "", email: "", cpf: "", age: 0 };
  public snackbar = false;

  @Action("insertUser", { namespace }) insertUser: any;

  postUser() {
    this.snackbar = true;
    this.insertUser(this.user);
    this.resetForm();
  }

  resetForm() {
    this.user = { id: 0, name: "", email: "", cpf: "", age: 0 };
  }
}
</script>
