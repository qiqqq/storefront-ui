import { shallowMount } from "@vue/test-utils";
import SfCollectedProduct from "@/components/organisms/SfCollectedProduct.vue";

describe("SfCollectedProduct.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(SfCollectedProduct);
    expect(component.contains(".sf-collected-product")).toBe(true);
  });
});
