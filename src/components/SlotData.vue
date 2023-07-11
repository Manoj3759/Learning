<template>
    <div class="card">
        <div class="head">
            <slot name="head" :header="heading"></slot>
        </div>
        <div class="body">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name:"SlotData-comp",
        data(){
            return{
            heading:"HEAD",
            content:"BODY",
        }
    }
        
    }
</script>

<style lang="less" scoped>

</style>