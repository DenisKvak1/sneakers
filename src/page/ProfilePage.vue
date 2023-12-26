<script setup>
import {onMounted, ref, watch} from "vue";
import MyOffCanvas from "@/components/MyOffCanvas.vue";
import MainHeader from "@/components/mainHeader.vue";
import {loadData, readFromSessionStorage, saveData, writeToSessionStorage} from "@/modules/saveLoadData";
import historyItem from "@/components/historyItem.vue";
import router from "@/router/router";

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
    let doExist=bookMarks.value.some(item => item.id === data.id)
    if(!doExist){
        bookMarks.value.push(data)
        let index= products.value.findIndex((item)=>item.id===data.id)
        products.value[index].like=true
    }
    else{
        bookMarks.value = bookMarks.value.filter(item => item.id !== data.id);
        let index= products.value.findIndex((item)=>item.id===data.id)
        products.value[index].like=false
    }
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
        <div v-if="buyHistory.length>0" class="buyHistory">
            <div class="d-flex align-items-center">
                <button @click="router.push('/')" class="back"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <rect x="0.5" y="0.5" width="34" height="34" rx="7.5" fill="white" stroke="#F2F2F2"/>
                    <path d="M19 22L14 17L19 12" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
                <project-black-text class="title mb-0">Мои покупки</project-black-text>
            </div>
            <div class="mainBM">
                <historyItem
                    v-for="product in buyHistory"
                    :key="product.id"
                    :product="product"
                    @addToCart="addToCartHandler"
                    @AddBookMark="addDelBookMarksHandler"
                >
                </historyItem>
            </div>
        </div>
        <div v-if="buyHistory.length===0" class="noBookMarks d-flex flex-column align-items-center">
            <img src="@/assets/images/smile2.png" alt="">
            <project-black-text class="title2">У вас нет заказов(</project-black-text>
            <project-grey-text class="podTitle text-center">Оформите хотя бы один заказ.</project-grey-text>
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
.title2{
    margin-top: 29px;
    font-weight: 700;
    font-size: 32px;
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
.title{
    font-weight: 700;
    font-size: 32px;
}
.buyHistory{
    padding: 44px 60px;
}
</style>