<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row class="text-center">
        <v-col cols="12">
          <h1>TESTE SPEEDIO</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto" max-width="800" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-3">
                  Projeto com Vuex - Vue-Persist - Vuetify - Typescript
                </v-list-item-title>
                <v-list-item-subtitle class="mb-2">
                  1 - Criar um layout com sidebar e Conteúdo principal
                  adaptativo.
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-2">
                  2 - Trabalhar com rotas para alteração dos components, usando
                  Guards.
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-2">
                  3 - Testar os componentes (Vuetify).
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
