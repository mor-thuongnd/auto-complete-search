<template>
  <div class="page-layout">
    <div class="title">Tìm kiếm người dùng</div>
    <InputAutoComplete
      placeholder="Nhập tên người dùng"
      v-model="keyword"
      :options="listOptions"
      :keyId="keyId"
      :keyName="keyName"
      :maxChoice="5"
      :listSelected="selectedUsers"
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
      keyId: "id",
      selectedUsers: [],
    };
  },
  async created() {
    await this.fetchListUsers();
  },
  computed: {
    ...mapGetters("user", ["getUsers"]),
    listOptions() {
      return (
        (this.keyword.length &&
          this.getUsers.filter((c) =>
            c[this.keyName].toLowerCase().includes(this.keyword.toLowerCase())
          )) ||
        []
      );
    },
  },
  methods: {
    ...mapActions("user", ["fetchListUsers"]),
    onSelectItem(item) {
      this.selectedUsers.push(item);
    },
    onRemoveItem(item) {
      this.selectedUsers = this.selectedUsers.filter(
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
