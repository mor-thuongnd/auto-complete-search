<template>
  <div :class="['input-complete', isFocused && 'focus']">
    <div class="icon-search">
      <IconSearch />
    </div>
    <div class="d-flex">
      <template v-if="listSelected.length">
        <SelectedItem
          v-for="item in listSelected"
          :key="item[keyId]"
          :keyName="keyName"
          :item="item"
          @onRemoveItem="onRemoveItem(item)"
        />
      </template>
      <input
        v-if="!checkMaxChoices"
        type="text"
        :placeholder="placeholder"
        v-model="keyword"
        @input="onInputSearch"
        @focus="isFocused = true"
      />
    </div>
    <DropdownMenu
      v-if="showDropdown"
      :options="options"
      :keyId="keyId"
      :keyName="keyName"
      :listSelected="listSelected"
      @onSelectItem="onSelectItem"
    />
  </div>
</template>

<script>
import IconSearch from "@/components/Icons/IconSearch.vue";
import DropdownMenu from "@/components/AutoComplete/DropdownMenu.vue";
import SelectedItem from "./SelectedItem.vue";
export default {
  components: { IconSearch, DropdownMenu, SelectedItem },
  props: {
    listSelected: {
      type: Array,
      default: () => [],
    },
    maxChoice: {
      type: Number,
      required: false,
    },
    placeholder: {
      type: String,
      default: () => "Tìm kiếm",
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => "",
    },
    keyId: {
      type: String,
      default: () => "id",
    },
    keyName: {
      type: String,
      default: () => "name",
    },
  },
  computed: {
    showDropdown() {
      return this.isFocused && this.keyword.length;
    },
    checkMaxChoices() {
      return this.maxChoice && this.listSelected.length == this.maxChoice;
    },
  },
  data() {
    return {
      keyword: "",
      isFocused: false,
    };
  },
  methods: {
    onInputSearch() {
      this.$emit("input", this.keyword);
    },
    onSelectItem(item) {
      if (!this.checkMaxChoices) {
        this.keyword = "";
        this.isFocused = false;
        this.onInputSearch();
        this.$emit("onSelectItem", item);
      }
    },
    onRemoveItem(item) {
      this.$emit("onRemoveItem", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-complete {
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  min-height: 48px;
  width: 90vw;
  background: rgba(230, 249, 255, 0.2);
  position: relative;
  &.focus {
    border: 1px solid #1991d2;
  }
  .icon-search {
    height: 32px;
    display: flex;
    align-items: center;
  }
  .d-flex {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    align-items: center;
    input {
      outline: 0;
      border: none;
      width: 200px;
      height: 32px;
      background: transparent;
      &::placeholder {
        color: #bfbfbf;
      }
    }
  }
}
</style>
