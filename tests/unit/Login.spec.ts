import { shallowMount } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

describe("Login.vue", () => {
  let wrapper: any;

  beforeAll(() => {
    wrapper = shallowMount(Login);
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("checking if the properties are in the component", () => {
    const expected = ["email", "password"];
    const received = Object.keys(wrapper.vm.user);
    expect(expected).toEqual(received);
  });

  it("checking the values initially", () => {
    expect(wrapper.vm.user.email).toBe("");
    expect(wrapper.vm.user.password).toBe("");
  });
});
