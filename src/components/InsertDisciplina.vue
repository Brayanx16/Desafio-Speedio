<template>
  <v-card class="mx-auto" tile raised>
    <v-card-title class="headline">Cadastro de Disciplina</v-card-title>
    <v-form>
      <v-container>
        <v-text-field
          id="nome"
          v-model="disciplina.nome"
          :autofocus="true"
          type="text"
          :counter="25"
          outlined
          label="Nome"
        />
        <v-text-field
          id="carga_horaria"
          v-model="disciplina.carga_horaria"
          type="number"
          outlined
          label="Carga Horaria"
          min="1"
        />
        <div class="text-center">
          <v-btn type="submit" @click.prevent="postDisciplina" color="primary"
            >Confirmar</v-btn
          >
        </div>
      </v-container>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { Disciplina } from "@/vuex/modules/settings/types";
const namespace: string = "settings";

@Component
export default class Insert extends Vue {
  public disciplina: Disciplina = { id: 0, nome: "", carga_horaria: 0 };

  @Action("insertDisciplina", { namespace }) insertDisciplina: any;
  @Getter("disciplinas", { namespace }) disciplinas!: Disciplina[];

  postDisciplina() {
    const data = {
      disciplinas: this.disciplinas,
      disciplina: this.disciplina
    };
    this.insertDisciplina(data);
    this.$notify({
      group: "alert",
      type: "success",
      title: "Alerta",
      text: "Disciplina cadastrada com sucesso"
    });
    this.disciplina = { id: 0, nome: "", carga_horaria: 0 };
  }
}
</script>
