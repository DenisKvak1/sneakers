<script setup>
const props = defineProps({
    product: Object
})
</script>

<template>
    <div class="myCard d-flex">
        <div class="imgWrap">
            <img :src="props.product.imageUrl" alt="">
        </div>
        <div>
            <project-black-text class="title ">{{props.product.title}}</project-black-text>
            <div class="d-flex align-items-baseline">
                <project-black-text class="price flex-shrink-0 mb-0">{{props.product.price}} руб.</project-black-text>
                <button class="delete"  @click="$emit('deleteInCart', props.product)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB"/>
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

button{
    margin-left: 72px;
    position: relative;
    top: -8px;
}
.delete{
    margin-top: auto;
    background: none;
    border: none;
}
.price{
    font-weight: 700;
}
.title{
    margin-bottom: 8px;
}
.imgWrap{
    width: 70px;
    margin-right: 21px;
}
.imgWrap img{
    width: 70px;
    margin-top: 8px;
}
.myCard{
    padding: 30px 20px;
    width: 100%;
    height: 119px;
    border-radius: 20px;
    border: 1px solid #F3F3F3;
    background: #FFF;
}
</style>