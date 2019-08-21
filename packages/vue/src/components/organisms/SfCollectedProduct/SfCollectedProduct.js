import SfImage from "../../molecules/SfImage/SfImage.vue";
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";

export default {
  name: "SfCollectedProduct",
  props: {
    regularPrice: {
      type: [Number, String],
      default: 0
    },
    specialPrice: {
      type: [Number, String],
      default: 0
    }
  },
  components: {
    SfImage,
    SfPrice
  }
};
