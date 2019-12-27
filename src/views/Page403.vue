<template>
  <div class="app">
    <v-app>
      <v-content>
        <v-container class="fill-height style-background" fluid>
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="style-text">403</h1>
            </v-col>
            <v-col class="text-center" cols="12">
              <h2>Você não tem autorização para acessar essa página !</h2>
            </v-col>
            <v-col class="text-center" cols="12">
              <router-link :to="{ name: 'Login' }">
                <c-btn text_button="Realizar Login Novamente" />
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import Button from "../shared/components/button.custom.vue";

@Component({ components: { "c-btn": Button } })
export default class Page403 extends Vue {}
</script>

<style lang="css">
.style-background {
  background-color: #f2f2f2 !important;
}
.style-text {
  font-size: 4.5rem;
}
</style>
