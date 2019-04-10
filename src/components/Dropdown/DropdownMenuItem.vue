<template>
    <component :is="which" :to="routerLink" href="#" class="dropdown-item">
        <slot>
            <span v-if="!!badge" class="float-right"><span :class="`badge badge-${type}`">{{ badge }}</span></span>
            <icon v-if="!!icon" :icon="icon" :prefix="iconPrefix" class="dropdown-icon"/>
            {{ label }}
        </slot>
    </component>
</template>

<script>
    import Icon from '../Icon'

    export default {
      components: {Icon},
      name: "dropdown-menu-item",
        props: {
            icon: {default: false},
            iconPrefix: {default: 'fe'},
            label: {default: 'Dropdown Item'},
            badge: {default: false},
            type: {default: 'primary'},

            routerLink: {default: false}
        },

        computed: {
            which () {
                return !!this.routerLink ? 'router-link' : 'a'
            }
        }
    }
</script>

<style scoped>

</style>
