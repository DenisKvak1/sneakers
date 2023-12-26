<script setup>
import {onMounted, ref, watch} from "vue";
import MyOffCanvas from "@/components/MyOffCanvas.vue";
import MainHeader from "@/components/mainHeader.vue";
import {loadData, readFromSessionStorage, saveData, writeToSessionStorage} from "@/modules/saveLoadData";
import ShoesItemStore from "@/components/shoesItemStore.vue";
import router from "@/router/router";
import ProjectGreyText from "@/components/UI/ProjectGreyText.vue";
import ProjectGreenButton from "@/components/UI/ProjectGreenButton.vue";

let cart=ref([])
let products=ref([])
let bookMarks=ref([])
let buyHistory=ref([])

watch(bookMarks, (newD) => {
    saveData('bookMarks',newD)
}, {deep:true});
watch(cart, (newD) => {
    saveData('cart',newD)
}, {deep:true});
watch(products, (newD) => {
    writeToSessionStorage('products',newD)
}, {deep:true});
watch(buyHistory, (newD) => {
    saveData('buyHistory',newD)
}, {deep:true});

onMounted( ()=>{
    let cartLoad=loadData('cart')
    if(cartLoad){
        cart.value=cartLoad
    }
    let ProductLoad=readFromSessionStorage('products')
    if(ProductLoad){
        products.value=ProductLoad
    }
    let bookMarksLoad=loadData('bookMarks')
    if(bookMarksLoad){
        bookMarks.value=bookMarksLoad
    }
    let buyHistoryD=loadData('buyHistory')
    if(buyHistoryD){
        buyHistory.value=buyHistoryD
    }
})
function addToCartHandler(data) {
    cart.value.push(data);
}
function deleteInCartHandler(data) {
    cart.value = cart.value.filter(item => item.id !== data.id);
}
function addDelBookMarksHandler(data) {
    bookMarks.value = bookMarks.value.filter(item => item.id !== data.id);
    let index= products.value.findIndex((item)=>item.id===data.id)
    products.value[index].like=false
}
function placeOrder(data){
    cart.value=[]
    buyHistory.value.push(...data)
}
</script>

<template>
    <div class="myContainerHead">
        <my-off-canvas @placeOrder="placeOrder" @deleteInCart="deleteInCartHandler"  :products="cart"></my-off-canvas>
        <main-header :products="cart"></main-header>
        <div v-if="bookMarks.length>0" class="bookmarks">
            <div class="d-flex align-items-center">
                <button @click="router.push('/')" class="back"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <rect x="0.5" y="0.5" width="34" height="34" rx="7.5" fill="white" stroke="#F2F2F2"/>
                    <path d="M19 22L14 17L19 12" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
                <project-black-text class="title mb-0">Мои закладки</project-black-text>
            </div>
            <div class="mainBM">
                    <shoes-item-store
                        v-for="mark in bookMarks"
                        :key="mark.id"
                        :product="mark"
                        @addToCart="addToCartHandler"
                        @AddBookMark="addDelBookMarksHandler"
                    >
                    </shoes-item-store>
            </div>
        </div>
        <div v-if="bookMarks.length===0" class="noBookMarks d-flex flex-column align-items-center">
            <img src="@/assets/images/smile.png" alt="">
            <project-black-text class="title2">Закладок нет :(</project-black-text>
            <project-grey-text class="podTitle">Вы ничего не добавляли в закладки</project-grey-text>
            <project-green-button class="buttonB" @click="router.push('/')">Вернуться назад</project-green-button>
        </div>
    </div>
</template>

<style scoped>
.noBookMarks{
    margin-top: 160px;
}
.buttonB{
    width: 245px;
}
.podTitle{
    font-size: 16px;
    margin-bottom: 70px;
}
.title{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 11px;

}
.title2{
    margin-top: 29px;
    font-weight: 700;
    font-size: 32px;
}
.list-item {
    display: inline-block;
    margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
    transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
.mainBM{
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
}
.back{
    background: none;
    border: none;
    outline: none;
    margin-right: 21px;
}
.bookmarks{
    padding: 44px 60px;
}
</style>