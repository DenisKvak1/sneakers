<script>
export default {
    name: "ProjectGreenButton",
};
</script>

<template>
<button><slot></slot></button>
</template>

<style scoped>
button{
    background: none;
    border: none;
    border-radius: 18px;
    background: #9DD458;
    padding: 18px 10px;
    color: #FFF;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>