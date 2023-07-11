<template>
  <div>
    <h1>HI HOW ARE YOU?</h1>
    <h2>{{ msg }} - {{ msg1 }} -{{ wish }}</h2>
  </div>
</template>

<script>
export default {
  name:"Greet-component" ,
  props: ["msg","msg1","wish"],
};
</script>