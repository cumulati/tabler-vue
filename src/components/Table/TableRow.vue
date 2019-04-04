<template>
    <!-- only register click event handler if we have a handler to register -->
    <tr @click="doClick" v-if="onClick"> <slot/> </tr>
    <tr v-else> <slot/> </tr>
</template>

<script>
export default {
    name: 'table-row',
    props: {
        onClick: {default: false}
    },

    methods: {
        doClick (e) {
            if (this.onClick !== false) {
                this.onClick(e)
            }
        }
    }
}
</script>
