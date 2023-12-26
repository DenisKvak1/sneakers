<script setup>

import ShoesItemStore from "@/components/shoesItemStore.vue";
import SortInput from "@/components/UI/SortInput.vue";
const props = defineProps({
    products: Array
})


</script>

<template>
    <div>
        <div class="d-flex align-items-center titleBlock">
            <project-black-text class="me-auto title">Все кроссовки</project-black-text>
            <sort-input @myChange="(data)=>$emit('sort',data)"></sort-input>
            <search-input @myChange="(data)=>$emit('search',data)"></search-input>

        </div>
        <div class="shoes-block">
            <transition-group name="list">
                <shoes-item-store
                    @addToCart="(data)=>$emit('addToCart', data)"
                    v-for="product in props.products" :key="product.id"
                    @AddBookMark="$emit('AddBookMark', product)"
                    :product="product"></shoes-item-store>
            </transition-group>
        </div>
    </div>
</template>

<style scoped>
.list-move {
    transition: transform 0.8s ease;
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
.title{
    font-size: 32px;
    font-weight: 700;
}
.titleBlock{
    margin-bottom: 36px;
}
.shoes-block{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    padding-bottom: 24px;
}
</style>