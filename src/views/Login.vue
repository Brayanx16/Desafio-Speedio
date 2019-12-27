<template>
  <div class="app">
    <v-app>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-5">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="user.email"
                    outlined
                    label="E-mail"
                    :autofocus="true"
                    :counter="150"
                    name="email"
                    type="email"
                  />
                  <v-text-field
                    v-model="user.password"
                    outlined
                    id="password"
                    label="Senha"
                    :counter="25"
                    name="password"
                    type="password"
                  />
                  <div class="text-center">
                    <c-btn @click="accessLogin" text_button="Acessar" />
                  </div>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-snackbar
          v-model="snackbar"
          color="error"
          :top="true"
          :right="true"
          :multi-line="true"
          :timeout="3000"
        >
          Impossível fazer login com as credenciais fornecidas
        </v-snackbar>
      </v-container>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import { User } from "@/vuex/modules/settings/types";
import Button from "../shared/components/button.custom.vue";

const namespace: string = "settings";

@Component({ components: { "c-btn": Button } })
export default class Login extends Vue {
  public user = { email: "", password: "" };
  public snackbar = false;

  @Action("login", { namespace }) login: any;

  accessLogin() {
    this.login(this.user)
      .then(() => {
        this.$router.push("/admin");
      })
      .catch((error: any) => {
        this.snackbar = true;
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }
}
</script>
