<template>
    <div class="v-product-popup">
        <span>aaaaa</span>
        <q-btn color="deep-orange">BUUUUTTTTOOONNN</q-btn>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:"v-product-popup",
    
    setup() {
        
    },
})
</script>

<style scoped lang="scss">
.v-product-popup{
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50px;
    right: 0;
    left: 0;
    width: 400px;
}
</style>
