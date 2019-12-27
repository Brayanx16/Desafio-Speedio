<template>
  <v-content>
    <v-container fluid>
      <v-card class="mx-auto" tile raised>
        <v-card-title class="headline">Editar Informações</v-card-title>
        <v-form>
          <v-container fluid>
            <v-row>
              <v-col lg="6" md="6" xl="6" cols="12">
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
              <v-col lg="6" md="6" xl="6" cols="12">
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
                <c-btn @click="putUser" text_button="Atualizar" />
              </v-col>
              <v-col class="text-left" cols="6">
                <c-btn
                  @click="resetForm"
                  color="error"
                  text_button="Cancelar"
                />
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
import Button from "../shared/components/button.custom.vue";
const namespace: string = "settings";

@Component({ components: { "c-btn": Button } })
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
