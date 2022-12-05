<template>
  <div class="page-layout">
    <div class="title">Tìm kiếm thành phố (max 3)</div>
    <InputAutoComplete
      placeholder="Nhập tên thành phố để tìm kiếm"
      v-model="keyword"
      :options="listOptions"
      :keyId="keyId"
      :keyName="keyName"
      :maxChoice="3"
      :listSelected="selectedCities"
      @onSelectItem="onSelectItem"
      @onRemoveItem="onRemoveItem"
    />
  </div>
</template>

<script>
import InputAutoComplete from "./AutoComplete/InputAutoComplete.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { InputAutoComplete },
  data() {
    return {
      keyword: "",
      keyName: "name",
      keyId: "code",
      selectedCities: [],
    };
  },
  async created() {
    await this.fetchListCities();
  },
  computed: {
    ...mapGetters("city", ["getCities"]),
    listOptions() {
      return (
        (this.keyword.length &&
          this.getCities.filter((c) =>
            c[this.keyName].toLowerCase().includes(this.keyword.toLowerCase())
          )) ||
        []
      );
    },
  },
  methods: {
    ...mapActions("city", ["fetchListCities"]),
    onSelectItem(item) {
      this.selectedCities.push(item);
    },
    onRemoveItem(item) {
      this.selectedCities = this.selectedCities.filter(
        (c) => c[this.keyId] != item[this.keyId]
      );
    },
  },
};
</script>
<style scoped lang="scss">
.page-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .title {
    width: 100%;
  }
  ::v-deep .input-complete {
    width: 100%;
  }
}
</style>
