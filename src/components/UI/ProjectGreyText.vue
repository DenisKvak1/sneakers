<script>
export default {
  name: "ProjectGreyText",
};
</script>

<template>
  <p><slot></slot></p>
</template>

<style scoped>
p {
  color: #5c5c5c;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
