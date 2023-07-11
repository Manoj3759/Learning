<template>
  <div>
    <h1>POP up</h1>
    <input type="text" v-model="Username" />
    <button @click="$emit('close', Username)">close</button>
  </div>
</template>

<script>
export default {
  name: "Pop-comp",
  emits: {
    close: (Username) => {
      if (!Username) {
        return false;
      } else {
       return true;
      }
    },
  },
  data() {
    return {
      Username: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>