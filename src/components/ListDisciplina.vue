<template>
  <div class="Disciplina">
    <v-card>
      <v-card-title class="headline">Lista de Disciplinas</v-card-title>
      <v-container>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nome</th>
                <th class="text-center">Carga Horaria</th>
                <th class="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(disciplina, index) in disciplinas"
                :key="index"
                :value="disciplina.nome"
              >
                <td>{{ disciplina.nome }}</td>
                <td class="text-center">{{ disciplina.carga_horaria }}</td>
                <td class="text-center">
                  <v-tooltip left>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        class="mr-2"
                        small
                        @click.prevent="openModalDisciplina(disciplina, index)"
                        color="primary"
                        dark
                        v-on="on"
                      >
                        <v-icon size="20">mdi-pencil-outline</v-icon>
                      </v-btn>
                    </template>
                    <span>Editar</span>
                  </v-tooltip>
                  <v-tooltip right>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        small
                        @click.prevent="eliminateDisciplina(disciplina)"
                        color="error"
                        dark
                        v-on="on"
                      >
                        <v-icon size="20">mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Excluir</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="600">
        <v-card>
          <v-card-title class="headline">Disciplina</v-card-title>
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
            </v-container>
          </v-form>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" small @click.prevent="changeDisciplina">
              Atualizar
            </v-btn>
            <v-btn color="error" small @click="dialog = false">
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import { Disciplina } from "@/vuex/modules/settings/types";
const namespace: string = "settings";

@Component
export default class Listagem extends Vue {
  public dialog = false;
  public disciplina = { id: "", nome: "", carga_horaria: "" };

  @Action("fetchDisciplinas", { namespace }) fetchDisciplinas: any;
  @Action("updateDisciplina", { namespace }) updateDisciplina: any;
  @Action("deleteDisciplina", { namespace }) deleteDisciplina: any;
  @Getter("disciplinas", { namespace }) disciplinas!: Disciplina[];
  @Getter("errorStatus", { namespace }) errors!: Disciplina[];

  mounted() {
    this.fetchDisciplinas();
  }

  openModalDisciplina(disciplina: any) {
    this.disciplina = disciplina;
    this.dialog = true;
  }

  changeDisciplina() {
    this.updateDisciplina(this.disciplina);
    this.dialog = false;
    this.$notify({
      group: "alert",
      type: "success",
      title: "Alerta",
      text: "Disciplina atualizada com sucesso"
    });
  }

  eliminateDisciplina(disciplina: any) {
    let pos_disciplina = this.disciplinas.indexOf(disciplina);
    this.disciplinas.splice(pos_disciplina, 1);
    this.deleteDisciplina(disciplina.id);
    this.$notify({
      group: "alert",
      type: "success",
      title: "Alerta",
      text: "Disciplina excluida com sucesso"
    });
  }
}
</script>
