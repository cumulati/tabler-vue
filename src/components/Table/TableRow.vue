<template>
    <!-- only register click event handler if we have a handler to register -->
    <tr @click="onClick" v-if="onClick" :class="getClassName"> <slot/> </tr>
    <tr v-else :class="getClassName"> <slot/> </tr>
</template>

<script>
export default {
    name: 'table-row',
    props: {
        onClick: {default: false},

        /**
         * Sets cursor: pointer on element hover
         */
        pointer: {default: false}
    },

    computed: {
        getClassName () {
            let className = {}
            className['hover-pointer'] = this.pointer !== false
            return className
        }
    }
}
</script>
