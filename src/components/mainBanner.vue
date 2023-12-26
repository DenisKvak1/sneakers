<script setup>
const props = defineProps(['imageUrl']);

</script>

<template>
    <div class="banner">
        <img :src="props.imageUrl" alt="">
        <ProjectGreenButton  class="bannerButton">Купить</ProjectGreenButton>
    </div>
</template>

<style scoped>
.banner{
    width: 960px;
    height: 300px;
}
.banner img{
    position: absolute;
}
.bannerButton{
    position: relative;
    width: 177.459px;
    border-radius: 110px;
    background: #A5D364;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 201px;
    margin-left: 60px;
    z-index: 1001;
}
</style>