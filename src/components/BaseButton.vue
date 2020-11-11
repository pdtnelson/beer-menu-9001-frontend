<template>
    <button>{{ text }}</button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        text: String
    }
}
</script>

<style>
button {
    width: 150px;
    height: 75px;
    font-size: 2px;
    background-color: #660000;
}
</style>
