<script>
export default {
  name: "ProjectBlackText",
};
</script>

<template>
  <p><slot></slot></p>
</template>

<style scoped>
p {
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
