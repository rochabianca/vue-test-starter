import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

it("renders without error", () => {
  const wrapper = shallowMount(Home);
  expect(wrapper.html()).toContain('data-test="home-component"');
});
it("renders increment button", () => {});
it("renders counter display", () => {});
it("starts the counter on zero", () => {});
it("button click increments the counter display", () => {});
it("renders a decrement button", () => {});
it("clicking on the decrement button decrements the counter display", () => {});
it("if the counter is at zero, the decrement button dont decrements", () => {});
it("if you try to decrement zero, you get a error message", () => {});
it("if you increment after try to decrement zero, the error message desapears", () => {});
