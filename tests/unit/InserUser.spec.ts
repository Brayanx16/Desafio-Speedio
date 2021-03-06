import { shallowMount } from "@vue/test-utils";
import InsertUser from "@/components/InsertUser.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

describe("InsertUser.vue", () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = shallowMount(InsertUser);
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("checking if the properties are in the component", () => {
    const expected = ["id", "name", "email", "password", "cpf", "age"];
    const received = Object.keys(wrapper.vm.user);
    expect(expected).toEqual(received);
  });

  it("checking the values initially", () => {
    expect(wrapper.vm.user.id).toBe(0);
    expect(wrapper.vm.user.name).toBe("");
    expect(wrapper.vm.user.email).toBe("");
    expect(wrapper.vm.user.password).toBe("");
    expect(wrapper.vm.user.cpf).toBe("");
    expect(wrapper.vm.user.age).toBe(0);
  });
});
