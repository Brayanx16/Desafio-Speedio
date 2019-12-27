<template>
  <v-content>
    <v-container fluid>
      <v-card class="mx-auto" tile raised>
        <v-card-title class="headline">Cadastro de Usuário</v-card-title>
        <v-form>
          <v-container fluid>
            <v-row>
              <v-col cols="6">
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
              <v-col cols="6">
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
            <v-row>
              <v-col class="text-right" cols="6">
                <v-btn type="submit" @click.prevent="putUser" color="primary">
                  Confirmar
                </v-btn>
              </v-col>
              <v-col class="text-left" cols="6">
                <v-btn @click.prevent="resetForm" color="error">Cancelar</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
      <v-snackbar
        v-model="snackbar"
        color="success"
        :top="true"
        :multi-line="true"
        :timeout="2000"
      >
        Usuário atualizado com sucesso
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
import { State, Action, Getter } from "vuex-class";
import { User } from "@/vuex/modules/settings/types";
const namespace: string = "settings";

@Component
export default class Insert extends Vue {
  public snackbar = false;
  public snackbarError = false;

  @Action("updateUser", { namespace }) updateUser: any;
  @State("user", { namespace }) user!: User;

  putUser() {
    this.updateUser(this.user)
      .then(() => {
        this.snackbar = true;
      })
      .catch((error: any) => {
        this.snackbarError = true;
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  resetForm() {
    this.$router.push("/admin/usuarios");
  }
}
</script>
