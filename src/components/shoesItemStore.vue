<script setup>
import {defineProps, defineEmits, ref} from 'vue';

let add=ref()
const props = defineProps({
    product: Object
});
const emit = defineEmits('addToCart');
function addToCart() {
    emit('addToCart', props.product);
    add.value=true
    setTimeout(()=>add.value=false, 3000)
}
</script>

<template>
    <div class="card d-flex flex-column">
        <button :class="{ likeB: props.product.like}" class="blockLike" @click="$emit('AddBookMark', product)">
            <div class="likeBtn" >
                <svg :class="{ likeSvg: props.product.like}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path :class="{ likePath: props.product.like}" d="M13.8609 3.07455C13.5204 2.73389 13.1161 2.46365 12.6711 2.27927C12.2261 2.0949 11.7492 2 11.2675 2C10.7859 2 10.3089 2.0949 9.86396 2.27927C9.41898 2.46365 9.0147 2.73389 8.67419 3.07455L7.96753 3.78122L7.26086 3.07455C6.57307 2.38676 5.64022 2.00036 4.66753 2.00036C3.69484 2.00036 2.76199 2.38676 2.07419 3.07455C1.3864 3.76235 1 4.69519 1 5.66788C1 6.64057 1.3864 7.57342 2.07419 8.26122L2.78086 8.96788L7.96753 14.1546L13.1542 8.96788L13.8609 8.26122C14.2015 7.92071 14.4718 7.51643 14.6561 7.07145C14.8405 6.62648 14.9354 6.14954 14.9354 5.66788C14.9354 5.18623 14.8405 4.70929 14.6561 4.26431C14.4718 3.81934 14.2015 3.41505 13.8609 3.07455Z" stroke="#EAEAEA"  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </button>
        <div class="imgWrap">
            <img :src="props.product.imageUrl" alt="">
        </div>
        <project-black-text class="mt-14 mb-0 ">{{props.product.title}}</project-black-text>
        <div class="mt-14 d-flex">
            <div class="flex-grow-1">
                <project-grey-text class="price mb-0">ЦЕНА: </project-grey-text>
                <project-black-text class="priceCount mb-0">{{props.product.price}} руб.</project-black-text>
            </div>
                <button v-if="!add" class="btnAdd" @click="addToCart">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2"/>
                        <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3"/>
                    </svg>
                </button>
                <button  v-if="add" class="btnRes"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_60_200)"/>
                    <g clip-path="url(#clip0_60_200)">
                        <g filter="url(#filter0_d_60_200)">
                            <path d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z" fill="white"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_60_200" x="10.6665" y="11.3298" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_200"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_200" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_60_200" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#89F09C"/>
                            <stop offset="1" stop-color="#3CC755"/>
                        </linearGradient>
                        <clipPath id="clip0_60_200">
                            <rect width="10.6667" height="10.6667" fill="white" transform="translate(10.6667 10.6667)"/>
                        </clipPath>
                    </defs>
                </svg>
                </button>
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