<script setup>
import {defineProps} from 'vue';

const props = defineProps({
    product: Object
});
</script>

<template>
    <div class="card d-flex flex-column">
        <div class="imgWrap">
            <img :src="props.product.imageUrl" alt="">
        </div>
        <project-black-text class="mt-14 mb-0 ">{{props.product.title}}</project-black-text>
        <div class="mt-14 d-flex">
            <div class="flex-grow-1">
                <project-grey-text class="price mb-0">ЦЕНА: </project-grey-text>
                <project-black-text class="priceCount mb-0">{{props.product.price}} руб.</project-black-text>
            </div>
        </div>
    </div>
</template>

<style scoped>
.likePath{
    stroke: none;
}
.priceCount{
    font-weight: 700;
}
.price{
    color: #BDBDBD;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
}
.mt-14{
    margin-top: 14px;
}
.card{
    width: 210px;
    height: 260px;
    border-radius: 40px;
    border: 1px solid #F3F3F3;
    background: #FFF;
    padding: 20px 29px 34px;
}
.likeSvg{
    fill: #FF8585;
}

.blockLike{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7px;
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 7px;
    border: 1px solid #F8F8F8;
    background: #FFFFFF;
}
.likeBtn, .btnAdd, .btnRes{
    background: none;
    border: none;
    outline: none;
}
.likeB{
    background: #FEF0F0;
}
.imgWrap{
    height: 112px;
}
.imgWrap img{
    width: 100%;
    margin-top: 28px;
}




</style>