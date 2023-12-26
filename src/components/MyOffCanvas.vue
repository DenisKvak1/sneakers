<script setup>
import ProjectGreenButton from "@/components/UI/ProjectGreenButton.vue";
import CardInCart from "@/components/cardInCart.vue";
import {defineEmits, onMounted, ref} from "vue";

const emit = defineEmits('placeOrder');
let zakaz=ref(false)
const props = defineProps({
    products: Array
})

onMounted(()=>{
    document.getElementById('offcanvasRight').addEventListener('shown.bs.offcanvas', handleOffcanvasOpen);
})
function handleOffcanvasOpen(){
    zakaz.value=false
}
function placingOrder(){
    zakaz.value=true
    emit('placeOrder',props.products)
}
function backFunction(){
    setTimeout(()=>zakaz.value=false,300)
}
</script>

<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <project-black-text class="offcanvas-title" id="offcanvasRightLabel">Корзина</project-black-text>
        </div>
        <div class="offcanvas-body  d-flex flex-column">

            <div v-if="products.length>0 && !zakaz" class="main flex-grow-1">
                <transition-group name="list">
                    <card-in-cart @deleteInCart="(data)=>$emit('deleteInCart', data)" v-for="product in props.products" :key="product.id" :product="product"></card-in-cart>
                </transition-group>
            </div >
            <div v-if="products.length>0 && !zakaz"  class="order">
                <div class="d-flex align-items-baseline">
                    <project-black-text class="me-2 mb-0 itog">Итого:</project-black-text>
                    <div class="line"></div>
                    <project-black-text class="price ms-2 mb-0">{{props.products.reduce((sum, item) => sum + item.price, 0)}} руб.</project-black-text>
                </div>
                <div class="d-flex align-items-baseline">
                    <project-black-text class="me-2 mb-0 itog">Налог 5%:</project-black-text>
                    <div class="line"></div>
                    <project-black-text class="price nalog ms-2 mb-0">{{Math.round((props.products.reduce((sum, item) => sum + item.price, 0)*0.05)*100)/100}} руб.</project-black-text>
                </div>
                <project-green-button class="zakaz" @click="placingOrder">Оформить заказ</project-green-button>
            </div>
            <div v-if="products.length===0 && !zakaz" class="null d-flex flex-column align-items-center ms-auto me-auto mt-auto mb-auto">
                    <img src="@/assets/images/Box.png" alt="" height="120" width="120">
                    <project-black-text class="tt">Корзина пустая</project-black-text>
                    <project-grey-text class="text-center dn">Добавьте хотя бы одну пару <br> кроссовок, чтобы сделать заказ.</project-grey-text>
                    <project-green-button class="bn" data-bs-dismiss="offcanvas">Вернуться назад</project-green-button>
                </div>
            <div v-if="zakaz" class="null d-flex flex-column align-items-center ms-auto me-auto mt-auto mb-auto">
                <img src="@/assets/images/zakaz.png" alt="" height="120" width="120">
                <project-black-text class="tt greenTT">Заказ оформлен!</project-black-text>
                <project-grey-text class="text-center dn">Ваш заказ скоро будет передан <br> курьерской доставке</project-grey-text>
                <project-green-button class="bn" data-bs-dismiss="offcanvas" @click="backFunction">Вернуться назад</project-green-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.greenTT{
    color: #87C20A;
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
.bn{
    width: 245px;
    margin-top: 40px;
}
.tt{
    margin-top: 21px;
    font-size: 22px;
    font-weight: 600;
}
.dn{;
    line-height: 24px; /* 150% */
    font-weight: 500;
}
.offcanvas-header{
    padding: 0;
}
.offcanvas-body{
    padding: 0;
}
.offcanvas{
    width: 385px;
    padding: 32px 30px 48px;
}
.offcanvas-title{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
}
.zakaz{
    width: 100%;
    margin-top: 24px;
}
.line{
    width: 100%;
    height: 1px;
    border: 1px dashed #DFDFDF;
}
.price{
    font-weight: 600;
    flex-shrink: 0;
}
.nalog{
    margin-top: 19px;
}
.itog{
    flex-shrink: 0;
}
.main{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.order{
    padding-top: 30px;
}
</style>