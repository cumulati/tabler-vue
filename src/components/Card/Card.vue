<template>
    <div class="card" :class="getClassName">
        <slot>
            <card-header v-if="title" :optionCollapse="optionCollapse" :optionRemove="optionRemove">{{ title }}</card-header>
            <card-body>{{ body }}</card-body>
            <card-footer v-if="footer">{{ footer }}</card-footer>
        </slot>
    </div>
</template>

<script>
    import CardHeader from "./CardHeader.vue";
    import CardFooter from "./CardFooter.vue";
    import CardBody from "./CardBody.vue";

    export default {
        name: "card",
        props: {
            title: {default: '', type: String},
            footer: {default: '', type: String},
            body: {default: '', type: String},
            collapsed: {default: false, type: Boolean},
            optionCollapse: {default: false, type: Boolean},
            optionRemove: {default: false, type: Boolean},
        },
        components: {
            CardBody,
            CardFooter,
            CardHeader
        },
        computed: {
            getClassName () {
                return {
                    'card-collapsed': this.collapsed
                }
            }
        }
    }
</script>

<style scoped>

</style>
