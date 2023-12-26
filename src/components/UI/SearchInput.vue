<template>
    <input
        type="text"
        placeholder="Поиск..."
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value); $emit('myChange', $event.target.value)"
    >
</template>

<script>
export default {
    name: "SearchInput",
    props: {
        modelValue: String,
    },
}
</script>

<style scoped>
input {
    caret-color: #C4C4C4;
    padding: 13px 18px;
    outline: none;
    width: 250px;
    border-radius: 10px;
    border: 1px solid #F3F3F3;
    color: #515151;
}

input:focus {
    outline: none;
}

input:active {
    outline: none;
}

input::placeholder {
    color: #C4C4C4;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
