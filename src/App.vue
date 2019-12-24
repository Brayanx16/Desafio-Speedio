<template>
  <router-view />
  <!-- <v-app> -->
  <!-- <notifications class="mt-3" position="center" group="alert" />
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-content>
        <v-row>
          <v-col cols="6">
            <Insert />
          </v-col>
          <v-col cols="6">
            <Disciplina />
          </v-col>
        </v-row>
      </v-content>
    </v-container> -->
  <!-- </v-app> -->
</template>

<script lang="ts">
import Insert from "./components/InsertDisciplina.vue";
import Disciplina from "./components/ListDisciplina.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Insert,
    Disciplina
  }
})
export default class App extends Vue {}
</script>
