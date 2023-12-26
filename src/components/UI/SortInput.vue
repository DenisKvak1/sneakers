<template>
    <select class="me-4" @change="$emit('myChange', $event.target.value)">
        <option value="Default">По умолчанию</option>
        <option value="Up">От дешёвых к дорогим</option>
        <option value="Down">От дорогих к дешёвым</option>
    </select>
</template>

<script>
export default {
    name: "SortSelect",
};
</script>


<style scoped>
select {
    caret-color: #C4C4C4;
    padding: 13px 18px;
    outline: none;
    width: 250px;
    border-radius: 10px;
    border: 1px solid #F3F3F3;
    color: #515151;
}

select:focus {
    outline: none;
}

select:active {
    outline: none;
}

option {
    color: #515151;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
