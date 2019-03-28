import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Home);
  });
  it("renders without error", () => {
    expect(wrapper.html()).toContain('data-test="home-component"');
  });
  it("renders increment button", () => {
    expect(wrapper.html()).toContain('data-test="increment-button"');
  });
  it("renders counter display", () => {
    expect(wrapper.html()).toContain('data-test="count-display"');
  });
  it("starts the counter on zero", () => {
    expect(wrapper.vm.count).toBe(0);
  });
  it("button click increments the counter display", () => {
    expect(wrapper.vm.count).toBe(0);
    const incrementButton = wrapper.find('[data-test="increment-button"]');
    incrementButton.trigger("click");
    expect(wrapper.vm.count).toBe(1);
  });
  it("renders a decrement button", () => {
    expect(wrapper.html()).toContain('data-test="decrement-button"');
  });
  it("clicking on the decrement button decrements the counter display", () => {
    wrapper.vm.count = 1;
    expect(wrapper.vm.count).toBe(1);
    const decrementButton = wrapper.find('[data-test="decrement-button"]');
    decrementButton.trigger("click");
    expect(wrapper.vm.count).toBe(0);
  });
  it("if the counter is at zero, the decrement button dont decrements", () => {
    expect(wrapper.vm.count).toBe(0);
    const decrementButton = wrapper.find('[data-test="decrement-button"]');
    decrementButton.trigger("click");
    expect(wrapper.vm.count).toBe(0);
  });
  it("if you try to decrement zero, you get a error message", () => {});
  it("if you increment after try to decrement zero, the error message desapears", () => {});
});
