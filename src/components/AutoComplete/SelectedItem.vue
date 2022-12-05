<template>
  <div class="selected-item">
    {{ item[keyName] }}
    <div class="icon-remove" @click="onRemoveItem">
      <IconCancel />
    </div>
  </div>
</template>

<script>
import IconCancel from "../Icons/IconCancel.vue";
export default {
  components: { IconCancel },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    keyName: {
      type: String,
      default: () => "name",
    },
  },
  methods: {
    onRemoveItem() {
      this.$emit("onRemoveItem");
    },
  },
};
</script>

<style lang="scss" scoped>
.selected-item {
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background: #f0f4f8;
  height: 32px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #627d98;
  font-size: 14px;
  width: max-content;
  line-height: 20px;
  ::v-deep svg {
    fill: #627d98;
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
}
</style>
