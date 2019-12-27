<template>
  <v-btn
    :class="{ style_custom }"
    :color="color"
    :text="text"
    :elevation="elevation"
    :height="height"
    :rounded="rounded"
    :type="type"
    @click.prevent="click()"
  >
    {{ text_button }}
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({ default: "#0072AF" }) public color: string;
  @Prop({ default: false }) public text: boolean;
  @Prop({ default: 5 }) public elevation: number;
  @Prop({ default: 40 }) public height: number;
  @Prop({ default: true }) public rounded: boolean;
  @Prop({ default: true }) public style_custom: boolean;
  @Prop({ default: "btn_custom" }) public text_button: string;
  @Prop({ default: "submit" }) public type: string;

  @Emit("click")
  public click(event: MouseEvent): MouseEvent {
    return event;
  }
}
</script>

<style lang="css" scoped>
.style_custom {
  color: #f2f2f2;
}
</style>
