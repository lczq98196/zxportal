<template>
  <div class="top-banner" :style="`height:370px;background:url('${imgUrl}')`"></div>
</template>

<script>
export default {
    props:["imgUrl"]
};
</script>

<style lang="scss" scoped>
.top-banner {
  background-repeat: no-repeat;
  width: 100%;
  margin-top: 10px;
}
</style>