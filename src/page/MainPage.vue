<script setup>
import mainHeader from '@/components/mainHeader.vue';
import mainBanner from '@/components/mainBanner.vue';
import ShoesShop from "@/components/ShoesShop.vue";
import fetchData from "@/modules/FetchData";
import search from "@/modules/BasicSeachItem";
import mySort from "@/modules/DefaultSortPrice";
import {computed, onMounted, reactive, ref, watch} from "vue";
import MyOffCanvas from "@/components/MyOffCanvas.vue";
import {saveData, loadData} from "@/modules/saveLoadData";

let state=reactive({
    search:null,
    sortBy: 'Default'
})
let products=ref([])
let cart=ref([])
let bookMarks=ref([])
let buyHistory=ref([])
watch(bookMarks, (newD) => {
    saveData('bookMarks',newD)
}, {deep:true});
watch(buyHistory, (newD) => {
    saveData('buyHistory',newD)
}, {deep:true});
watch(cart, (newD) => {
    saveData('cart',newD)
}, {deep:true});
watch(products, (newD) => {
    saveData('products',newD)
}, {deep:true});
function mergeProducts(productsFromServer, localProducts) {
    const mergedProducts = [];

    productsFromServer.forEach(serverProduct => {
        const localProduct = localProducts.find(localProduct => localProduct.id === serverProduct.id);

        if (localProduct) {
            mergedProducts.push({
                ...localProduct,
                ...serverProduct,
                like: localProduct.like
            });
        } else {
            mergedProducts.push(serverProduct);
        }
    });

    return mergedProducts;
}
onMounted(async  ()=>{
    let ProductLoad=loadData('products')
    if(ProductLoad){
        products.value=ProductLoad
    }
    let productsLoadServer=await fetchData('http://213.227.241.132:3000/sneakers')
    if(productsLoadServer.length>products.value.length){
        products.value = mergeProducts(productsLoadServer, products.value);
    }
    let cartLoad=loadData('cart')
    if(cartLoad){
        cart.value=cartLoad
    }
    let bookMarksData=loadData('bookMarks')

    if(bookMarksData){
        bookMarks.value=bookMarksData
    }
    let buyHistoryD=loadData('buyHistory')
    if(buyHistoryD){
        buyHistory.value=buyHistoryD
    }
})
const sortFilterSearch = computed(() => {
    const sortedProducts = mySort(products.value, state.sortBy)
    const searchedProducts = search(sortedProducts, state.search)
    return searchedProducts
})
function addToCartHandler(data) {
    cart.value.push(data);
}
function deleteInCartHander(data) {
    cart.value = cart.value.filter(item => item.id !== data.id);
}
function addDelBookMarksHandler(data) {
    let doExist=bookMarks.value.some(item => item.id === data.id)
    console.log(doExist, data)
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
        <my-off-canvas @placeOrder="placeOrder" @deleteInCart="deleteInCartHander" :products="cart"></my-off-canvas>
        <main-header :products="cart"></main-header>
        <div class="myContainerMain">
            <main-banner :image-url="require('@/assets/images/Banner.png')" class="banner"></main-banner>
            <shoes-shop
                @addToCart="addToCartHandler"
                @sort="(data)=>state.sortBy=data"
                @search="(data)=>state.search=data"
                :products="sortFilterSearch" class="store"
                @AddBookMark="addDelBookMarksHandler"
            >
            </shoes-shop>
        </div>
    </div>
</template>

<style scoped>
.myContainerMain {
    margin-left: auto;
    margin-right: auto;
    width: 960px;
}
.banner{
    margin-top: 45px;
}
.store{
    margin-top: 39px;
}
</style>
