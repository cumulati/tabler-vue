<template>
    <div class="card-header">
        <slot><h3 class="card-title">{{ title }}</h3></slot>
        <div class="card-options" v-if="haveOptions">
            <a href="#" class="card-options-collapse" data-toggle="card-collapse" v-if="optionCollapse">
                <i class="fe fe-chevron-up"></i>
            </a>
            <a href="#" class="card-options-remove" data-toggle="card-remove" v-if="optionRemove">
                <i class="fe fe-x"></i>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card-header",
        props: {
            title: {default: '', type: String},
            optionCollapse: {default: false, type: Boolean},
            optionRemove: {default: false, type: Boolean},
        },

        computed: {
            haveOptions () {
                return this.optionCollapse || this.optionRemove
            }
        }
    }
</script>

<style scoped>

</style>
