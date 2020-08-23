<template>
    <div class="wai">
        <div class="nei"></div>
        <div class="clear-float"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.wai{
    border:1px solid red;
    position: relative;
    width: 200px;
    height:100px;
   overflow: hidden;
    .nei{
        background-color: blue;
        height: 100px;
        width: 100px;
        position: absolute;
        top: 50px;
    }
    // .clear-float{
    //     clear:both;
    // }
}
</style>