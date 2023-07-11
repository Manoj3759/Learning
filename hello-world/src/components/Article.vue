<template>
    <div>
        <h2>Article</h2>
        <h3>{{ title }}{{ likes }} Published {{ pub ? yes : no  }}</h3>
    </div>
</template>

<script>
    export default {
        name:"Article-comp",
        props:{
            title:{
                type:String,
                required:true,
                default:"default"
            },
            likes:Number,
            pub:Boolean,
        }
    }
</script>

<style lang="scss" scoped>

</style>